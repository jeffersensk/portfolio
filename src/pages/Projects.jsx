import './header.css';
import './Projects.css';
import { useState } from 'react'
import { getProjects } from '../projects/projectsData'
import { PROJECTS_PAGE } from '../constants/content'
import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
    const projects = getProjects()
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

    const showPreviousProject = () => {
        setCurrentProjectIndex((currentIndex) =>
            currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
        )
    }

    const showNextProject = () => {
        setCurrentProjectIndex((currentIndex) =>
            currentIndex === projects.length - 1 ? 0 : currentIndex + 1,
        )
    }

    return(
        <>
            <title>Jeff's Projects</title>

             <div className="header">
                
                <a className="home-link" href="/" aria-label="Home" title="Home">j</a>
                <a className="about-me-link" href="/aboutMe">About Me</a>
                <a className="musics-link" href="/musics">Musics</a>

            </div>

            <main>
                <div className="projects">
                    <h1>Projects</h1>
                    <p className="projects">{PROJECTS_PAGE.description}</p>

                </div>

                <div className="project-carousel">
                    <button
                        className="project-carousel-arrow"
                        type="button"
                        onClick={showPreviousProject}
                        aria-label="Show previous project"
                    >
                        <span aria-hidden="true">&larr;</span>
                    </button>

                    <div className="project-cards" aria-live="polite">
                        <ProjectCard project={projects[currentProjectIndex]} />
                    </div>

                    <button
                        className="project-carousel-arrow"
                        type="button"
                        onClick={showNextProject}
                        aria-label="Show next project"
                    >
                        <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
                
                
            </main>
        </>
    );
}