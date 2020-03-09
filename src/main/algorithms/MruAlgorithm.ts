import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class MruAlgorithm implements IAlgorithm{

    getAlgorithmType(): Algorithms {
        return Algorithms.MRU;
    }
    
}