import React from "react";

export default class Navbar extends React.PureComponent {
    public render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">RND</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FIFO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MRU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ARC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CAR</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">LFU</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}