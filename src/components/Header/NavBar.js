/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../../assets/images/logo-header.png';

const NavBar = ({ openCartModel, openAuthModal, openDeliveryModal }) => {
    const [searchValue, setSearchValue] = useState('');
    const history = useHistory();

    const submitHandler = (e) => {
        if (searchValue !== '') {
            history.push(`/search-result/params=${searchValue}`);
            setSearchValue('');
        }
        e.preventDefault();
    };
    const handleInput = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <nav>
            <div className="container">
                <div className="nav-inner">
                    <div className="nav-brand">
                        <div className="nav-category-menu">
                            <span>
                                <i className="fas fa-bars" />
                            </span>
                        </div>
                        <NavLink to="/">
                            <img src={Logo} alt="E-shop Logo" />
                        </NavLink>
                    </div>
                    <div className="nav-search-bar">
                        <form onSubmit={(e) => submitHandler(e)}>
                            <div className="nav-search-locat" onClick={() => openDeliveryModal()}>
                                <div className="nav-search-locat-inner" id="location-delivery">
                                    <span>
                                        <i className="fas fa-map-marker-alt" />
                                    </span>
                                </div>
                            </div>
                            <div className="nav-search-input">
                                <div className="nav-search-input-inner">
                                    <input
                                        type="text"
                                        placeholder="Search for products"
                                        value={searchValue}
                                        onChange={(e) => handleInput(e)}
                                    />
                                </div>
                            </div>
                            <div className="nav-search-icon">
                                <div className="nav-search-icon-inner">
                                    <button type="submit">
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
                                <button
                                    onClick={() => openAuthModal()}
                                    type="button"
                                    className="bg-transfarent"
                                >
                                    Sign-in or signup
                                </button>
                            </li>
                            <li className="nav-navigation-list cart-list">
                                <button
                                    onClick={() => openCartModel()}
                                    type="button"
                                    className="bg-transfarent"
                                >
                                    <span>
                                        <i className="fas fa-shopping-cart" />
                                    </span>
                                    <p className="cart-show">10</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-bottom-list" />
            </div>
        </nav>
    );
};

export default NavBar;
