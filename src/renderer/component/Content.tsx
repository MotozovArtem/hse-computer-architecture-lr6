import React from "react";

export default class Content extends React.PureComponent {
    public render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid">
                    <h1>Hello world! With bootstrap4!</h1>
                </div>
            </main>
        );
    }
}