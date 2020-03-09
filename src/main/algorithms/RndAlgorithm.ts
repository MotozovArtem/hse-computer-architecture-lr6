import IAlgorithm from "./IAlgorithm";
import Algorithms from "./Algorithms";

export default class RndAlgorithm implements IAlgorithm{
    getAlgorithmType(): Algorithms {
        return Algorithms.RND;
    }
    
}