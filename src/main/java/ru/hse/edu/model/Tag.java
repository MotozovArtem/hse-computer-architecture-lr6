package ru.hse.edu.model;

public class Tag {

	private String tagAddress;

	private Integer dataCacheAddress;

	public Tag() {
	}

	public String getTagAddress() {
		return tagAddress;
	}

	public void setTagAddress(String tagAddress) {
		this.tagAddress = tagAddress;
	}

	public Integer getDataCacheAddress() {
		return dataCacheAddress;
	}

	public void setDataCacheAddress(Integer dataCacheAddress) {
		this.dataCacheAddress = dataCacheAddress;
	}
}
