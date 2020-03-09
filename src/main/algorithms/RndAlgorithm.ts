import IAlgorithm from "./IAlgorithm";
import Algorithm from "./Algorithms";

export default class RndAlgorithm implements IAlgorithm{
    getAlgorithm(): Algorithm {
        return Algorithm.RND;
    }
    
}