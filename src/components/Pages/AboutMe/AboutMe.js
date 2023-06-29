import Profile from './Profile';

function AboutMe() {
    return (
        <div className='aboutMe' id="About">
            <div className='rowAboutMe'>

                <Profile />
                <div className='aboutText'>
                    <h2 className='cavent aboutTitle'> “A little consideration, a little thought for others, makes all the difference.”
                    </h2>
                    <p className='crimson aboutDesc'>I was raised in Orlando, Florida, but I was born in China. People often tell me that I have a logical way of thinking, which is not surprising since math has always been my passion. As a child, I used to disassemble objects to understand their inner workings. I feel the same way about coding; it's fascinating to uncover how a system functions. There is no better feeling than successfully programming a machine.</p>
                </div>
            </div>
            <h4 className='crimson thingILikes'>Things I likes:</h4>
            <div className='rowPinkBox'>

                <div className='pinkBox crimson'>
                    <img src='photos/hobbies/cat.png' alt="A icon of a cute cat" className="ImgHobbies" />
                    <div className='vlHobbies'></div>
                    <h5 className='titleHobbies'>Cats</h5>
                </div>
                <div className='pinkBox crimson'>
                    <img src='photos/hobbies/painting.png' alt="A icon of a painting canvas" className="ImgHobbies" />
                    <div className='vlHobbies'></div>
                    <h5 className='titleHobbies'>Painting</h5>
                </div>
                <div className='pinkBox crimson'>
                    <img src='photos/hobbies/book.png' alt="A icon of a open book" className="ImgHobbies" />
                    <div className='vlHobbies'></div>
                    <h5 className='titleHobbies'>Reading</h5>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;