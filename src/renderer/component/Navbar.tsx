import React from "react";
import { Link } from "react-router-dom";
import Routes from "../util/Routes";

export default class Navbar extends React.PureComponent {
    public render() {
        debugger;
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" to={Routes.HOME}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.MANUAL}>Manual</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.RND}>RND</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.FIFO}>FIFO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.MRU}>MRU</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.ARC}>ARC</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.CAR}>CAR</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.LFU}>LFU</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={Routes.LRU}>LRU</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}