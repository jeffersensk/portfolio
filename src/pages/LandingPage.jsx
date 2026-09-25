import { LANDING_PAGE } from "../constants/content";
import './header.css';
import './LandingPage.css';
import cuttingMat from '../assets/cutting-mat.jpeg';

export function LandingPage() {

    return(
        <>
            <title>Jeff's Portfolio</title>

            <div className="header">
                
                <a className="home-link" href="/" aria-label="Home" title="Home">j</a>
                <a className="about-me-link" href="/aboutMe">About Me</a>
                <a className="projects-link" href="/projects">Projects</a>
                <a className="musics-link" href="/musics">Musics</a>

            </div>

            <div className="homepage">

                <h1>{LANDING_PAGE.title}</h1>

                <h2>{LANDING_PAGE.subtitle}</h2>

                <button className="work-with-me-button">
                    Work with me
                </button>

                <img src={cuttingMat} alt="Logo" />

                <p>{LANDING_PAGE.descriptionParagraphs}</p>

            </div>

            <div className="footer">
                <p>jeffersen . . 2026</p>
            </div>
        </>
    );
}