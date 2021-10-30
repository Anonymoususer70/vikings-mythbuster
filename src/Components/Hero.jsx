import './Hero.css'
import heroImg from '../Images/hero-img (1).png'

function Hero() {
    return (
        <section className="hero-section">
            <article className = "hero">
                <div className = "hero-text">
                    <h1>Vikings' History Mythbuster</h1>
                    <p>There are a lot of myths about Vikings, just thought of breaking them. So, here's a Vikings' MythBuster Website</p>
                    <div className ="hero-btn">
                        <button>Go To Website</button>
                    </div>
                </div>
                <div className = "hero-img">
                    <img src={heroImg} alt="" />
                </div>
            </article>
        </section> 
    )
}

export default Hero
