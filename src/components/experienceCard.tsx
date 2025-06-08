import React from 'react';

interface ExperienceCardProps {
    title: string;
    company: string;
    duration: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, description }) => {
    return (
        <div className="experience-card">
            <h3 className="experience-title">{title}</h3>
            <h4 className="experience-company">{company}</h4>
            <p className="experience-duration">📅 {duration}</p>
            <p className="experience-description">{description}</p>
        </div>
    );
};

export default ExperienceCard;