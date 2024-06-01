import React, { useState, useEffect } from "react";
import "../css/styles.css";
import GameCell from "./GameCell";
import "../css/Games.css";

export default function Games() {
    const [games, setGames] = useState([
        {
            id: "1",
            title: "Test Game g fd gnfdgndgf n gfn gfd ngf",
            pageUrl: "game/test",
            imageUrl: "image/games/game2.png",
        },
        {
            id: "2",
            title: "Test Game",
            pageUrl: "game/test",
            imageUrl: "image/games/game2.png",
        },
        {
            id: "3",
            title: "Test Game",
            pageUrl: "game/test",
            imageUrl: "image/games/game2.png",
        },
        {
            id: "4",
            title: "Test Game",
            pageUrl: "game/test",
            imageUrl: "image/games/game2.png",
        },
        {
            id: "5",
            title: "Test Game",
            pageUrl: "game/test",
            imageUrl: "image/games/game2.png",
        },
        {
            id: "6",
            title: "Test Game",
            pageUrl: "game/test",
            imageUrl: "image/games/game2.png",
        },
    ]);

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
