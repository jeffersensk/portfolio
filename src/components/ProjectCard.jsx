import './ProjectCard.css';

export function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-image-placeholder">
                <div className="project-text-overlay">
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>
                    <p className="project-details">{project.language} | {project.framework}</p>
                </div>
            </div>
        </div>
    );
}