/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';

const Images = ({ mainImages, smImages }) => {
    const [currentSilder, setSlider] = useState(1);
    const showImage = (id) => {
        setSlider(id);
    };
    return (
        <div className="product-details-left">
            <div className="product-details-img">
                {mainImages.map((image) => (
                    <figure
                        className={image.id === currentSilder ? 'figure' : 'figure hideImage'}
                        data-figure-item={image.id}
                        key={image.id}
                    >
                        <img src={image.path} alt="" data-zoom-image={image.path} />
                    </figure>
                ))}
            </div>
            <div className="product-details-img-list">
                <ul>
                    {smImages.map((smImage) => (
                        <li
                            className={smImage.id === currentSilder ? 'active' : ''}
                            data-list={smImage.id}
                            key={smImage.id}
                            onClick={() => showImage(smImage.id)}
                            role="button"
                        >
                            <figure>
                                <img src={smImage.path} alt="" />
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Images;
