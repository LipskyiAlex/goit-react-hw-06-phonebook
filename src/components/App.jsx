import React from 'react';
import Input from './input/Input';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { MainContainer, MainTitle, SecondaryTitle } from './App.styled';

import { useState,useEffect} from 'react';

const App = () => {

  
     const [contacts,setContacts] = useState(() => {

       return JSON.parse(localStorage.getItem('contacts')) ?? []

     });
     const [filter,setFilter] = useState('');
  
        useEffect(() => {

              localStorage.setItem('contacts',JSON.stringify(contacts));


        },[contacts])
  
  const handleInputChange = e => setFilter(e.target.value);


  const handleFormSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    resetForm();

    if (
      contacts.find(
        contact =>
          contact.contact.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.failure(
        `${name} is already in contacts`
      );
    }

    const contactId = nanoid();
    const newContact = {
      id: contactId,
      contact: name,
      number: number,
    };

      
    setContacts(contacts => [...contacts, newContact]);
  };

  const handleContactDelete = contactId => {

    setContacts(contacts =>  contacts.filter(contact => contact.id !== contactId));
  

  };


    const filteredContacts = contacts.filter(({ contact }) =>
      contact.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <Input onSubmit={handleFormSubmit} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter filter={filter} onChange={handleInputChange} />
        <Contacts contacts={filteredContacts} onDelete={handleContactDelete} />
      </MainContainer>
    );
}

export default App;
