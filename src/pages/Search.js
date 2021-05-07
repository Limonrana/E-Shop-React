import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import ProductGrid from '../components/Product/ProductGrid';

const SearchResult = () => {
    const { value } = useParams();
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
                                    <div className="content-page-full box-shadow">
                                        <div className="content-page-title">
                                            <h2>Search result for : {value}</h2>
                                        </div>
                                    </div>
                                    <div className="total-count">
                                        <p>
                                            Total <span>8</span> Result found
                                        </p>
                                    </div>
                                    <ProductGrid sectionTitle="Popular" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default SearchResult;
