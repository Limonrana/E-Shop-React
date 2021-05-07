import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/App.css';
import Authentication from './components/Auth/Authentication';
import AppFooter from './components/Footer/AppFooter';
import NavBar from './components/Header/NavBar';
import CartModal from './components/Modal/CartModal';
import DeliveryModal from './components/Modal/DeliveryModal';
import Layout from './pages/Layout';

class App extends Component {
    state = {
        isOpenCart: false,
        isOpenAuth: false,
        isOpenDelivery: false,
    };

    openCartModel = () => {
        const { isOpenCart } = this.state;
        this.setState({ isOpenCart: !isOpenCart });
    };

    openAuthModal = () => {
        const { isOpenAuth } = this.state;
        this.setState({ isOpenAuth: !isOpenAuth });
    };

    openDeliveryModal = () => {
        const { isOpenDelivery } = this.state;
        this.setState({ isOpenDelivery: !isOpenDelivery });
    };

    render() {
        const { isOpenCart, isOpenAuth, isOpenDelivery } = this.state;
        return (
            <BrowserRouter>
                <NavBar
                    openCartModel={this.openCartModel}
                    openAuthModal={this.openAuthModal}
                    openDeliveryModal={this.openDeliveryModal}
                />
                <Layout />
                <AppFooter />
                <Authentication openAuthModal={this.openAuthModal} isOpenAuth={isOpenAuth} />
                <CartModal isOpenCart={isOpenCart} openCartModel={this.openCartModel} />
                <DeliveryModal
                    isOpenDelivery={isOpenDelivery}
                    openDeliveryModal={this.openDeliveryModal}
                    openAuthModal={this.openAuthModal}
                />
            </BrowserRouter>
        );
    }
}

export default App;
