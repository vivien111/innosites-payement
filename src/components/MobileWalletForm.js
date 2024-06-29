// src/components/MobileWalletForm.js
import React, { useState } from 'react';

const MobileWalletForm = ({ amount }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [walletProvider, setWalletProvider] = useState(''); // You can have a dropdown or other input for selecting the provider

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for processing mobile wallet payment
        console.log('Processing mobile wallet payment with:', phoneNumber, walletProvider, amount);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Amount</label>
                <input type="text" value={amount} readOnly />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div>
                <label>Wallet Provider</label>
                <input type="text" value={walletProvider} onChange={(e) => setWalletProvider(e.target.value)} required />
                {/* Alternatively, you can use a dropdown to select the provider */}
            </div>
            <button type="submit">Pay</button>
        </form>
    );
};

export default MobileWalletForm;
