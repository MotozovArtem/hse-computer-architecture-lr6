import Tag from "./Tag";
import Data from "./Data";

export default class Memory {
    private _tagCache: Array<Tag>;
    private _dataCache: Array<Data>;
    

	constructor(tagCache: Array<Tag>, dataCache: Array<Data>) {
		this._tagCache = tagCache;
		this._dataCache = dataCache;
	}

    /**
     * Getter tagCache
     * @return {Array<Tag>}
     */
	public get tagCache(): Array<Tag> {
		return this._tagCache;
	}

    /**
     * Getter dataCache
     * @return {Array<Data>}
     */
	public get dataCache(): Array<Data> {
		return this._dataCache;
	}

    /**
     * Setter tagCache
     * @param {Array<Tag>} value
     */
	public set tagCache(value: Array<Tag>) {
		this._tagCache = value;
	}

    /**
     * Setter dataCache
     * @param {Array<Data>} value
     */
	public set dataCache(value: Array<Data>) {
		this._dataCache = value;
	}

}