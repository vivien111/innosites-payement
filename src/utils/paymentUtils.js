// src/utils/paymentUtils.js

// Fonction pour valider le numéro de carte de crédit (utilisant l'algorithme de Luhn)
export const validateCardNumber = (cardNumber) => {
    const regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(cardNumber)) return false;

    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let intVal = parseInt(cardNumber.substr(i, 1));
        if (i % 2 === 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) === 0;
};

// Fonction pour valider la date d'expiration
export const validateExpiryDate = (expiryDate) => {
    if (!expiryDate) return false;

    const [month, year] = expiryDate.split('/');
    if (month.length !== 2 || year.length !== 2) return false;

    const currentDate = new Date();
    const inputDate = new Date(`20${year}-${month}-01`);

    return inputDate > currentDate && month >= 1 && month <= 12;
};

// Fonction pour valider le CVC
export const validateCVC = (cvc) => {
    const regex = new RegExp("^[0-9]{3,4}$");
    return regex.test(cvc);
};

// Fonction pour traiter le paiement (appel API fictif)
export const processPayment = async (cardDetails) => {
    const { cardNumber, expiryDate, cvc, amount } = cardDetails;

    // Exemple d'appel API fictif
    try {
        const response = await fetch('https://api.exemple.com/process-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cardNumber,
                expiryDate,
                cvc,
                amount
            })
        });

        if (!response.ok) {
            throw new Error('Payment failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error processing payment:', error);
        throw error;
    }
};
