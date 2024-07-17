import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { items } from '../constants/products';
import { Link } from 'react-router-dom';
import { formatRupiah } from '../utils/currency';

const Home = () => {
  return (
    <Container className="mt-4">
        <Row>
            {items.map((item) => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={item.id}>
                <Card>
                <Card.Header>
                    <img className="w-100" style={{ height: '200px', objectFit: 'cover' }} src={item.imageUrl} />
                </Card.Header>
                <Card.Body>
                    <Card.Title><Link style={{ color: 'black', textDecoration: 'none' }} to={`/${item.id}`}><strong>{item.title}</strong></Link></Card.Title>
                    <Card.Text>
                        <p>{item.text}</p>
                        <p>{formatRupiah(item.price)}</p>
                    </Card.Text>
                    <Button>Masukkan ke Keranjang</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
  );
};

export default Home;
