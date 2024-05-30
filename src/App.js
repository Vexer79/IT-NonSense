import "./ad.css";
import "./styles.css";
import Ad from "./components/Ad";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <main>
                <Navigation></Navigation>
                <Post></Post>
            </main>
            <Ad></Ad>
            <Footer></Footer>
        </div>
    );
}

export default App;
