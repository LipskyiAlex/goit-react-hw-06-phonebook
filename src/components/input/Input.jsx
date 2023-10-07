import { Formik } from 'formik';
import * as yup from 'yup';
import { FormWrapper, FormInput, Button, Error } from './input.styled';

const schema = yup.object().shape({
  name: yup.string().min(3).max(32).required(),
  number: yup.string().min(3).required(),
});

const Input = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormWrapper>
        <FormInput
          type="text"
          name="name"
          placeholder="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Error name="name" component="div" />
        <FormInput
          type="tel"
          name="number"
          placeholder="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Error name="number" component="div" />
        <Button type="submit">Add to contacts</Button>
      </FormWrapper>
    </Formik>
  );
};

export default Input;
