import IAlgorithm from "@/main/algorithms/IAlgorithm";

export default interface IAlgorithmView {
    updateTable(): void;

    getAlgorithm(): IAlgorithm;
}