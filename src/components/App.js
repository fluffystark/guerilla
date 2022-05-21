import "flexboxgrid";
import About from "./organisms/About";
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
        </>
    );
}

export default App;
