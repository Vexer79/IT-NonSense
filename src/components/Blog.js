import React from "react";
import Ad from "./Ad";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Blog() {
    return (
        <div className="App">
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Ad></Ad>
            <Footer></Footer>
        </div>
    );
}
