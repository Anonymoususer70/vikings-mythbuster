import Navbar from "./Components/Navbar";
import './App.css'
import Hero from './Components/Hero'
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <section className = "nav-hero">
        <Navbar/>
        <Hero/>
      </section>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;