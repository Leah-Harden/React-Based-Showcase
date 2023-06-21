




const handleClickScroll = (n) => {
    const element = document.getElementById(n);
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

function Header() {
    return (
        <div>
            <ul className='NavUl crimson'>

                <li className='link NavItem'
                    onClick={() => handleClickScroll('Home')}
                >Home</li>
                <li className='link NavItem' onClick={() => handleClickScroll('About')}>About</li>
                <li className='link NavItem' onClick={() => handleClickScroll('Portfolio')}>Portfolio</li>

                <li className='link NavItem'
                    onClick={() => handleClickScroll('Contact')}
                >Contact</li>

                {/* 
                <Nav.Item>
                    <Nav.Link href="/resume" className='link'>Resume</Nav.Link>
                </Nav.Item> 
                */}
            </ul>
        </div>
    );

}

export default Header;