import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { Cart as CartIcon } from 'react-bootstrap-icons';
import { cartItems } from '../../constants/cart';
import { formatRupiah } from '../../utils/currency';

function Cart(props) {
    return (
        <div className="me-2" style={{ position: 'relative' }}>
            <Nav.Link onClick={props.onCartClick}><CartIcon size={20} /></Nav.Link>
            {props.open &&
                <div className="p-3" style={{
                    position: 'absolute',
                    top: 40,
                    right: -30,
                    backgroundColor: 'white',
                    width: 350,
                    maxHeight: 300,
                    borderRadius: 4,
                    boxShadow: '10px 7px 7px -7px rgba(0,0,0,0.65)',
                    zIndex: 99
                }}>
                    {cartItems.map((item, i) => (
                        <div key={item.id} className={`d-flex ${i !== 0 ? 'mt-2' : ''}`}>
                            <img className="me-2" style={{ width: 100, objectFit: 'cover' }} src={item.imageUrl} alt="cart_thumbnail" />
                            <div>
                                <p className="fw-bold mb-0">{item.title}</p>
                                <p className="mb-1">{formatRupiah(item.price)}</p>
                                <p>Qty: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

Cart.propTypes = {
    onCartClick: PropTypes.func,
    open: PropTypes.bool,
};

export default Cart