export default class AddressWord {
    private _addressTag: string;
    private _cacheAddress: number;

    constructor(tag: string, cacheAddress: number) {
        this._addressTag = tag;
        this._cacheAddress = cacheAddress;
    }

    /**
     * Getter addressTag
     * @return {string}
     */
    public get addressTag(): string {
        return this._addressTag;
    }

    /**
     * Getter cacheAddress
     * @return {number}
     */
    public get cacheAddress(): number {
        return this._cacheAddress;
    }

    /**
     * Setter addressTag
     * @param {string} value
     */
    public set addressTag(value: string) {
        this._addressTag = value;
    }

    /**
     * Setter cacheAddress
     * @param {number} value
     */
    public set cacheAddress(value: number) {
        this._cacheAddress = value;
    }

}