import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class LfuAlgorithm implements IAlgorithm{
    getAlgorithm(): Algorithms {
        return Algorithms.LFU;
    }
    
} 