import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { htProducts, plumbProducts, products, ptProducts } from '../../data';
import Products from './SubComponents/Products';



function FeatureProductSlider({tab}) {

    const Options = {
        loop: true,
        margin:15,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items:3,
            },
            1200:{
                items:4
            },
            
        },
    }
    return(
        <>
        {tab ==='all' && (
        <div className='feature_product_slider'>
        <OwlCarousel
        className='owl-theme'
        {...Options}
        >
            {products.map(product=>(
                <Products key={product.id} product={product}/>
            ))}
        </OwlCarousel>
        </div>
    )}
    
    {tab ==='power tools' && (
        <div className='feature_product_slider'>
        <OwlCarousel
        className='owl-theme'
        {...Options}
        >
            {ptProducts.map(product=>(
                <Products key={ptProducts.id} product={product}/>
            ))}
        </OwlCarousel>
        </div>
    )}

    {tab ==='hand tools' && (
        <div className='feature_product_slider'>
        <OwlCarousel
        className='owl-theme'
        {...Options}
        >
            {htProducts.map(product=>(
                <Products key={ptProducts.id} product={product}/>
            ))}
        </OwlCarousel>
        </div>
    )}

    {tab ==='plumbing' && (
        <div className='feature_product_slider'>
        <OwlCarousel
        className='owl-theme'
        {...Options}
        >
            {plumbProducts.map(product=>(
                <Products key={ptProducts.id} product={product}/>
            ))}
        </OwlCarousel>
        </div>
    )}

        </>
    )
}


export default FeatureProductSlider
