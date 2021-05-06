import SingleGridItem from './SingleGridItem';

const ProductGrid = ({ sectionTitle, isMore = null }) => {
    let MORESECTION = null;
    let SECTIONCSS = 'section-box';
    if (isMore !== null) {
        SECTIONCSS = 'section-box border-top mt-20';
        MORESECTION = (
            <div className="title-box">
                <a href="#test">
                    <p>
                        More
                        <span>
                            <i className="fas fa-chevron-right" />
                        </span>
                    </p>
                </a>
            </div>
        );
    }
    return (
        <div className={SECTIONCSS}>
            <div className="title">
                <h2>{sectionTitle}</h2>
                {MORESECTION}
            </div>
            <div className="section-box-inner">
                <div className="row">
                    <SingleGridItem
                        title="A4TECH Headphone"
                        model="HS-19"
                        mainPrice="10,999"
                        oldPrice="11,999"
                        save="1,000"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/headphone.png"
                    />

                    <SingleGridItem
                        title="1:18 RC"
                        model="Sunny Racing Car"
                        mainPrice="50,999"
                        oldPrice="55,999"
                        save="5,000"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/car.png"
                        emi="1,134"
                    />
                    <SingleGridItem
                        title="Men's Jacket (Black)"
                        model="- MJ-07 (XS)"
                        mainPrice="5,999"
                        oldPrice="7,999"
                        save="2,000"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/man3.jpg"
                        more="1"
                    />
                    <SingleGridItem
                        title="Samsung Galaxy Tab"
                        model="A 7.0"
                        mainPrice="15,999"
                        oldPrice="18,999"
                        save="3,000"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/phone2(1).jpg"
                        more="1"
                    />
                    <SingleGridItem
                        title="Original Leather Wallet for Men"
                        model="(Brown)"
                        mainPrice="2,999"
                        oldPrice="3,999"
                        save="1,000"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/man1.png"
                        more="1"
                    />

                    <SingleGridItem
                        title="AHAVA All in One Cream Face Illuminator"
                        model="8ml - Light"
                        mainPrice="4,500"
                        oldPrice="5,000"
                        save="500"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/Beauty1.jpg"
                        more="1"
                    />
                    <SingleGridItem
                        title="Nine West Women's Strap Watch"
                        model="- NW/2116TPRG"
                        mainPrice="10,999"
                        oldPrice="11,999"
                        save="1,000"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/women.png"
                        more="1"
                    />
                    <SingleGridItem
                        title="Asus X543UA- Core i3 8th Gen Transparent Silver"
                        model="(DM1490T)"
                        mainPrice="39,999"
                        oldPrice="42,999"
                        save="3,000"
                        svgCard="./images/mastercard.svg"
                        svgBkash="./images/bkash10.png"
                        imagePath="./images/pc.png"
                        more="4"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
