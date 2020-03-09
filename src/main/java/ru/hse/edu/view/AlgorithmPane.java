package ru.hse.edu.view;

import javafx.scene.Parent;

import ru.hse.edu.algorithm.Algorithm;
import ru.hse.edu.algorithm.IAlgorithm;

public interface AlgorithmPane {
	enum Type {
		STANDARD("Standard replacement algorithms (RND, LRU, LFU, MRU, FIFO)"),
		ARC("Adaptive Replacement Cache algorithm"),
		CAR("Clock with Adaptive Replacement");

		Type(String displayName) {
			this.displayName = displayName;
		}

		final String displayName;
	}

	Parent getRoot();

	Type getPaneType();

	Algorithm getAlgorithmType();

	IAlgorithm getAlgorithm();

	void OnNext();

	void OnPrev();
}
