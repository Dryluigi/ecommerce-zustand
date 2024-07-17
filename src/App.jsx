import { Navbar, Container, Nav, Card, Row, Col, Button } from 'react-bootstrap';
import { items } from './constants/products';

const App = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Toko Loak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          {items.map((item) => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={item.id}>
              <Card>
                <Card.Header><img className="w-100" style={{ height: '200px', objectFit: 'cover' }} src={item.imageUrl} /></Card.Header>
                <Card.Body>
                  <Card.Title><strong>{item.title}</strong></Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                  <Button>Masukkan ke Keranjang</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
