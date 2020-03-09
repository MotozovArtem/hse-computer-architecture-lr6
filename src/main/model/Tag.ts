export default class Tag {
    private _tagAddress: string;
    private _dataCacheAddress: number;


	constructor(tagAddress: string, dataCacheAddress: number) {
		this._tagAddress = tagAddress;
		this._dataCacheAddress = dataCacheAddress;
	}


    /**
     * Getter tagAddress
     * @return {string}
     */
	public get tagAddress(): string {
		return this._tagAddress;
	}

    /**
     * Getter dataCacheAddress
     * @return {number}
     */
	public get dataCacheAddress(): number {
		return this._dataCacheAddress;
	}

    /**
     * Setter tagAddress
     * @param {string} value
     */
	public set tagAddress(value: string) {
		this._tagAddress = value;
	}

    /**
     * Setter dataCacheAddress
     * @param {number} value
     */
	public set dataCacheAddress(value: number) {
		this._dataCacheAddress = value;
	}


}