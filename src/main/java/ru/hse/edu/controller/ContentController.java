package ru.hse.edu.controller;

import java.util.Objects;
import javax.inject.Inject;
import javax.inject.Singleton;

import ru.hse.edu.model.AlgorithmModel;

@Singleton
public class ContentController {

	private AlgorithmModel algorithmModel;

	@Inject
	public ContentController(AlgorithmModel algorithmModel) {
		Objects.requireNonNull(algorithmModel);

	}
}
