import React from 'react';
import Input from './input/Input';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import Notiflix from 'notiflix';
import { MainContainer, MainTitle, SecondaryTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact, setFilter, deleteContact } from 'redux/action';
import { getContacts, getFilter } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleFormSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.contact.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.failure(`${values.name} is already in contacts`);
    }
    dispatch(addContact(values));
    resetForm();
  };

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleInputChange = e => dispatch(setFilter(e.target.value));

  return (
    <MainContainer>
      <MainTitle>Phonebook</MainTitle>
      <Input onSubmit={handleFormSubmit} />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter filter={filter} onChange={handleInputChange} />
      <Contacts onDelete={handleContactDelete} />
    </MainContainer>
  );
};

export default App;
