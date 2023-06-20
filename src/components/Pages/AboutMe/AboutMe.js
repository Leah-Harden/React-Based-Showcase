import Profile from './Profile';

function AboutMe() {
    return (
        <div className='aboutMe' id="About">
            <Profile />
            <div className='aboutText'>
                <h2 className='cavent aboutTitle'> “A little consideration, a little thought for others, makes all the difference.”
                </h2>
                <p className='crimson aboutDesc'>I was raised in Orlando, Florida, but I was born in China. People often tell me that I have a logical way of thinking, which is not surprising since math has always been my passion. As a child, I used to disassemble objects to understand their inner workings. I feel the same way about coding; it's fascinating to uncover how a system functions. There is no better feeling than successfully programming a machine.</p>
            </div>
        </div>
    );
}

export default AboutMe;