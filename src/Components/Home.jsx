import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import './Home.css'

function Home() {
    return (
        <>
          <section className="nav-hero">
            <Navbar/>
            <Hero/>
          </section>
          <About/>
          <Contact/>  
        </>
    )
}

export default Home