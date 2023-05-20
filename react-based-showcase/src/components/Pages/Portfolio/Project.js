
import seed from './seeds.js';

function Project({ projects }) {
    return (
        <div>
            {projects.map((project, index) => (
                <div key={index} className="projectCard">
                    <a href={project.link} className="projectA">
                        <img src={project.photo} className="projectPhoto" />
                        <h2 className="projectTitle cavent">{project.title}</h2>
                    </a>
                    <p className="projectDesc crimson">{project.desc}</p>
                </div>
            ))}
        </div>
    );
}
export default Project;