import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default class Center extends React.PureComponent {
    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                    <Content />
                </div>
            </div>
        );
    }
}