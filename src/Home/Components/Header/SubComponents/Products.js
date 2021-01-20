import React from 'react'
import OwlCarousel from 'react-owl-carousel'

function Products() {

    const products = [
        {
        id:1,
        image:'product-14.png',
        name:'hand tool kit',
        reviews:5,
        price:149,
        previousPrice:244,
    },
    ]
    return (
        <div className='product_container col-12'>
            {/* <OwlCarousel>

            </OwlCarousel> */}
            {products.map(product=>(
                <div className='single_product col-12 col-md-4' key={product.id}>
                    <div className="product_image">
                        <img src={`assets/images/featuredProducts/${product.image}`} alt={product.name}/>
                    </div>
                    <div className="product_details">
                        <div className="product_name">{product.name}</div>
                    
                        <div className="product_ratings">
                            <span className="product_rating_stars">{product.reviews}</span>
                            <span className="product_rating_count">{product.reviews} reviews</span>
                        </div>
                        <div className="product_price">
                            <span className="price">$ {product.price}</span>
                            <span className="previous_price"> <del>$ {product.previousPrice}</del></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products
