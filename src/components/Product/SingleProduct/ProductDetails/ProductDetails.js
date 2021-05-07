import Details from './Details';
import Images from './Images';

const ProductDetails = ({ mainImages, smImages }) => (
    <div className="product-details box-shadow">
        <Images mainImages={mainImages} smImages={smImages} />
        <Details />
    </div>
);

export default ProductDetails;
