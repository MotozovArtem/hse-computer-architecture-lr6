package ru.hse.edu.view;


import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ru.hse.edu.App;
import ru.hse.edu.algorithm.Algorithm;
import ru.hse.edu.algorithm.IAlgorithm;

public class StandardAlgorithmPane implements AlgorithmPane {

	private static final Logger log = LoggerFactory.getLogger(StandardAlgorithmPane.class);

	private Parent root;

	public static StandardAlgorithmPane Load() {
		FXMLLoader loader = App.injector.getInstance(FXMLLoader.class);
		Parent root = null;
		URL layoutResource = App.getLayoutResource("fxml/StandardAlgorithmPane.fxml");
		loader.setLocation(layoutResource);
		try (InputStream in = layoutResource.openStream()) {
			root = loader.load(in);
		} catch (IOException e) {
			throw new RuntimeException("Cannot load resource", e);
		}
		StandardAlgorithmPane instance = loader.getController();
		instance.root = root;
		return instance;
	}

	@Override
	public Parent getRoot() {
		return root;
	}

	@Override
	public Type getPaneType() {
		return null;
	}

	@Override
	public Algorithm getAlgorithmType() {
		return null;
	}

	@Override
	public IAlgorithm getAlgorithm() {
		return null;
	}

	@Override
	public void OnNext() {

	}

	@Override
	public void OnPrev() {

	}
}
