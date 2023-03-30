import { paymentMethods } from 'constans';
import { Item } from "./PaymentMethods.styled";


export const PaymentMethods = ({ selected, onSelect }) => {

    return (
        <>
            <Item 
            selected={selected === paymentMethods.mastercard} 
            onClick={() => onSelect(paymentMethods.mastercard)}>MASTERCARD</Item>
            <Item 
            selected={selected === paymentMethods.visa} 
            onClick={() => onSelect(paymentMethods.visa)}>VISA</Item>
            <Item 
            selected={selected === paymentMethods.applepay} 
            onClick={() => onSelect(paymentMethods.applepay)}>APPLE PAY</Item>
        </>
    );
};