import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class CarAlgorithm implements IAlgorithm{
    getAlgorithmType(): Algorithms {
        return Algorithms.CAR;
    }
    
}