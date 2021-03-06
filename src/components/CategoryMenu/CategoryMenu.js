/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';

const CategoryMenu = ({ openCategoryMenu, isOpenCategoryMenu }) => (
    <div className="category-section box-shadow">
        <div className="mobile-box">
            <ul>
                <li>Category</li>
            </ul>
        </div>
        <div className="category-section-title">
            <h2>All categories</h2>
        </div>
        <div className="category-section-item">
            <ul>
                <li>
                    <NavLink to="/category/men-fashion">
                        Men fashion{' '}
                        <span className="category-toggle-icon" onClick={openCategoryMenu}>
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul
                        className={
                            isOpenCategoryMenu
                                ? 'category-section-dropdown show'
                                : 'category-section-dropdown'
                        }
                    >
                        <li>
                            <a href="category-sub-page.html">Jackets & hoodies</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Shirts{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Formal</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Casual</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Tees & polos</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Panjabi</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Pants & trousers{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Jeans</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Casual</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Watches{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Navifoce</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Skmei</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Woodpecker</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Sonata</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Sunglass & Eyewear</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Walllets & belts</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Bags & backpacks</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Footwear{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Casual</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Formal</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Accessories{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Socks</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Shoes accessories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Inner wear</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/women-fashion">
                        Women fashion{' '}
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">Saree</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Hijabs</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Salwar kamix & Kurtis{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Stitch</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Unstitch</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Footwear{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Shoes</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Shocks</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Bags & clutches</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Backpacks</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Western{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Tops</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Jackets & hoodies</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">T-shirts</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Pant & trousers{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Pajama</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Watches</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Jewellery{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Necklace & pendants</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Earrings</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Nosepins</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Bangles</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Rings</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Lingerie & sleep wear{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Tank top and crop top</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Shoes accessories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Sunglass & eyewear</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/phones&tablets">
                        Phones & tablets{' '}
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">
                                Phones{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Apple</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Samsung</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Huawei</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Nokia</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Oppo</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Maximus</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Symphony</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Vivo</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Realme</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Infinix</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">OnePlus</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Motorola</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">GSM phones</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Tablets</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Smart watch</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Bluetooth speakers</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Earphone & Headsets</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Power bank</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Chargers & cables</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Mobile accessories{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Back covers</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Screen protector</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Others</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">All the xiaomi accessories</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/computer&accessories">
                        Computer & Accessories
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">
                                Laptop & Notebooks
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Apple</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Asus</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">HP</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Lenovo</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">I-Life</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Xiaomi</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Laptop Accessories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Desktop PC</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Monitor</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Keyboard & Mouse{' '}
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Keyboard</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Mouse</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Mouse Pad</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Combo Products</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Router & Networking
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Router</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Network Accessories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Storage
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Hard Drives</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Pendrive</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Audio Accessories
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Speaker</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Headset</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Microphone</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Printers & Scanners</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Accessories
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Cables & Converter</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Card Reader & Hubs</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Webcam</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Cooler</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">LED Light Strip</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Gamers Zone
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Laptop</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Keyboard & Mouse</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Game Controller</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Headsets</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Chair</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Computer & Accessories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Projector</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Components
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Motherboard</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">RAM</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Graphics Card</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Casing</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Power Supply (PSU)</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Optical drive</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Software
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Antivirus</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Operating System</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Power Solution
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Power Strips & Adapters</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">UPS</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Computer Accessories Flash Sale</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/electronic-accessories">
                        Electronic Accessories
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">
                                Television
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Sony</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Samsung</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">ELITE</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">VEZIO</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">NAPCO</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Minister</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Vision</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Kitchen Appliances
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Blender, Juicer & Grinder</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Electric & Microwave Oven</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Rice Cooker</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Water Purifier</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">
                                        Toaster,Sandwich & Roti Maker
                                    </a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Kettle</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Others</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Small & Other Appliances
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Fans</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Irons</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Torch Light and Lamps</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Water & Room Heaters</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Others</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Cameras
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Cameras</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Camera Accessories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Hardware & Tools</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Air Conditioner</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Refrigerator</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Television Accessories</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Generators & IPS</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Washing Machine</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/home&living">
                        Home & Living
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">Plastics</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Pans & Pots</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Kitchen Accessories</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Curtains & Covers</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Bathroom Accessories</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Home Decor
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Rugs & Carpets</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Table Mats & Runners</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Beanbag</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Party Essentials</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Knives & Silverware</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Cookware</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Travel Accessories</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Others</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Groceries</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Bedding
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Bed Sheets</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Pillows & Covers</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Net</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">
                                        Quilts, Blankets & Comforters
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Storage & Organisation</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Ceramics</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Towels
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Towels and Napkins</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Dinning Utensils</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/health&beauty">
                        Health & Beauty
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">
                                Perfume & Deodorant
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Women</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Men</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Makeup
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Face Makeup</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Eye Makeup</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Lips</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Nails</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Brushes and Blenders</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Grooming Products
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Women</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Men</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Personal Care
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Others</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Whisper</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Body & Skin Care
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Women</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Men</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Hair Care</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Sports & Fitness</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Health Care Devices</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Bath & Body
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Hand Care</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Soap, Shower Gel & Scrubs</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Hair Removal</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Buy 1 Get 1</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Bicycle</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/babies&toys">
                        Babies & Toys
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">Toys & Games</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Diaper & Wipes
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Pampers</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Others</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Babies Accessories</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Clothing
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Girls</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Boys</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/sports&outdoor">
                        Sports & Outdoor
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">
                                Exercise & Fitness
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">Treadmills</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Exercise Bikes</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Elliptical Trainers</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Fitness Accessories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Team Sports</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/category/automotive">
                        Automotive
                        <span className="category-toggle-icon">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </NavLink>
                    <ul className="category-section-dropdown">
                        <li>
                            <a href="category-sub-page.html">Motor Cycle</a>
                        </li>
                        <li>
                            <a href="category-sub-page.html">
                                Helmet
                                <span className="category-toggle-icon">
                                    <i className="fas fa-plus" />
                                </span>
                            </a>
                            <ul className="category-section-dropdown">
                                <li>
                                    <a href="category-sub-page.html">KYT</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Bilmola</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">YOHE</a>
                                </li>
                                <li>
                                    <a href="category-sub-page.html">Gliders</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="category-sub-page.html">Accessories</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
);

export default CategoryMenu;
