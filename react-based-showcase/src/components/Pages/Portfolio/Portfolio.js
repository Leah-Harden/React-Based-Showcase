
import Project from './Project';

import projects from './seed.js';



function Portfolio() {
    return (
        <div className='background projectPage'>
            <h2>Take a look around</h2>
            <Project projects={projects} />
        </div>

    )
}


export default Portfolio;