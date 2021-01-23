import React from 'react'
import { Link } from 'react-router-dom';

function Products({product}) {
    return (
        <div className='product_container col-12'>
            <div className="row">
                <div className='single_product' key={product.id}>
                    <div className="row">
                        <div className="product_image">
                            <Link to='/product-details'>
                                <img src={`assets/images/best_products/${product.image}`} alt={product.name}/>
                            </Link>
                        </div>
                        <div className="product_details">
                            <div className="product_name">{product.name}</div>
                        
                            <div className="product_ratings">
                                <span className="product_rating_stars">
                                        {
                                        Array(product.reviews)
                                        .fill()
                                        .map(_ => (
                                        <h3 className='no-gutters'> &#9733; </h3>
                                        ))
                                        }
                                </span>
                                <span className="product_rating_count">{product.reviews} reviews</span>
                            </div>
                            <div className="product_price">
                                <span className="price">$ {product.price}</span>
                                {product.previousPrice && <span className="previous_price"> <del>$ {product.previousPrice}</del></span>}
                            </div>
                            <div className="product_buttons">
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
        </div>
        </div>
    )
}

export default Products
