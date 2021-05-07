import ss1 from '../../../../assets/images/ss1.png';
import ss2 from '../../../../assets/images/ss2.png';
import ss3 from '../../../../assets/images/ss3.png';
import ss4 from '../../../../assets/images/ss4.png';
import ss5 from '../../../../assets/images/ss5.png';
import ss6 from '../../../../assets/images/ss6.png';
import ss7 from '../../../../assets/images/ss7.png';
import BannerAds from './BannerAds';

const Description = () => (
    <div className="product-description-box box-shadow mt-20">
        <div className="description-title">
            <h3>Description</h3>
        </div>
        <div className="description-inner">
            <div className="new-section-ad">
                <figure>
                    <img src={ss6} alt="" />
                </figure>
            </div>
            <BannerAds
                title="with Ultra-Wide Dual Rear Camera"
                description="Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera."
                key="1"
                imagePath={ss1}
            />
            <BannerAds
                title="with Ultra-Wide Dual Rear Camera"
                description="Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera."
                key="2"
                imagePath={ss2}
            />
            <BannerAds
                title="with Ultra-Wide Dual Rear Camera"
                description="Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera."
                key="3"
                imagePath={ss3}
            />
            <BannerAds
                title="with Ultra-Wide Dual Rear Camera"
                description="Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera."
                key="4"
                imagePath={ss4}
            />
            <BannerAds
                title="with Ultra-Wide Dual Rear Camera"
                description="Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera."
                key="5"
                imagePath={ss5}
            />
            <BannerAds
                title="with Ultra-Wide Dual Rear Camera"
                description="Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera."
                key="6"
                imagePath={ss7}
            />
            <BannerAds
                title="with Ultra-Wide Dual Rear Camera"
                description="Now shoot from one extreme to the other without FOMO. Set #SquadGoals by clicking group photos from the Ultra Wide Dual Rear Camera."
                videoText="Made in Banglaedsh"
                key="7"
                videoId="cevRxLV54Rk"
            />
        </div>
    </div>
);

export default Description;
