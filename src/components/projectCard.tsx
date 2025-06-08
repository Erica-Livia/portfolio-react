import React from 'react';

interface ProjectCardProps {
    title: string;
    image: string;
    languages: string[];
    live: string;
    code: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, languages, live, code }) => {
    return (
        <div className="project-card">
            <div className="project-image-wrapper">
                <img src={image} className="project-image" alt={title} />
                <div className="overlay">
                    <a href={live} target="_blank" rel="noopener noreferrer" className="overlay-link">VIEW PROJECT</a>
                    <a href={code} target="_blank" rel="noopener noreferrer" className="overlay-link">VIEW CODE</a>
                </div>
            </div>
            <h2 className="project-title">{title}</h2>
            <p className="project-languages">{languages.join(', ')}</p>

            <div className="mobile-links">
                <a href={live} target="_blank" rel="noopener noreferrer" className="overlay-link">VIEW PROJECT</a>
                <a href={code} target="_blank" rel="noopener noreferrer" className="overlay-link">VIEW CODE</a>
            </div>
        </div>
    );
};

export default ProjectCard;
