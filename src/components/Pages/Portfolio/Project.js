import { useState } from "react";

function Project({ projects }) {
    const [rotations, setRotations] = useState([]);

    function handleMouseMove(event, index) {
        const height = window.innerHeight;
        const width = window.innerWidth;
        const yAxisDegree = (event.pageX / width) * 40 - 30;
        const xAxisDegree = (event.pageY / height) * 0 * 40 + 20;

        const updatedRotations = [...rotations];
        updatedRotations[index] = { xAxisDegree, yAxisDegree };
        setRotations(updatedRotations);

    }

    return (
        <>
            {projects.map(({ photo, phototext, link, title, desc }, index) => (
                <div key={index} className="projectCard">
                    <div
                        id={`shadowProject-${index}`}
                        className="shadowProject"
                        onMouseMove={(event) => handleMouseMove(event, index)}
                        style={{
                            transform: `rotateY(${rotations[index]?.yAxisDegree || 0}deg) rotateX(${rotations[index]?.xAxisDegree || 0
                                }deg)`,
                            transition: "transform 0.3s ease", // Add easing effect to the rotation animation
                        }}
                    >
                        <a href={link} className="projectA">
                            <img src={photo} className="projectPhoto" alt={phototext} />
                            <h2 className="projectTitle cavent">{title}</h2>
                        </a>
                    </div>
                    <p className="projectDesc crimson">{desc}</p>
                </div>
            ))}
        </>
    );
}

export default Project;