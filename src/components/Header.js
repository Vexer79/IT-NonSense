import React from "react";
import "../styles.css";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>IT-Нісенітниця</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Games</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
