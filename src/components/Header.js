import React from "react";
import "../styles.css";
import { Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>
                    <Link to="/">IT-Нісенітниця</Link>
                </h1>
            </div>
            <div className="icon-menu">
                <span></span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/games">Games</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
