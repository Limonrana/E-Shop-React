import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import AppHeader from '../components/Header/AppHeader';
import CategorySider from '../components/Home/CategorySlider/CategorySlider';
import ProductGrid from '../components/Product/ProductGrid';

class Home extends Component {
    state = {
        isOpenCategoryMenu: false,
    };

    openCategoryMenu = () => {
        const { isOpenCategoryMenu } = this.state;
        this.setState({ isOpenCategoryMenu: !isOpenCategoryMenu });
    };

    render() {
        const { isOpenCategoryMenu } = this.state;
        return (
            <div className="App">
                <AppHeader />
                <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
                <section className="main-section">
                    <Container>
                        <div className="section-details">
                            <Row>
                                <Col xs="3" sm="0" md="3" className="col-reponsive-hide">
                                    <CategoryMenu
                                        openCategoryMenu={this.openCategoryMenu}
                                        isOpenCategoryMenu={isOpenCategoryMenu}
                                    />
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
            </div>
        );
    }
}

export default Home;
