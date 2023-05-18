
import Nav from 'react-bootstrap/Nav';
import '../App.css';


function Header() {
    return (
        <div className='NavBar'>
            <Nav className='NavUl'>
                <Nav.Item>
                    <Nav.Link href="/" className='link'>Home</Nav.Link>
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
            <h2 className='siteTitle'>Leah Harden</h2>
        </div>
    );

}

export default Header;