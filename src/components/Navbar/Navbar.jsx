import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import Cart from '../Cart/Cart';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    return (
        <BootstrapNavbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Link to="/"><BootstrapNavbar.Brand href="#home">Toko Loak</BootstrapNavbar.Brand></Link>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {isLoggedIn && (
                            <>
                                <Cart open={openCart} onCartClick={() => setOpenCart(val => !val)} />
                                <Nav.Link onClick={() => setIsLoggedIn(false)}>Logout</Nav.Link>
                            </>
                        )}
                        {!isLoggedIn && <Nav.Link onClick={() => setIsLoggedIn(true)}>Login</Nav.Link>}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;
