import React from "react";

export default class Header extends React.PureComponent {
    public render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Лабораторная работа №6</a>
            </nav>
        );
    }
}