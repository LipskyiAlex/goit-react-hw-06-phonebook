import React from 'react';
import Input from './input/Input';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { MainContainer, MainTitle, SecondaryTitle,Span } from './App.styled';

const App = () => {
  
  return (
    <MainContainer>
      <MainTitle>Phonebo<Span>ok</Span></MainTitle>
      <Input/>
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <Contacts/>
    </MainContainer>
  );
};

export default App;
