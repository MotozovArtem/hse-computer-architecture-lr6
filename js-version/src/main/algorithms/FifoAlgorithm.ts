import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class FifoAlgorithm implements IAlgorithm{
    getAlgorithmType(): Algorithms {
        return Algorithms.FIFO;
    }
    
}