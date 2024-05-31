import "./ad.css";
import "./styles.css";
import Ad from "./components/Ad";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./components/Projects";
import Games from "./components/Games";
import About from "./components/About";
import { useState, useEffect } from "react";

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
        <div className="App">
            <Router>
                <Header posts={posts}></Header>
                <main>
                    <Navigation></Navigation>
                    <Routes>
                        <Route path="/" element={<Post posts={posts} />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                        <Route path="/games" element={<Games />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>
                </main>
                <Ad></Ad>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
