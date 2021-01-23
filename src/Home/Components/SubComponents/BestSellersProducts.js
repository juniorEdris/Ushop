import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../data'
import Product from './Products'

function BestSellersProducts() {

    const bestProd ={
        id:1,
        image:'category-2.png',
        name:'Best product heading',
        reviews:4,
        price:120.24,
        // previousPrice:244.42,
        }
        console.log(bestProd);
    return (
        <div className='best_sellers_products'>
                <div className="best_heading col-12 col-md-6 p-0">
                    {/* <div className='best_heading_product'>
                        <div className="best_heading_img">
                            <Link to='/product-details'>
                                <img src="assets/images/best_products/roller.png" alt=""/>
                            </Link>
                        </div>
                        <div className="best_heading_product_details">
                            <div className="product_name">x y z</div>
                        
                            <div className="best_heading_product_ratings">
                                <span className="product_rating_stars">
                                        {
                                        Array(5)
                                        .fill()
                                        .map(_ => (
                                        <h3 className='no-gutters'> &#9733; </h3>
                                        ))
                                        }
                                </span>
                                <span className="product_rating_count">5 reviews</span>
                            </div>
                            <div className="best_heading_product_price">
                                <span className="price">$ 12.45</span>
                                <span className="previous_price"> <del>$ 20.44</del></span>
                            </div>
                            <div className="best_heading_product_buttons">
                                <div className='add_button'>
                                    <button className="btn btn-warning">add to cart</button>
                                </div>
                                <div className="bestadditional_buttons">
                                    <span className='lnr lnr-heart btn btn-warning'></span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                        <Product key={bestProd.id} product={bestProd}/>
                </div>
                <div className="best_product_container col-12 col-md-6 p-0">
                {products.map(product=>(
                    <div className="col-5">
                        <Product key={product.id} product={product}/>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default BestSellersProducts
