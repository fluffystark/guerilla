import "flexboxgrid";
import About from "./organisms/About";
import Hero from "./organisms/Hero";
import Properties from "./organisms/Properties";

function App() {
    return (
        <main className="App">
            <Hero />
            <Properties />
            <About />
        </main>
    );
}

export default App;
