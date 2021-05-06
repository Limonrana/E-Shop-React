const CartPopup = () => (
    <div className="modal-full-wrapper wrapper-close">
        <div className="cart-modal eve-close-modal">
            <div className="cart-modal-title">
                <h3>Shopping cart</h3>
                <div className="cart-modal-icon">
                    <img src="./images/back-right.svg" alt="backSvg" />
                </div>
            </div>
            <div className="cart-empty">
                <div className="empty-img">
                    <figure>
                        <img src="./images/shopping-cart.png" alt="productImage" />
                    </figure>
                </div>
                <div className="empty-text">
                    <p>No Items Found!</p>
                </div>
            </div>
            <div className="cart-order-inner">
                <div className="cart-order-item">
                    <div className="cart-order-item-top">
                        <figure>
                            <img
                                src="./images/product-22210___medialibrary_original_669_501.webp"
                                alt="productImage"
                            />
                        </figure>
                        <div className="cart-order-title">
                            <p>Sleep Time-Orthopedic Contour Pillow</p>
                        </div>
                    </div>
                    <div className="cart-order-item-bottom">
                        <ul>
                            <li>$80</li>
                            <li className="qu-op-2">
                                <button className="qu-btn inc" type="button">
                                    +
                                </button>
                                <input type="text" className="qu-input" value="1" />
                                <button className="qu-btn dec" type="button">
                                    -
                                </button>
                            </li>
                            <li>$ 240</li>
                        </ul>
                    </div>
                    <div className="card-order-save">
                        <p>
                            You saved <span>$200</span> on this item
                        </p>
                    </div>
                </div>
                <div className="cart-order-item">
                    <div className="cart-order-item-top">
                        <figure>
                            <img
                                src="./images/product-22210___medialibrary_original_669_501.webp"
                                alt="productImage"
                            />
                        </figure>
                        <div className="cart-order-title">
                            <p>Sleep Time-Orthopedic Contour Pillow</p>
                        </div>
                    </div>
                    <div className="cart-order-item-bottom">
                        <ul>
                            <li>$80</li>
                            <li>Qty: 3</li>
                            <li>$ 240</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cart-price-option">
                <div className="cart-price-sub fs">
                    <h4>Subtotal</h4>
                    <p>$ 480</p>
                </div>
            </div>
            <div className="cart-pop-coupon">
                <p>Coupon can be applied during checkout.</p>
                <div className="cart-coupon-btn">
                    <a href="#coupon">Apply coupon</a>
                    <div className="pay-with-btn">
                        <button type="button">Place order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CartPopup;
