# Innosites Payment Library React js 

A simple payment form component for React.

## Installation

npm i innosites-payement

npm install innosites-payement



// src/App.js
import React from 'react';
import { PaymentComponent } from 'innosites-payement';

const App = () => {
  const totalPrice = 100; // Exemple de montant total

  return (
    <div className="App">
      <h1>Payment Example</h1>
      <PaymentComponent amount={totalPrice} />
    </div>
  );
};

export default App;
