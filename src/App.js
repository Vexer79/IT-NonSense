import "./css/styles.css";
import "./css/App.css";
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
        fetch("https://it-nonsenseapi.onrender.com/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPost(posts);
            });
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Blog />}>
                    <Route path="/" element={<Post posts={posts} />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="/games" element={<Games />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/game/test" element={<Game />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
