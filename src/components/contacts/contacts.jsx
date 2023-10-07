import ItemContact from './Item/item';
import { List, Item, EmptyList } from './contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.length === 0 && (
          <EmptyList>There aren't contacts yet. Let's add somebody.</EmptyList>
        )}
        {contacts.map(({ id, contact, number }) => (
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
