import React from 'react';
import firebase from 'firebase';

import { Paypal } from '../components';

const client = {
    sandbox: "xxxxxxxxxxxxxxxxxxxx", // votre id du sandbox paypal
    production: "xxxxxx" // id Paypal en mode production 
}

const env = process.env.NODE_ENV === "production" ? "production" : "sandbox";

const total = 100;

const currency = "USD";

const onError = (error) => {
    console.log('erreur', error);
}

const onCancel = data => console.log('payment annulé', data);


const Payment = props => {
    const onSuccess = payment => {
        console.log('payment reussie');
        const user = firebase.auth().currentUser;
        const dbRef = firebase.database().ref(`users/${user.uid}`);
        const now = new Date();
        const newDate = now.setDate(now.getDate() + 30);
        console.log('newDate', newDate);
        dbRef
            .set({ validUntil: newDate})
                .then(() => {
                    console.log('opération réussie');
                    props.history.push({ pathname: '/'})
                })
                .catch(e => {
                    console.log('error', e);
                })
    }
    return (
        <Paypal 
            env={env}
            client={client}
            total={total}
            currency={currency}
            onError={onError}
            onCancel={onCancel}
            onSuccess={onSuccess}
        />
    )
}

export { Payment };