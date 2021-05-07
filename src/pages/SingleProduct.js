import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
// Large Images Import
import mob1 from '../assets/images/mob1.webp';
import mob2 from '../assets/images/mob2.webp';
import mob3 from '../assets/images/mob3.webp';
import mob4 from '../assets/images/mob4.webp';
import mob5 from '../assets/images/mob5.webp';
import mob6 from '../assets/images/mob6.webp';
import mob7 from '../assets/images/mob7.webp';
import mob8 from '../assets/images/mob8.webp';
// Small Images Import
import mobsm1 from '../assets/images/mobsm1.webp';
import mobsm2 from '../assets/images/mobsm2.webp';
import mobsm3 from '../assets/images/mobsm3.webp';
import mobsm4 from '../assets/images/mobsm4.webp';
import mobsm5 from '../assets/images/mobsm5.webp';
import mobsm6 from '../assets/images/mobsm6.webp';
import mobsm7 from '../assets/images/mobsm7.webp';
import mobsm8 from '../assets/images/mobsm8.webp';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import Description from '../components/Product/SingleProduct/ProductDescription/Description';
import Features from '../components/Product/SingleProduct/ProductDescription/Features';
import Offers from '../components/Product/SingleProduct/ProductDescription/Offers';
import ProductDetails from '../components/Product/SingleProduct/ProductDetails/ProductDetails';

// eslint-disable-next-line prettier/prettier

class SingleProduct extends Component {
    state = {
        mainImages: [
            { id: 1, path: mob1 },
            { id: 2, path: mob2 },
            { id: 3, path: mob3 },
            { id: 4, path: mob4 },
            { id: 5, path: mob5 },
            { id: 6, path: mob6 },
            { id: 7, path: mob7 },
            { id: 8, path: mob8 },
        ],
        smImages: [
            { id: 1, path: mobsm1 },
            { id: 2, path: mobsm2 },
            { id: 3, path: mobsm3 },
            { id: 4, path: mobsm4 },
            { id: 5, path: mobsm5 },
            { id: 6, path: mobsm6 },
            { id: 7, path: mobsm7 },
            { id: 8, path: mobsm8 },
        ],
    };

    render() {
        const { mainImages, smImages } = this.state;
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
                                        <ProductDetails
                                            mainImages={mainImages}
                                            smImages={smImages}
                                        />
                                        <Offers />
                                        <Features />
                                        <Description />
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

export default SingleProduct;
