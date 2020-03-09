import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class LfuAlgorithm implements IAlgorithm{
    getAlgorithmType(): Algorithms {
        return Algorithms.LFU;
    }
    
} 