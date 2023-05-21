
import Project from './Project';

import BigProject from './BigProject';
import projects from './seed.js';



function Portfolio() {
    console.log(projects)
    return (
        <div className='background projectPage'>
            <h2 className='crimson portfolioTitle'>Take a look around</h2>
            <BigProject />
            <div className='projectDiv'>

                <Project projects={projects} />
            </div>
        </div>

    )
}


export default Portfolio;