import styled from "@emotion/styled";

import { Form,Field,ErrorMessage} from 'formik';


export const FormWrapper = styled(Form)`
width: 100%;

`

export const FormInput = styled(Field)`

width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;

  
`


export const Button = styled.button`

  width: 100%;
  background-color:#7F00FF;
  color: white;
  padding: 8px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size:20px;

  &:hover {

    transform: scale(1.01);
  
    background-color: #4CAF50;
  }

`

export const Error = styled(ErrorMessage)`
 
color:red;

font-weight:500;
`