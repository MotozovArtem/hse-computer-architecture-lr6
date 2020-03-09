import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class LruAlgorithm implements IAlgorithm{
    getAlgorithmType(): Algorithms {
        return Algorithms.LRU;
    }
    
}