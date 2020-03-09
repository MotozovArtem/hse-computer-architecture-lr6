package ru.hse.edu.model;

import javax.inject.Singleton;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

@Singleton
public class MemoryModel {
	public ObservableList<Memory> memoryStateHistory = FXCollections.observableArrayList();

	public Memory getCurrentMemoryState() {
		// Get last
		return memoryStateHistory.get(memoryStateHistory.size() - 1);
	}

	public void pushMemoryState(Memory memoryState) {
		memoryStateHistory.add(memoryState);
	}
}
