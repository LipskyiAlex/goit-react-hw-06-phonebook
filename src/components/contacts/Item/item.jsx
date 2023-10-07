import {Wrapper,Contact,Tel,Delete} from "./item.styled"
import { AiFillDelete } from 'react-icons/ai';
import { FcBusinessContact } from 'react-icons/fc';
import { BsTelephoneOutbound } from 'react-icons/bs';

const ItemContact = ({contact,number,onDelete}) => {

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
<Delete role="button" aria-label="Delete" onClick={onDelete}>
  <AiFillDelete size={20} />
</Delete>
</>
)
}


export default ItemContact;