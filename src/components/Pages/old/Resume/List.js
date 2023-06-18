import React from 'react';

function SkillsList({ skills }) {
    return (
        <ul>
            {skills.map((text) => (
                <li className=''>{text}</li>
            ))}
        </ul>
    );
}

export default SkillsList;