const SingleItem = ({ name, imagePath }) => (
    <div className="owl-item">
        <div className="item">
            <a href="category-sub-page.html">
                <figure>
                    <img src={imagePath} alt="categoryImage" />
                </figure>
                <div className="category-slider-caption">
                    <p>{name}</p>
                </div>
            </a>
        </div>
    </div>
);

export default SingleItem;
