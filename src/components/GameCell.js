import React from "react";
import "../css/GameCell.css";
import { Link } from "react-router-dom";

export default function GameCell({ game }) {
    return (
        <div key={game.id} className="game">
            <Link to={`../${game.pageUrl}`}>
                <img className="game-image" src={game.imageUrl} alt={game.title} />
                <p className="game-title">{game.title}</p>
            </Link>
        </div>
    );
}
