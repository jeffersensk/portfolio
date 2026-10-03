import { LANDING_PAGE } from "../constants/content";
import { Link } from 'react-router'
import './header.css';
import './LandingPage.css';
import cuttingMat from '../assets/cutting-mat.jpeg';

export function LandingPage() {

    return(
        <>
            <title>Jeff's Portfolio</title>

            <div className="header">
                
                <Link className="home-link" to="/" aria-label="Home" title="Home">j</Link>
                <Link className="about-me-link" to="/aboutMe">About Me</Link>
                <Link className="projects-link" to="/projects">Projects</Link>
                <Link className="musics-link" to="/musics">Musics</Link>

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