import "flexboxgrid";
import About from "./organisms/About";
import Footer from "./organisms/Footer";
import Hero from "./organisms/Hero";
import Nav from "./organisms/Nav";
import Properties from "./organisms/Properties";

function App() {
    return (
        <>
            <Nav />
            <main className="App">
                <Hero />
                <Properties />
                <About />
            </main>
            <Footer />
        </>
    );
}

export default App;
