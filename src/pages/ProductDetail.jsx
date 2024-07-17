import { Container, Row, Col } from 'react-bootstrap';
import { items } from '../constants/products';
import { useNavigate, useParams } from 'react-router-dom';
import { formatRupiah } from '../utils/currency';

const ProductDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const product = items.find((item) => item.id == id)
    if (!product) {
        return navigate('/')
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col sm={12} md={6}>
                    <img className="w-100" src={product.imageUrl} alt="product_image" />
                </Col>
                <Col sm={12} md={6}>
                    <h2 className="mb-3"><strong>{product.title}</strong></h2>
                    <p>{product.description}</p>
                    <h4>{formatRupiah(product.price)}</h4>
                    <button className="btn btn-primary mt-4">Tambahkan ke Keranjang</button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
