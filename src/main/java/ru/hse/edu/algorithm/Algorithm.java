package ru.hse.edu.algorithm;

public enum Algorithm {
	RND("RND"),
	LRU("LRU"),
	LFU("LFU"),
	MRU("MRU"),
	FIFO("FIFO"),
	ARC("ARC"),
	CAR("CAR");

	Algorithm(String text) {
		this.text = text;
	}

	public final String text;
}
