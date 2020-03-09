export default class Data {
    private _dataCacheAddress: number;
    private _valid: boolean;
    private _dirty: boolean;
    private _cachedString: string;


	constructor(dataCacheAddress: number, valid: boolean, dirty: boolean, data: string) {
		this._dataCacheAddress = dataCacheAddress;
		this._valid = valid;
		this._dirty = dirty;
		this._cachedString = data;
	}

    /**
     * Getter cacheAddress
     * @return {number}
     */
	public get cacheAddress(): number {
		return this._dataCacheAddress;
	}

    /**
     * Getter valid
     * @return {boolean}
     */
	public get valid(): boolean {
		return this._valid;
	}

    /**
     * Getter dirty
     * @return {boolean}
     */
	public get dirty(): boolean {
		return this._dirty;
	}

    /**
     * Getter data
     * @return {string}
     */
	public get data(): string {
		return this._cachedString;
	}

    /**
     * Setter cacheAddress
     * @param {number} value
     */
	public set cacheAddress(value: number) {
		this._dataCacheAddress = value;
	}

    /**
     * Setter valid
     * @param {boolean} value
     */
	public set valid(value: boolean) {
		this._valid = value;
	}

    /**
     * Setter dirty
     * @param {boolean} value
     */
	public set dirty(value: boolean) {
		this._dirty = value;
	}

    /**
     * Setter data
     * @param {string} value
     */
	public set data(value: string) {
		this._cachedString = value;
	}
    
}