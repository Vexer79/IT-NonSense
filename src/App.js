import "./css/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Game from "./components/Game";
import Post from "./components/Post";
import Projects from "./components/Projects";
import Games from "./components/Games";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const testObject = {
            title: "Title",
            content: "Test Content",
            author: "Vexer69",
            createdAt: new Date().toISOString(),
        };
        setPost([testObject, testObject, testObject, testObject, testObject, testObject]);
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Blog />}>
                    <Route path="/" element={<Post posts={posts} />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/games" element={<Games />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Route>
                <Route path="/game/test" element={<Game />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
