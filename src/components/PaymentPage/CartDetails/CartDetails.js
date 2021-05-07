import React, { useState } from 'react';
import iconEmi from '../../../assets/images/icon-emi.svg';
import CartItem from '../../Cart/CartItem';

const CartDetails = () => {
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
        <div className="cart-full-box box-shadow">
            <div className="order-title">
                <h3>Shopping cart</h3>
                <div className="delivery-title-icon new-delivery-icon">
                    <img src={iconEmi} alt="icon-emi" />
                </div>
            </div>
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
            </div>
            <div className="cart-price-option">
                <div className="cart-price-sub">
                    <h4>Subtotal</h4>
                    <p>$ 480</p>
                </div>
                <div className="cart-price-sub">
                    <h4>Delivery charge</h4>
                    <p className="red">Free delivery</p>
                </div>
                <div className="cart-price-sub big-sub">
                    <h4>Order Total</h4>
                    <p>$ 480</p>
                </div>
            </div>
            <div className="cart-coupon">
                <input type="text" placeholder="Have coupon code? Enter here" />
                <button type="button">Apply</button>
            </div>
        </div>
    );
};

export default CartDetails;
