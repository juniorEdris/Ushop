import React from 'react'
import { Link } from 'react-router-dom'
import { bestproducts } from '../../../data'
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
        <div className='best_sellers_products pt-4'>
                <div className="best_heading col-12 col-md-4 p-md-0">
                    <div className='best_heading_product'>
                        <div className="best_heading_img">
                            <Link to='/product-details'>
                                <img src={`assets/images/best_products/${bestProd.image}`} alt={bestProd
                                .name}/>
                            </Link>
                        </div>
                        <div className="best_heading_product_details">
                            <div className="product_name">{bestProd.name}</div>
                        
                            <div className="best_heading_product_ratings">
                                <span className="product_rating_stars">
                                        {
                                        Array(bestProd.reviews)
                                        .fill()
                                        .map(_ => (
                                        <h3 className='no-gutters'> &#9733; </h3>
                                        ))
                                        }
                                </span>
                                <span className="product_rating_count">{bestProd.reviews} reviews</span>
                            </div>
                            <div className="best_heading_product_price">
                                <span className="price">$ {bestProd.price}</span>
                                {bestProd.previousPrice && <span className="previous_price"> <del>$ {bestProd.previousPrice}</del></span>}
                            </div>
                            <div className="best_heading_product_buttons">
                                <div className='add_button'>
                                    <button className="btn btn-warning">add to cart</button>
                                </div>
                                <div className="additional_buttons">
                                    <span className='lnr lnr-heart btn btn-warning'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                {/* right div starts here*/}
                <div className="best_product_container col-sm-12 col-md-8 pl-sm-0 pl-md-3 pr-md-0">
                {bestproducts.map(product=>(
                    <div className="best_single_item col-md-4 col-12 mb-3 mr-0">{/* mr-1*/}
                        <div className="best_item_img">
                            <Link to='/product-details'>
                                <img src={`assets/images/best_products/category-2.png`} alt={product.name}/>
                            </Link>
                        </div>
                        <div className="best_item_details">
                                <div className="product_name">{product.name}</div>
                            
                                <div className="best_item_ratings">
                                    <span className="product_rating_stars">
                                            {
                                            Array(product.reviews)
                                            .fill()
                                            .map(_ => (
                                            <h5 className='no-gutters'> &#9733; </h5>
                                            ))
                                            }
                                    </span>
                                    <span className="product_rating_count">{product.reviews} reviews</span>
                                </div>
                                <div className="best_item_price">
                                    <span className="price">$ {product.price}</span>
                                    {product.previousPrice && <span className="previous_price"> <del>$ {product.previousPrice}</del></span>}
                                </div>
                                <div className="best_item_buttons">
                                    <div className='add_button'>
                                        <button className="btn btn-warning">add to cart</button>
                                    </div>
                                    <div className="additional_buttons">
                                        <span className='lnr lnr-heart btn btn-warning'></span>
                                    </div>
                                </div>
                            </div>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default BestSellersProducts
