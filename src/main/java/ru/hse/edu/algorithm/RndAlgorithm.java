package ru.hse.edu.algorithm;

import ru.hse.edu.model.AddressWordInMemory;
import ru.hse.edu.model.Memory;

public class RndAlgorithm implements IAlgorithm {
	@Override
	public Algorithm getAlgorithmType() {
		return Algorithm.RND;
	}

	@Override
	public Memory doStep(Memory memory, AddressWordInMemory addressWordInMemory) {
		return null;
	}
}
