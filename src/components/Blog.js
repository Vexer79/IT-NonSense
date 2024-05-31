import React from "react";
import Ad from "./Ad";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Blog({ content }) {
    return (
        <div className="App">
            <Header></Header>
            <main>
                <Navigation></Navigation>
                <Outlet />
            </main>
            <Ad></Ad>
            <Footer></Footer>
        </div>
    );
}
