

function Project({ projects }) {
    return (

        projects.map(({ photo, phototext, link, title, desc }, index) => (
            <div key={index} className="projectCard">
                <div className="shadowProject">

                    <a href={link} className="projectA">
                        <img src={photo} className="projectPhoto" alt={phototext} />
                        <h2 className="projectTitle cavent">{title}</h2>
                    </a>
                </div>
                <p className="projectDesc crimson">{desc}</p>
            </div>
        ))
    );
}
export default Project;