import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

export default class Center extends React.PureComponent {
    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <Content />
                    </main>
                </div>
            </div >
        );
    }
}