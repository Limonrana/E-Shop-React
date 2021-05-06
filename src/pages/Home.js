import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Authentication from '../components/Auth/Authentication';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import AppFooter from '../components/Footer/AppFooter';
import AppHeader from '../components/Header/AppHeader';
import NavBar from '../components/Header/NavBar';
import CategorySider from '../components/Home/CategorySlider/CategorySlider';
import CartModal from '../components/Modal/CartModal';
import DeliveryModal from '../components/Modal/DeliveryModal';
import ProductGrid from '../components/Product/ProductGrid';

class Home extends Component {
    state = {};

    render() {
        return (
            <div className="App">
                <NavBar />
                <AppHeader />
                <div className="main-section-abs" />
                <section className="main-section">
                    <Container>
                        <div className="section-details">
                            <Row>
                                <Col xs="3" sm="0" md="3" className="col-reponsive-hide">
                                    <CategoryMenu />
                                </Col>
                                <Col xs="9" sm="12" md="9" className="col-reponsive">
                                    <div className="category-full-content">
                                        <CategorySider />
                                        <ProductGrid sectionTitle="Popular" />
                                        <ProductGrid sectionTitle="Men's fashion" isMore="true" />
                                        <ProductGrid sectionTitle="Women's fashion" isMore="true" />
                                        <ProductGrid
                                            sectionTitle="Phones & tablets"
                                            isMore="true"
                                        />
                                        <ProductGrid
                                            sectionTitle="Computers & accessories"
                                            isMore="true"
                                        />
                                        <ProductGrid
                                            sectionTitle="Electronic Accessories"
                                            isMore="true"
                                        />
                                        <ProductGrid sectionTitle="Home & living" isMore="true" />
                                        <ProductGrid sectionTitle="Health & Beauty" isMore="true" />
                                        <ProductGrid sectionTitle="Babies & Toys" isMore="true" />
                                        <ProductGrid
                                            sectionTitle="Sports & Outdoor"
                                            isMore="true"
                                        />
                                        <ProductGrid sectionTitle="Automative" isMore="true" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <AppFooter />
                <Authentication />
                <CartModal />
                <DeliveryModal />
            </div>
        );
    }
}

export default Home;
