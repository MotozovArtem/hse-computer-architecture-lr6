import IAlgorithm from "./IAlgorithm";
import Algorithm from "./Algorithms";

export default class FifoAlgorithm implements IAlgorithm{
    getAlgorithm(): Algorithm {
        return Algorithm.FIFO;
    }
    
}