import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Alert } from 'reactstrap';
import PaypalExpressBtn from 'react-paypal-express-checkout';

import '../css/Payment.css';

class Paypal extends Component {
    render() {
        const { env, client, currency, total, onError, onSuccess, onCancel } = this.props;
        return (
            <div className="payment">
                <Card className="payment--card">
                    <CardTitle>
                        <Alert color="danger">
                            <h3>UN PAYMENT EST REQUIS POUR CONTINUER !!!</h3>
                        </Alert>
                    </CardTitle>
                    <CardBody className="payment--body">
                        <CardText className="payment--text">
                            VOUS DEVEZ PAYER VOTRE ABONEMENT
                        </CardText>
                        <div className="payment--button">
                            <PaypalExpressBtn 
                                env={env}
                                client={client}
                                currency={currency}
                                total={total}
                                onError={onError}
                                onSuccess={onSuccess}
                                onCancel={onCancel}
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export { Paypal };