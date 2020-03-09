import IAlgorithm from "./IAlgorithm";
import Algorithm from "./Algorithms";

export default class MruAlgorithm implements IAlgorithm{

    getAlgorithm(): Algorithm {
        return Algorithm.MRU;
    }
    
}