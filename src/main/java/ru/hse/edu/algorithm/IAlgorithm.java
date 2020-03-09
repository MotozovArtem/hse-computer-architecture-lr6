package ru.hse.edu.algorithm;

import ru.hse.edu.model.AddressWordInMemory;
import ru.hse.edu.model.Memory;

public interface IAlgorithm {
	Algorithm getAlgorithmType();

	/**
	 *
	 * @param memory - current memory state
	 * @param addressWordInMemory - address word in RAM
	 * @return newMemoryState;
	 */
	Memory doStep(Memory memory, AddressWordInMemory addressWordInMemory);
}
