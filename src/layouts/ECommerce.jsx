import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const ECommerce = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Link to="/"><Navbar.Brand href="#home">Toko Loak</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {isLoggedIn && <Nav.Link onClick={() => setIsLoggedIn(false)}>Logout</Nav.Link>}
                            {!isLoggedIn && <Nav.Link onClick={() => setIsLoggedIn(true)}>Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default ECommerce;
