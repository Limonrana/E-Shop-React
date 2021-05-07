import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Preloader from '../components/Preloader/Preloader';
import Category from './Category';
import Home from './Home';
import PaymentPage from './Payment';
import SearchResult from './Search';
import SingleProduct from './SingleProduct';
import SubCategory from './SubCategory';

class Layout extends Component {
    state = { isLoading: true };

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => ({ isLoading: false }));
        }, 2000);
    }

    render() {
        const { isLoading } = this.state;
        let PRELOADER = null;
        if (isLoading) {
            PRELOADER = <Preloader width="60" />;
        }
        return (
            <div className="Layout">
                <div>{PRELOADER}</div>
                <Route path="/" exact component={Home} />
                <Route path="/category/:page" exact component={Category} />
                <Route path="/category/:category/:subcategory" exact component={SubCategory} />
                <Route path="/search-result/params=:value" exact component={SearchResult} />
                <Route path="/product/:id" exact component={SingleProduct} />
                <Route path="/payment" exact component={PaymentPage} />
            </div>
        );
    }
}

export default Layout;
