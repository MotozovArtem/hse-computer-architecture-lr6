import React from "react";
import { Route, HashRouter } from "react-router-dom";
import MainPage from "./component/MainPage";
import Header from "./component/Header";
import Center from "./component/Center";
import Footer from "./component/Footer";

export default class App extends React.PureComponent {

    public render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header />
                    <Center />
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}