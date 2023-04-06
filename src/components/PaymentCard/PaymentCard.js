import React, { useState } from 'react';
import './PaymentCard.css';

const PaymentCard = ({addCard, addingCards}) => {
    const [name, setName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiration, setExpiration] = useState('')
    const [securityCode, setSecurityCode] = useState('')

    return (
        <form classname="payment-card-form" onSubmit={(e) => {
            e.preventDefault();
            let newCard = {
                name,
                cardNumber,
                expiration,
                securityCode
            }
            addCard(newCard)
        }}>
            <button className="back-button" onClick={() => addingCards(false)}>
                {"< Back To Stored Cards"}
            </button>
            <label htmlFor="name">Name On Card</label>
            <input
                id="name"
                className="payment-card-form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="card-number">Card Number</label>
            <input
                id="card-number"
                className="payment-card-form-input"
                pattern="[0-9]*"
                maxLength={16}
                placeholder="4444 4444 4444 4444"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            ></input>
            <label htmlFor="expiration">Expiration Date</label>
            <input
                id="expiration"
                className="payment-card-form-input"
                type="month"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
            ></input>
            <label htmlFor="security-code">Security Code</label>
            <input
                id="security-code"
                className="payment-card-form-input"
                value={securityCode}
                pattern="[0-9]*"
                maxLength={4}
                onChange={(e) => setSecurityCode(e.target.value)}
            ></input>
            <button className="add-card" type="submit">Add New Card</button>
        </form>
    )
}
export default PaymentCard;