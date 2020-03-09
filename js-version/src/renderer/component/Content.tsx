import React from "react";
import { Route, Switch } from "react-router-dom";
import RndView from "./algorithms/RndView";
import LruView from "./algorithms/LruView";
import MruView from "./algorithms/MruView";
import LfuView from "./algorithms/LfuView";
import ArcView from "./algorithms/ArcView";
import CarView from "./algorithms/CarView";
import FifoView from "./algorithms/FifoView";
import Manual from "../util/Manual";
import Routes from "../util/Routes";
import IAlgorithm from "../../main/algorithms/IAlgorithm";
import Home from "./Home";
import RndAlgorithm from "../../main/algorithms/RndAlgorithm";
import FifoAlgorithm from "../../main/algorithms/FifoAlgorithm";
import CarAlgorithm from "../../main/algorithms/CarAlgorithm";
import ArcAlgorithm from "../../main/algorithms/ArcAlgorithm";
import LfuAlgorithm from "../../main/algorithms/LfuAlgorithm";
import MruAlgorithm from "../../main/algorithms/MruAlgorithm";
import LruAlgorithm from "../../main/algorithms/LruAlgorithm";

export default class Content extends React.Component<{}, {}> {
    private _currentAlgorithm: RndAlgorithm | null;

    constructor(props: any, state: any) {
        super(props, state);
        this.state = state;
        this._currentAlgorithm = null;
    }

    public render() {
        debugger;
        return (
            <Switch>
                <Route path={Routes.HOME} exact strict>
                    <Home />
                </Route>
                <Route path={Routes.MANUAL}>
                    <Manual />
                </Route>
                <Route path={Routes.RND}>
                    {this._currentAlgorithm = new RndAlgorithm()}
                    <RndView />
                </Route>
                <Route path={Routes.LRU} >
                    {this._currentAlgorithm = new LruAlgorithm()}
                    <LruView />
                </Route>
                <Route path={Routes.MRU} >
                    {this._currentAlgorithm = new MruAlgorithm()}
                    <MruView />
                </Route>
                <Route path={Routes.LFU} >
                    {this._currentAlgorithm = new LfuAlgorithm()}
                    <LfuView />
                </Route>
                <Route path={Routes.ARC} >
                    {this._currentAlgorithm = new ArcAlgorithm()}
                    <ArcView />
                </Route>
                <Route path={Routes.CAR} >
                    {this._currentAlgorithm = new CarAlgorithm()}
                    <CarView />
                </Route>
                <Route path={Routes.FIFO} >
                    {this._currentAlgorithm = new FifoAlgorithm()}
                    <FifoView />
                </Route>
            </Switch>
        );

    }
}