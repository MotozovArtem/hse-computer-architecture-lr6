package ru.hse.edu.model;

import java.util.List;

public class Memory {

	private List<Tag> tagCache;

	private List<Data> dataCache;

	public List<Tag> getTagCache() {
		return tagCache;
	}

	public void setTagCache(List<Tag> tagCache) {
		this.tagCache = tagCache;
	}

	public List<Data> getDataCache() {
		return dataCache;
	}

	public void setDataCache(List<Data> dataCache) {
		this.dataCache = dataCache;
	}
}
