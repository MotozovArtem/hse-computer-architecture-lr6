package ru.hse.edu.model;

public class Data {
	private Integer dataCacheAddress;
	private Boolean valid;
	private Boolean dirty;
	private String cachedString;

	public Data() {
	}

	public Integer getDataCacheAddress() {
		return dataCacheAddress;
	}

	public void setDataCacheAddress(Integer dataCacheAddress) {
		this.dataCacheAddress = dataCacheAddress;
	}

	public Boolean getValid() {
		return valid;
	}

	public void setValid(Boolean valid) {
		this.valid = valid;
	}

	public Boolean getDirty() {
		return dirty;
	}

	public void setDirty(Boolean dirty) {
		this.dirty = dirty;
	}

	public String getCachedString() {
		return cachedString;
	}

	public void setCachedString(String cachedString) {
		this.cachedString = cachedString;
	}
}
