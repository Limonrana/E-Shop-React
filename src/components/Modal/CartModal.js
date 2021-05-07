/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import backIcon from '../../assets/images/back-right.svg';
import CartItem from '../Cart/CartItem';

const CartPopup = ({ isOpenCart, openCartModel }) => {
    const [cartData, setCartData] = useState([
        { id: 1, qty: 1, price: 70 },
        { id: 2, qty: 3, price: 42 },
    ]);

    const increment = (id) => {
        const newCartData = [...cartData];
        // eslint-disable-next-line no-restricted-syntax
        for (const item of newCartData) {
            if (item.id === id) {
                if (item.qty >= 1) {
                    item.qty += 1;
                }
            }
        }
        setCartData(newCartData);
    };

    const decrement = (id) => {
        const newCartData = [...cartData];
        // eslint-disable-next-line no-restricted-syntax
        for (const item of newCartData) {
            if (item.id === id) {
                if (item.qty > 1) {
                    item.qty -= 1;
                }
            }
        }
        setCartData(newCartData);
    };

    return (
        <div
            className={
                isOpenCart
                    ? 'modal-full-wrapper wrapper-close active'
                    : 'modal-full-wrapper wrapper-close'
            }
        >
            <div
                className={
                    isOpenCart ? 'cart-modal eve-close-modal active' : 'cart-modal eve-close-modal'
                }
            >
                <div className="cart-modal-title">
                    <h3>Shopping cart</h3>
                    <div className="cart-modal-icon" onClick={() => openCartModel()}>
                        <img src={backIcon} alt="backSvg" />
                    </div>
                </div>
                {/* <div className="cart-empty">
                    <div className="empty-img">
                        <figure>
                            <img src={shoppingCart} alt="shoppingCart" />
                        </figure>
                    </div>
                    <div className="empty-text">
                        <p>No Items Found!</p>
                    </div>
                </div> */}
                <div className="cart-order-inner">
                    {cartData.map((item) => (
                        <CartItem
                            increment={() => increment(item.id)}
                            decrement={() => decrement(item.id)}
                            qty={item.qty}
                            price={item.price}
                            key={item.id}
                        />
                    ))}

                    {/* <div className="cart-order-item">
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
                    </div> */}
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
};

export default CartPopup;
