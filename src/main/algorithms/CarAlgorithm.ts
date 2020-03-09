import IAlgorithm from "./IAlgorithm";
import Algorithm from "./Algorithms";

export default class CarAlgorithm implements IAlgorithm{
    getAlgorithm(): Algorithm {
        return Algorithm.CAR;
    }
    
}