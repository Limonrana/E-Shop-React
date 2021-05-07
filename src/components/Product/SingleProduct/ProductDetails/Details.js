import bkash10 from '../../../../assets/images/bkash10.png';
import checked from '../../../../assets/images/checked.svg';
import iconLock from '../../../../assets/images/icon-lock.svg';
import mastercard from '../../../../assets/images/mastercard.svg';

const Details = () => (
    <div className="product-details-right">
        <div className="product-id">
            <p>
                Id#<span>22210</span>
            </p>
        </div>
        <div className="product-facility">
            <ul>
                <li>
                    <img src={bkash10} alt="" />
                </li>
                <li>
                    <img src={mastercard} alt="" />
                </li>
            </ul>
        </div>
        <div className="product-name">
            <h3>Galaxy Note10 | Note10+</h3>
        </div>
        <div className="product-price">
            <ul className="item-price">
                <li className="main-price">$10,999</li>
                <li>
                    <del>11,999</del>
                </li>
                <li className="save">Save 1,000</li>
            </ul>
        </div>
        <div className="product-size">
            <p>Size</p>
            <ul>
                <li className="active">M</li>
                <li>L</li>
                <li>Xl</li>
                <li>Xxl</li>
            </ul>
        </div>
        <div className="product-lock">
            <div className="product-lock-icon">
                <img src={iconLock} alt="" />
            </div>
            <div className="product-lock-details">
                <span>10%</span>
                <p>Minimum Booking Amount</p>
            </div>
        </div>
        <div className="product-btn">
            <ul>
                <li>
                    <button className="buy-btn" type="button">
                        Buy now
                    </button>
                </li>
                <li>
                    <button className="cart-btn" type="button">
                        Add to cart
                    </button>
                </li>
            </ul>
        </div>
        <div className="price-flag">
            <ul>
                <li>
                    {/* <img src="assets/images/icon-dgAgent.svg" alt=""> */}
                    <img className="check" src={checked} alt="" />
                    <p>
                        Deliverable to <a href="#click">appiAgent stores</a>
                    </p>
                </li>
                <li>
                    {/* <!-- <img src="assets/images/icon-dgHub.svg" alt=""> --> */}
                    <img className="check" src={checked} alt="" />
                    <p>
                        Deliverable to <a href="#click">appiHubs</a>
                    </p>
                </li>
                <li>
                    {/* <!-- <img src="assets/images/icon-dgAgent.svg" alt=""> --> */}
                    <img className="check" src={checked} alt="" />
                    <p>
                        Deliverable to <a href="#click">your Home</a>
                    </p>
                </li>
            </ul>
        </div>
    </div>
);

export default Details;
