import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Products from './Products'


function FeatureProductSlider() {

    const products = [
        {
        id:1,
        image:'product-14.png',
        name:'hand tool kit',
        reviews:5,
        price:149.24,
        previousPrice:244.42,
        },
        {
        id:2,
        image:'product-14.png',
        name:'hand tool kit',
        reviews:5,
        price:149.24,
        previousPrice:244.42,
        },
        {
        id:3,
        image:'product-14.png',
        name:'hand tool kit',
        reviews:5,
        price:149.24,
        previousPrice:244.42,
        },
        {
        id:4,
        image:'product-14.png',
        name:'hand tool kit',
        reviews:5,
        price:149.24,
        previousPrice:244.42,
        },
        {
        id:5,
        image:'product-14.png',
        name:'hand tool kit',
        reviews:5,
        price:149.24,
        previousPrice:244.42,
        },
        {
        id:6,
        image:'product-14.png',
        name:'hand tool kit',
        reviews:5,
        price:149.24,
        previousPrice:244.42,
        },
        {
        id:7,
        image:'product-14.png',
        name:'hand tool kit 7',
        reviews:5,
        price:149.24,
        previousPrice:244.42,
        },
    ]

    const Options = {
        loop: true,
        margin:15,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2,
            },
            800:{
                items:3,
            },
            1200:{
                items:4
            },
            
        },
    }
    return (
        <div className='feature_product_slider'>
        <OwlCarousel
        className='owl-theme'
        {...Options}
        >
            {products.map(product=>(
                <Products product={product}/>
            ))}
        </OwlCarousel>
        </div>
    )
}

export default FeatureProductSlider
