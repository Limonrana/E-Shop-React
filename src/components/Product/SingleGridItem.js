const SingleGridItem = ({
    title,
    model,
    svgCard,
    svgBkash,
    imagePath,
    mainPrice,
    oldPrice,
    save,
    emi = null,
    more = null,
}) => {
    let EMIOPTION = null;
    if (emi !== null) {
        EMIOPTION = (
            <div className="emi-box">
                <p>EMIs from ${emi}/month</p>
            </div>
        );
    }

    let ONEMOREOPTION = null;
    if (more !== null) {
        ONEMOREOPTION = (
            <div className="more-option">
                <p>
                    <span>+{more}</span> more option
                </p>
            </div>
        );
    }
    return (
        <div className="col-md-3 col-sm-3">
            <div className="box-item box-shadow">
                <a href="product-details.html">
                    <div className="box-item-figure">
                        <figure>
                            <img src={imagePath} alt="productImage" />
                        </figure>
                        <div className="box-change-img">
                            <ul>
                                <li>
                                    <img src={svgCard} alt="productImage" />
                                </li>
                                <li>
                                    <img src={svgBkash} alt="productImage" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box-item-figure-caption">
                        <h4>
                            {title}
                            <span> {model}</span>
                        </h4>
                        <ul className="item-price">
                            <li className="main-price">${mainPrice}</li>
                            <li>
                                <del>{oldPrice}</del>
                            </li>
                            <li className="save">Save {save}</li>
                        </ul>
                        {EMIOPTION}
                        {ONEMOREOPTION}
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SingleGridItem;
