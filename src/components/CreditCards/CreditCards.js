import React, { useState } from 'react';
import './CreditCards.css';

const CreditCards = ({addNewCard, creditCards}) => {

    return (
        <div className="credit-cards">
            {creditCards.length > 0 &&
                <div className="credit-card-list">
                    {creditCards.map(card => (
                        <span className="card-preview">
                            <input type="radio" name="card"/>
                            {card.cardNumber}
                        </span>
                        
                    ))}
                </div>
            }
            <div className="add-new-card-container">
                <label htmlFor="add-new-card">
                    <svg width="24px" height="24px" viewBox="0 0 20 20" aria-labelledby="plus-sign-title" role="img">
                        <title id="plus-sign-title">Plus Sign</title>
                        <path
                        className='plus-sign'
                        d="M18.5 10H10V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0 0 1H9v8.5a.5.5 0 0 0 1 0V11h8.5a.5.5 0 0 0 0-1z"
                        ></path>
                    </svg>
                </label>
                <button id="add-new-card" className='add-new-card' onClick={() => addNewCard(true)}>
                    Add New Card
                </button>
            </div>
        </div>
    )
}

export default CreditCards;