package ru.hse.edu.model;

import javax.inject.Singleton;

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ru.hse.edu.algorithm.Algorithm;

@Singleton
public class AlgorithmModel {
	private static final Logger log = LoggerFactory.getLogger(AlgorithmModel.class);

	private final ObjectProperty<Algorithm> currentAlgorithm = new SimpleObjectProperty<>(null);

	public void setCurrentAlgorithm(Algorithm algorithm) {
		log.info("Current algorithm changed: {}", algorithm);
		currentAlgorithm.setValue(algorithm);
	}
}
