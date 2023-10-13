import {Wrapper,Contact,Tel,Delete} from "./item.styled"
import { AiFillDelete } from 'react-icons/ai';
import { FcBusinessContact } from 'react-icons/fc';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/action";

const ItemContact = ({contact,number,id}) => {

  const dispatch = useDispatch();

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

 return (
   
    <>
<Wrapper>
  <FcBusinessContact size={20} />
  <Contact> {contact}</Contact>
</Wrapper>
<Wrapper>
  <BsTelephoneOutbound size={20} />
  <Tel>{number}</Tel>
</Wrapper>
<Delete role="button" aria-label="Delete" onClick={() => handleContactDelete(id)}>
  <AiFillDelete size={20} />
</Delete>
</>
)
}


export default ItemContact;