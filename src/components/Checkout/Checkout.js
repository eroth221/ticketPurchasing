import React, { useState } from 'react';
import Shows from '../Shows';
import Payment from '../Payment';
import Delivery from '../Delivery';
import Confirmation from '../Confirmation';
import './Checkout.css';

const Checkout = () => {
    const [creditCards, setCreditCards] = useState([])

    return (
        <div className="checkout">
            <div className="checkout-left-container">
                <div className="block-container">
                    <Shows/>
                </div>
                <div className="block-container">
                    <Delivery/>
                </div>
                <div className="block-container">
                    <Payment creditCards={creditCards} setCreditCards={setCreditCards}/>
                </div>
            </div>
            <div className="checkout-right-container">
                <Confirmation/>
            </div>
            
        </div>
    )
}

export default Checkout;