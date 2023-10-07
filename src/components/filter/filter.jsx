
import {Input,Wrapper,Title} from './filter.styled';

const Filter = ({ filter, onChange }) => {
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
