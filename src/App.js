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
        const testObject = {
            title: "New Patch ",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis lorem ex, et vulputate magna dignissim ut. Nam et placerat tortor, eget ullamcorper justo. Quisque rutrum lacus et elit gravida, ut scelerisque mauris lobortis. Morbi varius nisl a hendrerit condimentum. Etiam mollis facilisis vestibulum. Donec erat tellus, accumsan et molestie ac, tempor ac neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc feugiat eu lectus in pulvinar. Aliquam erat volutpat. Curabitur arcu mi, dapibus a consectetur eu, bibendum nec turpis.",
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
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/game/test" element={<Game />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
