
import List from './List.js';



function Resume() {
    const skills1 = ["problem-solving", 'effective communication with consumers, peers, and managers', 'organization', ' Answering customer queries and problems']

    const skills2 = ["Product Photography", 'Photoshop and correcting photos', 'Web Design', ' Answering customer queries and problems']

    const skills3 = [
        "Communicating to work effectively as a team",
        'Organizing workspace',
        'Collaborate with peers and managers']

    const skills4 = [
        "HTML and Handlebars",
        "CSS and Bootstrap",
        "Javascript and jQuery",
        "My-SQL",
        "APIs",
        "Version Control and Git",
        "Node Express",
        "Adobe Illustrator",
        "Adobe Photoshop"
    ];

    const hobbiesArray = [
        "Going to the gym",
        "Painting",
        "Journaling",
        "Being with family",
        "Reading"
    ];


    return (
        <div className="ResumeWhole">

            <h1>Employment History</h1>
            <hr></hr>

            <h2>Customer Service | 4Rivers</h2>
            <p>May 21-Aug 21, 2023</p>

            <h3>Skills:</h3>

            <List skills={skills1} />


            <h2>Graphic Design Intern | PlantOgram</h2>
            <p>May 21-Aug 21, 2022</p>
            <p>Skills:</p>

            <List skills={skills2} />


            <h2>Customer Service Associate - Cashier | Freshfields Farms</h2>
            <p>May 21-Aug 21, 2022</p>
            <p>Skills:</p>

            <List skills={skills3} />


            <h1>Education & Volunteering</h1>
            <hr></hr>
            <h2>Bootcamp | UCF Coding Flex Bootcamp</h2>
            <p>Fall 22 to Present</p>
            <p>
                I learn HTML, CSS, and Javascript as well as many other technologies. We use
                My SQL to make databases and then use handlebars for the front end. I was a
                part of multiple group projects where we had to come up with an idea and
                execute it. You can see all my projects on my GitHub.
            </p>

            <h2>College | Liberty University</h2>
            <p>Fall 20 to Fall 23</p>
            <p>Degree: B.S. Graphic Design</p>
            <p>
                I am currently a full-time residential student at Liberty University in
                Virginia. I have learned about typography, how to make editorials, and
                practice with the Adobe Creative Cloud. I will graduate in May 2023 with a
                B.S. degree in Graphic Design.
            </p>

            <h2>College | Valencia College</h2>
            <p>Fall 18 to Spr 20</p>
            <p>Degree: Associate of Arts</p>
            <p>
                I was a full-time dual-enrolled college student at Valencia College as well
                being a high school student. I was one of the youngest students at 16.
            </p>

            <p>
                In addition, I have been involved in many volunteer organizations which
                include:
            </p>
            <ul>
                <li>
                    <strong>Arnold Palmer Children's Hospital Art Cart, Pre-Op, and Nursery Volunteer Program (150+ hours)</strong>
                    <p>
                        I volunteered for over 150 hours. I had three main jobs that I would do.
                        The Art Cart, where I would go over all of the waiting rooms and draw and play with the kids.
                        Pre Op where I help the nurses with their daily routine and make IVs.
                        Then there was the Nursery, where I helped the nurses on that floor as well as helped the new mothers.
                    </p>
                </li>
                <li>
                    <strong>Nathaniel's Hope</strong>
                </li>
                <li>
                    <strong>Give Kids the World</strong>
                </li>
                <li>
                    <strong>Ronald McDonald House - Orlando</strong>
                </li>
                <li>
                    <strong>First Baptist Church of Orlando Summer Youth Camps</strong>
                </li>
            </ul>

            <h1>Skills & Abilities</h1>
            <hr></hr>
            <ul>
                <List skills={skills4} />
            </ul>

            <h1>Hobbies</h1>
            <hr></hr>
            <List skills={hobbiesArray} />

        </div>

    );
}

export default Resume;