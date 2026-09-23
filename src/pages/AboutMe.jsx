import { ABOUT_PAGE } from "../constants/content";
import './header.css';

export function AboutMe() {

    return(
        <>
            <title>Jeff's Portfolio</title>

             <div className="header">
                
                <a className="home-link" href="/" aria-label="Home" title="Home">
                    j
                </a>
                
                <a className="projects-link" href="/projects">
                    Projects
                </a>
                <a className="musics-link" href="/musics">
                    Musics
                </a>
            </div>

            <div>
                <h1>{ABOUT_PAGE.title}</h1>

                <p>{ABOUT_PAGE.descriptionParagraphs}</p>

                <p>{ABOUT_PAGE.bottomParagraph}</p>

            </div>
        </>
    );
}