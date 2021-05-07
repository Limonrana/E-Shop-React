import Beauty1 from '../../assets/images/Beauty1.jpg';
import Bkash from '../../assets/images/bkash10.png';
import car from '../../assets/images/car.png';
import headphone from '../../assets/images/headphone.png';
import man1 from '../../assets/images/man1.png';
import man3 from '../../assets/images/man3.jpg';
import MasterCard from '../../assets/images/mastercard.svg';
import pc from '../../assets/images/pc.png';
import phone2 from '../../assets/images/phone2(1).jpg';
import women from '../../assets/images/women.png';
import SingleGridItem from './SingleGridItem';

const ProductGrid = ({ sectionTitle = null, isMore = null }) => {
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
            {sectionTitle !== null ? (
                <div className="title">
                    <h2>{sectionTitle}</h2>
                    {MORESECTION}
                </div>
            ) : null}
            <div className="section-box-inner">
                <div className="row">
                    <SingleGridItem
                        title="A4TECH Headphone"
                        model="HS-19"
                        mainPrice="10,999"
                        oldPrice="11,999"
                        save="1,000"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={headphone}
                        id="1"
                    />

                    <SingleGridItem
                        title="1:18 RC"
                        model="Sunny Racing Car"
                        mainPrice="50,999"
                        oldPrice="55,999"
                        save="5,000"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={car}
                        emi="1,134"
                        id="2"
                    />
                    <SingleGridItem
                        title="Men's Jacket (Black)"
                        model="- MJ-07 (XS)"
                        mainPrice="5,999"
                        oldPrice="7,999"
                        save="2,000"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={man3}
                        more="1"
                        id="3"
                    />
                    <SingleGridItem
                        title="Samsung Galaxy Tab"
                        model="A 7.0"
                        mainPrice="15,999"
                        oldPrice="18,999"
                        save="3,000"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={phone2}
                        more="1"
                        id="4"
                    />
                    <SingleGridItem
                        title="Original Leather Wallet for Men"
                        model="(Brown)"
                        mainPrice="2,999"
                        oldPrice="3,999"
                        save="1,000"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={man1}
                        more="1"
                        id="5"
                    />

                    <SingleGridItem
                        title="AHAVA All in One Cream Face Illuminator"
                        model="8ml - Light"
                        mainPrice="4,500"
                        oldPrice="5,000"
                        save="500"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={Beauty1}
                        more="1"
                        id="6"
                    />
                    <SingleGridItem
                        title="Nine West Women's Strap Watch"
                        model="- NW/2116TPRG"
                        mainPrice="10,999"
                        oldPrice="11,999"
                        save="1,000"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={women}
                        more="1"
                        id="7"
                    />
                    <SingleGridItem
                        title="Asus X543UA- Core i3 8th Gen Transparent Silver"
                        model="(DM1490T)"
                        mainPrice="39,999"
                        oldPrice="42,999"
                        save="3,000"
                        svgCard={MasterCard}
                        svgBkash={Bkash}
                        imagePath={pc}
                        more="4"
                        id="8"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
