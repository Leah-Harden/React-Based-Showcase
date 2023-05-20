import Nav from 'react-bootstrap/Nav';



function Header() {
    return (
        <div>
            <Nav className='NavUl crimson'>
                <Nav.Item>
                    <Nav.Link href="/" className='link'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/profoilo" className='link'>Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about" className='link'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact" className='link'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/resume" className='link'>Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );

}

export default Header;;