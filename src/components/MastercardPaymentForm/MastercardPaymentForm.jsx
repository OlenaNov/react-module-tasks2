import { Formik } from "formik";
import { FormField } from "components/FormField/FormField";
import { Form } from "components/Form/Form";
import { paymentSchema } from "validation";

const initialValues = { 
    cardHolder: "", 
    cardNumber: "", 
    cvv: "", 
};

export const MastercardPaymentForm = () => {

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
    };

    return <Formik 
        initialValues={initialValues}
        validationSchema={paymentSchema} 
        onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                    <Form>
                        <FormField label="Card holder" name="cardHolder" />
                        <FormField label="Card number" name="cardNumber" />
                        <FormField label="CVV" name="cvv" />
                        
                        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Trying to pay..." : "Pay"}</button>
                    </Form>
            )}
    </Formik>
}