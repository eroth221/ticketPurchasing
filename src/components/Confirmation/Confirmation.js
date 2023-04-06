import React, { useState } from 'react';
import './Confirmation.css';

const Confirmation = () => {
    return (
        <div className="confirmation">
            <div className="confirmation-header">
                <h2>Total</h2>
            </div>
            <div className="confirmation-body">
                <div className="cost-breakdown">
                    <div>
                        <h3>Tickets</h3>
                        <p>Standard Entry: $52 x 2</p>
                    </div>
                    <div>
                        <h3>Notes From Seller</h3>
                        <p>Proof of Covid Vaccine required for entry to venue.</p>
                    </div>
                    <div>
                        <h3>Fees</h3>
                        <p>Service Fee</p>
                        <p>Order Proceessing Fee</p>
                    </div>
                    <div>
                        <h3>Delivery</h3>
                        <p>Mobile Entry</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;