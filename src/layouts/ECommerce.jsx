import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const ECommerce = () => {
  return (
    <>
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Link to="/"><Navbar.Brand href="#home">Toko Loak</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        <Outlet />
    </>
  );
};

export default ECommerce;
