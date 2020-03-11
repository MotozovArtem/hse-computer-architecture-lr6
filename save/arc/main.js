// Инициализация
// Таблицы
let t1 = document.getElementById("t1");
let b1 = document.getElementById("b1");
let t2 = document.getElementById("t2");
let b2 = document.getElementById("b2");
let processor = document.getElementById("processor");
let tags = document.getElementById("tags");
let cache = document.getElementById("cache");
// Кнопки
let nextBtn = document.getElementById("next");
let backBtn = document.getElementById("back");
let deleteBtn = document.getElementById("delete");
let parameter = document.getElementById("parameter");
let comments = document.getElementById("comments");
// Настройки кэш: размер кэш-памяти и целевой размер для T1
let c = 16;
let p = 8;
// Данные из выбранного варианта
let cashArr, shadowArr, searchArr;
// Переменные, для хранения промежуточных состояний таблиц
let previousT1_1, previousT2_1, previousB1_1, previousB2_1, previousProcessor_1, previousTags_1, previousCache_1;
let previousT1_2, previousT2_2, previousB1_2, previousB2_2, previousProcessor_2, previousTags_2, previousCache_2;
// Указатель на текущую строку
let pointer = 0;
// Параметр, определяющий условия удаления строки
let valid_dirty;
var WAIT_TIME_MILLIS = 3000; // Ожидание в миллисекундах

//Выбираем вариант и заполняем таблицы данными из варианта
document.getElementById("variant").addEventListener("change", function () {
	// отображаем таблицы
	let elems = document.querySelectorAll(".hide");
	[].forEach.call(elems, function (el) {
		el.classList.remove("hide");
	});
	// // прячем поле выбора варианта 
	// elems = document.querySelectorAll(".variant");
	// [].forEach.call(elems, function (el) {
	// 	el.classList.add("hide");
	// });
	// читаем данные варианта из json-файла
	let arr = readTextFile(this.value);
	cashArr = arr[0];
	shadowArr = arr[1];
	searchArr = arr[2];
	// заполняем таблицы данными
	fillTables()
});

// заполнение таблиц начальными данными, считанными из json-файла
function fillTables() {
	for (let i = 0; i < searchArr.length; i++) {
		processor.tBodies[0].innerHTML += `<tr><td>${searchArr[i]}</td><td>${randomInteger(0, 15)}</td></tr>`;
	}

	for (let i = 0; i < p; i++) {
		t1.tBodies[0].innerHTML += `<tr><td>string ${cashArr[i]}0</td></tr>`;
		t2.tBodies[0].innerHTML += `<tr><td>string ${cashArr[i + 8]}0</td></tr>`;
		b1.tBodies[0].innerHTML += `<tr><td>string ${shadowArr[i]}0</td></tr>`;
		b2.tBodies[0].innerHTML += `<tr><td>string ${shadowArr[i + 8]}0</td></tr>`;
	}

	for (let i = 0; i < c; i++) {
		tags.tBodies[0].innerHTML += `<tr><td>${cashArr[i]}</td><td>${i}</td></tr>`
		cache.tBodies[0].innerHTML += `<tr>
			<td>${i}</td>
			<td>${randomInteger(0, 1)}</td>
			<td>${randomInteger(0, 1)}</td>
			<td>${i < c / 2 ? 0 : 1}</td>
			<td>string ${cashArr[i]}0</td>
			</tr>`
	}
}

// чтение данных из json-файла
// variantNum - номер выбранного варианта
function readTextFile(variantNum) {
	let fs = require('fs');
	let res = fs.readFileSync('resources/app/arc/arcVariants.json', 'utf8');
	res = JSON.parse(res);
	let arr = [res[`cashArr${variantNum}`], res[`shadowArr${variantNum}`], res[`searchArr${variantNum}`]];
	return arr;
}

// отрабатываем нажатие на кнопки
nextBtn.addEventListener("click", nextBtnOnClick);
backBtn.addEventListener("click", backBtnOnClick);
deleteBtn.addEventListener("click", deleteBtnOnClick);
// блокирую часть кнопок
backBtn.disabled = true;
deleteBtn.disabled = true;
document.getElementById("option1").disabled = true;
document.getElementById("option2").disabled = true;