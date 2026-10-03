import { ABOUT_PAGE } from "../constants/content";
import { Link } from 'react-router'
import './header.css';

export function AboutMe() {

    return(
        <>
            <title>Jeff's Portfolio</title>

             <div className="header">
                
                <Link className="home-link" to="/" aria-label="Home" title="Home">j</Link>
                <Link className="projects-link" to="/projects">Projects</Link>
                <Link className="musics-link" to="/musics">Musics</Link>

            </div>

            <div>
                <h1>{ABOUT_PAGE.title}</h1>

                <p>{ABOUT_PAGE.descriptionParagraphs}</p>

                <p>{ABOUT_PAGE.bottomParagraph}</p>

            </div>
        </>
    );
}