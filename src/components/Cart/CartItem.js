import phoneImage from '../../assets/images/product-22210___medialibrary_original_669_501.webp';

const CartItem = ({ increment, decrement, qty, price }) => (
    <div className="cart-order-item">
        <div className="cart-order-item-top">
            <figure>
                <img src={phoneImage} alt="productImage" />
            </figure>
            <div className="cart-order-title">
                <p>Sleep Time-Orthopedic Contour Pillow</p>
            </div>
        </div>
        <div className="cart-order-item-bottom">
            <ul>
                <li>${price}</li>
                <li className="qu-op-2">
                    <button className="qu-btn inc" type="button" onClick={() => increment()}>
                        +
                    </button>
                    <input type="text" className="qu-input" value={qty} />
                    <button className="qu-btn dec" type="button" onClick={() => decrement()}>
                        -
                    </button>
                </li>
                <li>$ {qty * price}</li>
            </ul>
        </div>
        <div className="card-order-save">
            <p>
                You saved <span>$200</span> on this item
            </p>
        </div>
    </div>
);

export default CartItem;
