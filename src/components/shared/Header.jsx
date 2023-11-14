import { Container, Nav, Navbar } from 'react-bootstrap'
let Cooper = require('../../assets/cooper.png')

export default function Header() {
    let linkButtonStyle = {
        border: 'none',
        background: 'none'
    }
    return (
        <Navbar expand='lg' className='bg-body-tertiary' style={{position: 'fixed', width: '100vw', zIndex: '1', height: '5vmin'}}>
            <Container>
                <Navbar.Brand>
                    <img 
                        src={Cooper}
                        width='40'
                        className='d-inline-block align-top'
                        alt="pixel art of cooper" 
                    />
                </Navbar.Brand>
                <Navbar.Brand style={{fontWeight: 'bold'}}>cooper whitley - <span style={{fontWeight: '200', fontStyle: 'italic'}}>software engineer</span></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav className="me-auto" >
                        <Nav.Link><button style={linkButtonStyle}>contact me</button></Nav.Link>
                        <Nav.Link href="https://github.com/cooperwhitley" target="_blank">github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/cooperwhitley/" target="_blank">linkedin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}