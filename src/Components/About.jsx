import './About.css'
import aboutImg from '../Images/about-img.jpg'

function About() {
    return (
        <section className="about-section">
            <article className = "about">
                <div className="about-text">
                    <h1>What's the purpose of this website?</h1>
                    <p>Most of the people I talk to have misconception or myths about Vikings so I thought of making this website to clear most of the misconceptions</p>
                    <div  className="about-btn">
                        <button>Bust your Myths</button>
                    </div>
                </div>
                <div className = "about-img">
                    <img src={aboutImg} alt="" />
                </div>
            </article>
        </section>
    )
}

export default About
