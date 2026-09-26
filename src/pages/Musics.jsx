import './header.css';
import './Musics.css';
import { MUSICS_PAGE } from '../constants/content'

export function Musics() {

    return(
        <>
            <title>Jeff's Music</title>

             <div className="header">
                
                <a className="home-link" href="/" aria-label="Home" title="Home">j</a>
                <a className="about-me-link" href="/aboutMe">About Me</a>
                <a className="projects-link" href="/projects">Projects</a>

            </div>

            <h2 className="musics-title">Musics</h2>

            <p className="musics">{MUSICS_PAGE.description}</p>
        </>
    );
}