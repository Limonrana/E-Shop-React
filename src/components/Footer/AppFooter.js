const AppFooter = () => (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="footer-item">
                            <div className="footer-brand">
                                <figure>
                                    <img src="./images/logo-footer.png" alt="logoFooter" />
                                </figure>
                            </div>
                            <div className="footer-details">
                                <p>
                                    ShopNow is an online shop that makes shopping easy. Order online
                                    or visit one of our Hubs or Agents to place your order, pick up
                                    your delivery or get any after sales service you need!
                                </p>
                                <div className="footer-phone">
                                    <h4>
                                        <a href="#phone">
                                            Phone:{' '}
                                            <span className="phone-num">+88 0173-919 0430</span>
                                        </a>
                                    </h4>
                                </div>
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a href="#facebook">
                                                <span>
                                                    <i className="fab fa-facebook-square" />
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#linkedin">
                                                <span>
                                                    <i className="fab fa-linkedin" />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="footer-item">
                            <div className="footer-title">
                                <h4>ShopNow</h4>
                            </div>
                            <div className="footer-details">
                                <ul className="footer-list">
                                    <li>
                                        <a href="about.html">
                                            <span>
                                                <i className="fas fa-chevron-right" />
                                            </span>
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="footer-item">
                            <div className="footer-title">
                                <h4>Help</h4>
                            </div>
                            <div className="footer-details">
                                <ul className="footer-list">
                                    <li>
                                        <a href="#menu">
                                            <span>
                                                <i className="fas fa-chevron-right" />
                                            </span>
                                            Cancelletion & returns
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="footer-item">
                            <div className="footer-title">
                                <h4>Payment</h4>
                            </div>
                            <div className="footer-details">
                                <ul className="footer-list-img">
                                    {/* <li>
                                        <img src="./images/bkash.svg" alt="paymentIcon" />
                                    </li> */}
                                    <li>
                                        <img src="./images/rocket.svg" alt="paymentIcon" />
                                    </li>
                                    <li>
                                        <img src="./images/cc-dbbl.svg" alt="paymentIcon" />
                                    </li>
                                </ul>
                                <ul className="footer-list-img">
                                    <li>
                                        <img src="./images/cc-visa.svg" alt="paymentIcon" />
                                    </li>
                                    <li>
                                        <img src="./images/cc-mastercard.svg" alt="paymentIcon" />
                                    </li>
                                    <li>
                                        <img src="./images/cc-amex.svg" alt="paymentIcon" />
                                    </li>
                                </ul>
                                <ul className="footer-list-img">
                                    <li className="footer-list-img-big">
                                        <img
                                            src="./images/cash-on-delivery.svg"
                                            alt="deliveryIcon"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <div className="footer-add">
                        <p>Latif Monjil, Modina Market, Sylhet.</p>
                    </div>
                    <div className="footer-bottom-list">
                        <div className="footer-bottom-list-left">
                            <ul>
                                <li>
                                    <a href="#menu">Return Policy</a>
                                </li>
                                <li>·</li>
                                <li>
                                    <a href="#menu">Tearms of Use</a>
                                </li>
                                <li>·</li>
                                <li>
                                    <a href="#menu">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-bottom-list-right">
                            <p>© 2019 ShopNow Technology Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default AppFooter;
