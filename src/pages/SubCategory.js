import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MotorCycle from '../assets/images/banner3_1.png';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import Banner from '../components/CategoryPage/Banner';
import BannerText from '../components/CategoryPage/BannerText';
import ProductGrid from '../components/Product/ProductGrid';

class SubCategory extends Component {
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
                                        <BannerText
                                            pageTitle="Motor Cycle"
                                            categoryName="Automotive"
                                        />
                                        <Banner imagePath={MotorCycle} />
                                        <ProductGrid sectionTitle="Popular" />
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

export default SubCategory;
