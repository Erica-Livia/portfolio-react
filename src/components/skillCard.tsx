import React from "react";
import { iconMap } from "../utils/iconMap";
type Skill = {
    name: string;
    icon: string;
    years: string;
    level: string;
};

const SkillCard: React.FC<Skill> = ({ name, icon, years, level }) => {
    const IconComponent = iconMap[icon];

    if (!IconComponent) return null;

    return (
        <div className="skill-card">
            <IconComponent className="icon" />
            <h3>{name}</h3>
            <p>{years} of Experience</p>
            <p>{level}</p>
        </div>
    );
};

export default SkillCard;
