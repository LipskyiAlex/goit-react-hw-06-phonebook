import ItemContact from './Item/item';
import { List, Item, EmptyList } from './contacts.styled';
import { useSelector } from "react-redux";
import { getContacts,getFilter } from 'redux/selectors';

const getFiltredContacts = (contacts,filter) => {

  return contacts.filter(({ contact }) =>
  contact.toLowerCase().includes(filter.toLowerCase()));

}

const Contacts = ({ onDelete }) => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
   const filtredContacts = getFiltredContacts(contacts,filter);

  return (

    <>
      <List>
        {filtredContacts.length === 0 && (
          <EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>
        )}
        {filtredContacts.map(({ id, contact, number }) => (
          <Item key={id}>
            <ItemContact
              contact={contact}
              number={number}
              onDelete={() => onDelete(id)}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default Contacts;
