import React, { useState, useEffect } from "react";
import "../css/styles.css";
import GameCell from "./GameCell";
import "../css/Games.css";

export default function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("https://it-nonsenseapi.onrender.com/games")
            .then((response) => response.json())
            .then((games) => {
                setGames(games);
            });
    });

    return (
        <div className="container">
            <h2 className="container-title">Games</h2>
            <div className="games-container">
                {games.map((game) => (
                    <GameCell game={game} />
                ))}
            </div>
        </div>
    );
}
