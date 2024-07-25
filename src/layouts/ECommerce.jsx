import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Cart from '../components/Cart/Cart';

const ECommerce = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openCart, setOpenCart] = useState(false)

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Link to="/"><Navbar.Brand href="#home">Toko Loak</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {isLoggedIn && (
                                <>
                                    <Cart open={openCart} onCartClick={() => setOpenCart(val => !val)} />
                                    <Nav.Link onClick={() => setIsLoggedIn(false)}>Logout</Nav.Link>
                                </>
                            )}
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
