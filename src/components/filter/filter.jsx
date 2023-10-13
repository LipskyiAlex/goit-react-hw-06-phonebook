import { useSelector } from "react-redux";
import {Input,Wrapper,Title} from './filter.styled';
import { getFilter } from "redux/selectors";
import { useDispatch } from 'react-redux';
import {setFilter} from 'redux/action';


const Filter = () => {

  const dispatch = useDispatch();
  const handleInputChange = e => dispatch(setFilter(e.target.value));

  const filter = useSelector(getFilter);
  return (
    <Wrapper>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        placeholder="Who are you looking for?.."
        value={filter}
        onChange={handleInputChange}
      />
    </Wrapper>
  );
};

export default Filter;
