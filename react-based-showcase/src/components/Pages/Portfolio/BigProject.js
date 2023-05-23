function BigProject() {
    return (
        <div>

            <div className="bigprojectCard">
                <a href='https://github.com/Leah-Harden/Ask-Alice' className="bigprojectA">
                    <img src="/photos/projects/AA.jpg" className="bigprojectPhoto" alt='The recall page of Ask Alice' />
                    <h2 className="bigprojectTitle cavent">Ask Alice: A Recall Rabbit Hole
                    </h2>
                </a>
                <p className="bigprojectDesc crimson">For the first group project, we were tasked with developing an interactive front-end web application that uses two different server side API's. We came up with a search engine that fetches from the FDA's API to display information on a range of recalled prescription drugs, and then we fetch from Pexel API to generate random images that accompany the drug information.</p>
            </div>

        </div>
    );
}
export default BigProject;