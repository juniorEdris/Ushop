import React from 'react'

function FeaturesCard() {
    return (
        <div className='container'>
            <div className="features_card">
            <div className='f_card col-6 col-lg-3'>
                <div className='f_card_img'>
                    <img src="assets/images/features_card/free-delivery.png" alt=""/>
                </div>
                <div className='f_card_details'>
                    <h3>free shipping</h3>
                    <p>for order from $50</p>
                </div>
            </div>
            <div className='f_card col-6 col-lg-3'>
                <div className='f_card_img'>
                    <img src="assets/images/features_card/support.png" alt=""/>
                </div>
                <div className='f_card_details'>
                    <h3>support 24/7</h3>
                    <p>call us anytime</p>
                </div>
            </div>
            <div className='f_card col-6 col-lg-3'>
                <div className='f_card_img'>
                    <img src="assets/images/features_card/credit-card.png" alt=""/>
                </div>
                <div className='f_card_details'>
                    <h3>100% safety</h3>
                    <p>only secure payments</p>
                </div>
            </div>
            <div className='f_card col-6 col-lg-3'>
                <div className='f_card_img'>
                    <img src="assets/images/features_card/coupon.png" alt=""/>
                </div>
                <div className='f_card_details'>
                    <h3>hot offers</h3>
                    <p>discounts up to 90%</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FeaturesCard
