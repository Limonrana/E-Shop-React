const Authentication = () => (
    <div className="authentication-full-wrapper wrapper-close">
        <div className="authentication-modal eve-close-modal">
            <div className="modal-header-img">
                <figure>
                    <img src="./images/shopbanner.png" alt="shopbanner" />
                </figure>
                <div className="modal-close">
                    <span>
                        <i className="fas fa-times" />
                    </span>
                </div>
            </div>
            <div className="modal-details">
                <div className="modal-details-social modal-details-1">
                    <p>
                        One-click sign in or sign up to Deligram if your account is connected to
                        Facebook.
                    </p>
                    <button className="social-login" type="button">
                        <span>
                            <i className="fab fa-facebook-square" />
                        </span>
                        Continue with facebook
                    </button>
                    <div className="connect-login">
                        <a href="#signin">Sign in or sign up with phone number</a>
                    </div>
                </div>
                <div className="modal-details-number modal-details-2">
                    <form action="#" onSubmit="return false;" name="my-form" noValidate>
                        <div className="modal-input-box">
                            <label htmlFor="authInput">
                                Mobile number <br />
                                <input
                                    type="tel"
                                    placeholder="Enter customer's mobile number"
                                    required
                                    className="auth-new-input-1"
                                    id="authInput"
                                />
                            </label>
                            <div className="required-box req-b" id="req-3">
                                <p>Mobile number is required</p>
                            </div>
                        </div>
                        <div className="auth-modal-input-new">
                            <div className="modal-input-box">
                                <label htmlFor="name">
                                    Name <br />
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        className="new-auth-input-bx new-auth-input-bx-1"
                                        id="name"
                                    />
                                </label>
                                <div className="required-box req-b" id="req-4">
                                    <p>Name is required</p>
                                </div>
                            </div>
                            <div className="modal-input-box">
                                <label htmlFor="new-auth-i">
                                    OTP code <br />
                                    <input
                                        type="text"
                                        placeholder="Enter otp code here"
                                        required
                                        className="new-auth-input-bx new-auth-input-bx-2"
                                        id="new-auth-i"
                                    />
                                </label>
                                <div className="required-box req-b" id="req-5">
                                    <p>OTP is required</p>
                                </div>
                                <div className="input-message">
                                    <p>
                                        We’ve sent 6-digit one time password in your phone:{' '}
                                        <span>123456789</span>.{' '}
                                        <a href="#sms"> Did not get SMS? Request Again</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-btn m-btn-2">
                            <button type="button">Sign up</button>
                        </div>
                    </form>
                    <div className="connect-fb">
                        <a href="#signin">Sign in or sign up with facebook</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Authentication;
