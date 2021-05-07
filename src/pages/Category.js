import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
// Image Import
import MenFashion from '../assets/images/banner.png';
import ShirtsBanner from '../assets/images/banner2.png';
import PanjabiBanner from '../assets/images/banner3.png';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import Banner from '../components/CategoryPage/Banner';
import BannerText from '../components/CategoryPage/BannerText';
import CategorySider from '../components/Home/CategorySlider/CategorySlider';
import ProductGrid from '../components/Product/ProductGrid';

class Category extends Component {
    state = {};

    render() {
        return (
            <div className="App">
                <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
                <section className="main-section mt-67">
                    <Container>
                        <div className="section-details">
                            <Row>
                                <Col xs="3" sm="0" md="3" className="col-reponsive-hide">
                                    <CategoryMenu />
                                </Col>
                                <Col xs="9" sm="12" md="9" className="col-reponsive">
                                    <div className="category-full-content">
                                        <CategorySider width="14.1%" />
                                        <BannerText pageTitle="Men's Fashion" />
                                        <Banner imagePath={MenFashion} />
                                        <ProductGrid sectionTitle="Popular" />
                                        <Banner imagePath={PanjabiBanner} marginTop="20" />
                                        <ProductGrid sectionTitle="Panjabi" isMore="true" />
                                        <Banner imagePath={ShirtsBanner} marginTop="20" />
                                        <ProductGrid sectionTitle="Shirts" isMore="true" />
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

export default Category;
