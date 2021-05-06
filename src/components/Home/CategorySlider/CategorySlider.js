import SingleItem from './SingleItem';

const CategorySider = () => (
    <div className="category-slider box-shadow">
        <div className="category-owl-slider owl-carousel owl-theme">
            <SingleItem name="Laptop" imagePath="./images/4.png" />
            <SingleItem name="Wrist Watch" imagePath="./images/1.png" />
            <SingleItem name="Folding Mobile" imagePath="./images/2.png" />
            <SingleItem name="Mobile Phone" imagePath="./images/3.png" />
            <SingleItem name="Laptop" imagePath="./images/4.png" />
            <SingleItem name="Smart Watch" imagePath="./images/5.png" />
            <SingleItem name="Shirt" imagePath="./images/6.png" />
            <SingleItem name="Shoe" imagePath="./images/7.png" />
            <SingleItem name="Panjabi" imagePath="./images/8.png" />
            <SingleItem name="Bike" imagePath="./images/10.png" />
            <SingleItem name="Sunglass" imagePath="./images/9.png" />
            <SingleItem name="Laptop" imagePath="./images/4.png" />
        </div>
    </div>
);

export default CategorySider;
