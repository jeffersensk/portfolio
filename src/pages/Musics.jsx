import { Link } from 'react-router'
import './header.css';
import './Musics.css';
import { MUSICS_PAGE } from '../constants/content'

export function Musics() {

    return(
        <>
            <title>Jeff's Music</title>

             <div className="header">
                
                <Link className="home-link" to="/" aria-label="Home" title="Home">j</Link>
                <Link className="about-me-link" to="/aboutMe">About Me</Link>
                <Link className="projects-link" to="/projects">Projects</Link>

            </div>

            <h2 className="musics-title">Musics</h2>

            <p className="musics">{MUSICS_PAGE.description}</p>
        </>
    );
}