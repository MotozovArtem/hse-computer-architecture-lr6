import React from "react";
import Routes from "../util/Routes";
import { Link } from "react-router-dom";

export default class Footer extends React.PureComponent {
    public render() {
        return (
            <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to={Routes.HOME}>МИЭМ НИУ ВШЭ 2020</Link>
            </nav>
        );
    }
}