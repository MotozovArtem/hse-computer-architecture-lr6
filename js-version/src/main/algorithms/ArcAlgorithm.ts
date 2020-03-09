import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class ArcAlgorithm implements IAlgorithm{
    getAlgorithmType(): Algorithms {
        return Algorithms.ARC;
    }
    
}