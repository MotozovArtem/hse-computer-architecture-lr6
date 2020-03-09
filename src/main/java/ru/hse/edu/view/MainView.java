package ru.hse.edu.view;

import javax.inject.Inject;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.ChoiceBox;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Priority;
import javafx.scene.layout.VBox;
import javafx.util.StringConverter;

import ru.hse.edu.algorithm.Algorithm;
import ru.hse.edu.model.AlgorithmModel;
import ru.hse.edu.model.MemoryModel;

public class MainView {

	@FXML
	private VBox vbox_algorithmPane;

	@FXML
	private Button btn_next, btn_prev;

	@FXML
	private ChoiceBox<Algorithm> cb_algorithm;

	@FXML
	private ChoiceBox<Integer> cb_variant;

	@Inject
	private MemoryModel memoryModel;

	@Inject
	private AlgorithmModel algorithmModel;

	private AlgorithmPane selectedAlgorithmPane;

	private StandardAlgorithmPane standardAlgorithmPane;

	private ArcAlgorithmPane arcAlgorithmPane;

	private CarAlgorithmPane carAlgorithmPane;

	@FXML
	public void initialize() {
		standardAlgorithmPane = StandardAlgorithmPane.Load();
		arcAlgorithmPane = ArcAlgorithmPane.Load();
		carAlgorithmPane = CarAlgorithmPane.Load();

		cb_algorithm.getItems().addAll(Algorithm.values());
		cb_algorithm.getSelectionModel().selectedItemProperty().addListener((obv, old, _new) -> {
			switch (_new) {
				case LFU:
				case LRU:
				case MRU:
				case RND:
				case FIFO:
					selectedAlgorithmPane = standardAlgorithmPane;
					break;
				case ARC:
					selectedAlgorithmPane = arcAlgorithmPane;
					break;
				case CAR:
					selectedAlgorithmPane = carAlgorithmPane;
					break;
			}
			algorithmModel.setCurrentAlgorithm(_new);
			HBox.setHgrow(selectedAlgorithmPane.getRoot(), Priority.ALWAYS);
			vbox_algorithmPane.getChildren().setAll(selectedAlgorithmPane.getRoot());
		});
		cb_algorithm.setConverter(new StringConverter<Algorithm>() {
			@Override
			public String toString(Algorithm object) {
				return object.toString();
			}

			@Override
			public Algorithm fromString(String string) {
				throw new UnsupportedOperationException();
			}
		});
	}
}
