import Nav from 'react-bootstrap/Nav';
import { Anchor } from 'antd';








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
            <Nav className='NavUl crimson'>
                <Nav.Item>
                    <Nav.Link className='link'
                        onClick={() => handleClickScroll('Home')}
                    >Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='link' onClick={() => handleClickScroll('About')}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='link' onClick={() => handleClickScroll('Portfolio')}>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='link'
                        onClick={() => handleClickScroll('Contact')}
                    >Contact</Nav.Link>
                </Nav.Item>
                {/* 
                <Nav.Item>
                    <Nav.Link href="/resume" className='link'>Resume</Nav.Link>
                </Nav.Item> 
                */}
            </Nav>
        </div>
    );

}

export default Header;