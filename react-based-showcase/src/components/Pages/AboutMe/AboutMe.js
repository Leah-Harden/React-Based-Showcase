import Profile from './Profile';

function AboutMe() {
    return (
        <div className='aboutMe'>
            <Profile />
            <div className='aboutText'>
                <h2 className='cavent aboutTitle'>You know a stranger is just a friend you have not made yet!</h2>
                <p className='crimson aboutDesc'>I was raised in Orlando, Florida, but I was born in China. People often tell me that I have a logical way of thinking, which is not surprising since math has always been my passion. As a child, I used to disassemble objects to understand their inner workings. I feel the same way about coding; it's fascinating to uncover how a system functions. There is no better feeling than successfully programming a machine.</p>
            </div>
        </div>
    );
}

export default AboutMe;