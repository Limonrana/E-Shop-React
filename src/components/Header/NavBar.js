/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () => (
    <nav>
        <div className="container">
            <div className="nav-inner">
                <div className="nav-brand">
                    <div className="nav-category-menu">
                        <span>
                            <i className="fas fa-bars" />
                        </span>
                    </div>
                    <a href="index.html">
                        <img src="./images/logo-header.png" alt="appifylab" />
                    </a>
                </div>
                <div className="nav-search-bar">
                    <form action="#">
                        <div className="nav-search-locat">
                            <div className="nav-search-locat-inner" id="location-delivery">
                                <span>
                                    <i className="fas fa-map-marker-alt" />
                                </span>
                            </div>
                        </div>
                        <div className="nav-search-input">
                            <div className="nav-search-input-inner">
                                <input type="text" placeholder="Search for products" />
                            </div>
                        </div>
                        <div className="nav-search-icon">
                            <div className="nav-search-icon-inner">
                                <button
                                    onClick="window.location.href='search-page.html'"
                                    type="button"
                                >
                                    <span>
                                        <i className="fas fa-search" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="nav-navigation">
                    <ul>
                        <li className="nav-navigation-list">
                            <a href="#">English</a>
                        </li>
                        <li className="nav-navigation-list click-auth navi-move">
                            <a href="#">Sign-in or signup</a>
                        </li>
                        <li className="nav-navigation-list cart-list">
                            <a href="#">
                                <span>
                                    <i className="fas fa-shopping-cart" />
                                </span>
                                <p className="cart-show">10</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav-bottom-list" />
        </div>
    </nav>
);

export default NavBar;
