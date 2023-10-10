import { useSelector } from "react-redux";
import {Input,Wrapper,Title} from './filter.styled';
import { getFilter } from "redux/selectors";

const Filter = ({onChange }) => {

  const filter = useSelector(getFilter);
  return (
    <Wrapper>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        placeholder="Who are you looking for?.."
        value={filter}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Filter;
