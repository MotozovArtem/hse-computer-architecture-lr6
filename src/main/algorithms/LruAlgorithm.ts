import IAlgorithm from "./IAlgorithm";
import Algorithm from "./Algorithms";

export default class LruAlgorithm implements IAlgorithm{
    getAlgorithm(): Algorithm {
        return Algorithm.LRU;
    }
    
}