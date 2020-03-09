import IAlgorithm from "./IAlgorithm";
import Algorithm from "./Algorithms";

export default class ArcAlgorithm implements IAlgorithm{
    getAlgorithm(): Algorithm {
        return Algorithm.ARC;
    }
    
}