import IAlgorithm from "../algorithms/IAlgorithm";
import Memory from "../model/Memory";
import AddressWord from "../model/AddressWord";

export default class AddressWordController {
    private _algorithm: IAlgorithm;
    private _memory: Memory;
    private _addressWords: Array<AddressWord>;
    private _states: Array<Memory>;


	constructor(algorithm: IAlgorithm, memory: Memory, addressWords: Array<AddressWord>) {
		this._algorithm = algorithm;
		this._memory = memory;
        this._addressWords = addressWords;
        this._states = new Array();
        this._states.push(this._memory);
	}


    /**
     * Getter algorithm
     * @return {IAlgorithm}
     */
	public get algorithm(): IAlgorithm {
		return this._algorithm;
	}

    /**
     * Getter memory
     * @return {Memory}
     */
	public get memory(): Memory {
		return this._memory;
	}

    /**
     * Getter addressWords
     * @return {Array<AddressWord>}
     */
	public get addressWords(): Array<AddressWord> {
		return this._addressWords;
	}

    /**
     * Setter algorithm
     * @param {IAlgorithm} value
     */
	public set algorithm(value: IAlgorithm) {
		this._algorithm = value;
	}

    /**
     * Setter memory
     * @param {Memory} value
     */
	public set memory(value: Memory) {
		this._memory = value;
	}

    /**
     * Setter addressWords
     * @param {Array<AddressWord>} value
     */
	public set addressWords(value: Array<AddressWord>) {
		this._addressWords = value;
	}

}