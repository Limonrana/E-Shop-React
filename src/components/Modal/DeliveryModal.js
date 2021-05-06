const DeliveryModal = () => (
    <div className="delivery-full-wrapper wrapper-close">
        <div className="delivery-modal eve-close-modal">
            <div className="delivery-modal-title">
                <h3>Set delivery point</h3>
                <div className="delivery-title-icon">
                    <img src="./images/icon-emi.svg" alt="iconEmi" />
                </div>
            </div>
            <div className="delivery-modal-inner">
                <div className="delivery-modal-loc-input">
                    <p>Please select your location and area</p>
                    <div className="delivery-item-input-details">
                        <div className="delivery-modal-loc-input-item">
                            <div className="payment-delivery-select-input">
                                <div className="delivery-input-inner one">
                                    <input
                                        type="text"
                                        className="new-con"
                                        placeholder="Select Location"
                                    />
                                    <button type="button">
                                        <span>
                                            <i className="fas fa-caret-down" />
                                        </span>
                                    </button>
                                </div>
                                <div className="delivery-dropdown">
                                    <ul id="select-city">
                                        <li className="select-list select-city-list" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-modal-loc-input-item">
                            <div className="payment-delivery-select-input">
                                <div className="delivery-input-inner one">
                                    <input
                                        type="text"
                                        className="new-con"
                                        placeholder="Select Area"
                                    />
                                    <button type="button">
                                        <span>
                                            <i className="fas fa-caret-down" />
                                        </span>
                                    </button>
                                </div>
                                <div className="delivery-dropdown">
                                    <ul id="select-area">
                                        <li className="select-list select-city-list" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="delivery-point">
                    <p>Select your delivery point</p>
                    <div className="delivery-point-inner">
                        <div className="delivery-point-item" data-agent-icon="1">
                            <img src="./images/store.png" alt="agentPoint" />
                            <h4>Appi Agent</h4>
                        </div>
                        <div className="delivery-point-item" data-agent-icon="2">
                            <img src="./images/house.png" alt="agentPoint" />
                            <h4>Appi Hub</h4>
                        </div>
                        <div className="delivery-point-item" data-agent-icon="3">
                            <img src="./images/delivery-truck.png" alt="agentPoint" />
                            <h4>Delivery</h4>
                        </div>
                    </div>
                </div>
                <div className="delivery-point-details">
                    <div className="delivery-point-details-item" data-agent-details="1">
                        <p>
                            We found the following dgAgents for Madina market. Please select your
                            nearest one:
                        </p>
                        <div className="delivery-agent-add">
                            <figure>
                                <img src="./images/agent.jpg" alt="agent" />
                                <figcaption>
                                    <img src="./images/man3.jpg" alt="agent" />
                                </figcaption>
                            </figure>
                            <div className="agent-add-text">
                                <h5>Trader.com</h5>
                                <p>New York, NY</p>
                                <p>United States</p>
                            </div>
                        </div>
                        <div className="delivery-agent-add">
                            <figure>
                                <img src="./images/agent.jpg" alt="agent" />
                                <figcaption>
                                    <img src="./images/menn.jpg" alt="agent" />
                                </figcaption>
                            </figure>
                            <div className="agent-add-text">
                                <h5>Lab cat</h5>
                                <p>London</p>
                                <p>United Kingdom</p>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-point-details-item" data-agent-details="2">
                        <p>
                            We found the following dgAgents for Madina market. Please select your
                            nearest one:
                        </p>
                        <div className="delivery-agent-add">
                            <figure>
                                <img src="./images/agent-764.webp" alt="agent" />
                                <figcaption>
                                    <img src="./images/agent-765.webp" alt="agent" />
                                </figcaption>
                            </figure>
                            <div className="agent-add-text">
                                <h5>Mahi Enterprise</h5>
                                <p>Soifa Super Market, Hall Gate, Botessor</p>
                                <p>Botesshor, Sylhet</p>
                            </div>
                        </div>
                        <div className="delivery-agent-add">
                            <figure>
                                <img src="./images/agent-764.webp" alt="agent" />
                                <figcaption>
                                    <img src="./images/agent-765.webp" alt="agent" />
                                </figcaption>
                            </figure>
                            <div className="agent-add-text">
                                <h5>Mahi Enterprise</h5>
                                <p>Soifa Super Market, Hall Gate, Botessor</p>
                                <p>Botesshor, Sylhet</p>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-point-details-item" data-agent-details="3">
                        <p>
                            Please sign in to add your home delivery address or see your saved
                            addresses
                        </p>
                        <div className="delivery-auth-btn">
                            <button type="button">Sign-in or sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DeliveryModal;
