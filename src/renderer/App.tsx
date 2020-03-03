import React from "react";
import { HashRouter, Route } from "react-router-dom";
import MainPage from "./component/MainPage";

export default class App extends React.PureComponent {

    public render() {
        return (
            <HashRouter>
                <div className="App">
                    <Route path="" component={MainPage}/>
                </div>
            </HashRouter>
        );
    }
}