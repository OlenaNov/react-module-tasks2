import { Wrapper } from "./PaymentWidget.styled";
import React, { Component } from "react";
import { PaymentMethods } from "components/PaymentMethods/PaymentMethods";
import { paymentMethods } from 'constans';
import { VisaPaymentForm } from "../VisaPaymentForm/VisaPaymentForm";
import { MastercardPaymentForm } from "components/MastercardPaymentForm/MastercardPaymentForm";

export class PaymentWidget extends Component {

    state = {
        selectedWidget: null,
    };

    selectedPaymentMethod = method => {
        this.setState({
            selectedWidget: method,
        });
    };

    render() {
        const { selectedWidget } = this.state;

        return (
            <Wrapper>
                <PaymentMethods 
                selected={selectedWidget}
                onSelect={this.selectedPaymentMethod} 
                />
                <>
                    {selectedWidget === paymentMethods.mastercard && (<MastercardPaymentForm />) }
                    {selectedWidget === paymentMethods.visa && <VisaPaymentForm /> }
                    {selectedWidget === paymentMethods.applepay && (<div>ApplepayForm</div>) }
                </>
            </Wrapper>
        );
    };
};
