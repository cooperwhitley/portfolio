import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand>Cooper Whitley</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/cooperwhitley">github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/cooperwhitley/">linkedin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}