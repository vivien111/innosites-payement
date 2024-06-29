// src/components/PaymentForm.js
import React, { useState } from 'react';
import { validateCardNumber, validateExpiryDate, validateCVC, processPayment } from '../utils/paymentUtils';

const PaymentForm = ({ amount }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!validateCardNumber(cardNumber)) {
            setErrorMessage('Invalid card number');
            return;
        }

        if (!validateExpiryDate(expiryDate)) {
            setErrorMessage('Invalid expiry date');
            return;
        }

        if (!validateCVC(cvc)) {
            setErrorMessage('Invalid CVC');
            return;
        }

        try {
            const paymentResponse = await processPayment({ cardNumber, expiryDate, cvc, amount });
            console.log('Payment successful:', paymentResponse);
            // Display success message or perform other actions here
        } catch (error) {
            setErrorMessage('Payment failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Amount</label>
                <input type="text" value={amount} readOnly />
            </div>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <div>
                <label>Card Number</label>
                <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
            </div>
            <div>
                <label>Expiry Date (MM/YY)</label>
                <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
            </div>
            <div>
                <label>CVC</label>
                <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} required />
            </div>
            <button type="submit">Pay</button>
        </form>
    );
};

export default PaymentForm;
