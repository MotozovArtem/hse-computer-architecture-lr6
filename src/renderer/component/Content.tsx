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
import Algorithms from "@main/algorithms/Algorithms";
import Home from "./Home";

interface ContentState {
    _currentAlgorithm: Algorithms;
}

export default class Content extends React.Component<{}, ContentState> {


    constructor(props: any, state: ContentState) {
        super(props, state);
        this.state = state;
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
                    <RndView />
                </Route>
                <Route path={Routes.LRU} >
                    <LruView />
                </Route>
                <Route path={Routes.MRU} >
                    <MruView />
                </Route>
                <Route path={Routes.LFU} >
                    <LfuView />
                </Route>
                <Route path={Routes.ARC} >
                    <ArcView />
                </Route>
                <Route path={Routes.CAR} >
                    <CarView />
                </Route>
                <Route path={Routes.FIFO} >
                    <FifoView />
                </Route>
            </Switch>
        );

    }
}