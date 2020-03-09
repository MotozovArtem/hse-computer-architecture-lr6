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

export default class Content extends React.Component<{}, {}> {
    public render() {
        debugger;
        return (
            <Switch>
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
                <Route path={Routes.HOME}>
                    <Manual />
                </Route>
            </Switch>
        );

    }
}