/** @jsx jsx */
import { jsx } from "@emotion/core";
import { StyledInput } from "./StyledComponents";

const SearchForm = ({ pokemon, onPokemonChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onPokemonChange(value.toLowerCase());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={pokemon}
        placeholder="Enter name"
        spellcheck="false"
      />
    </form>
  );
};

export default SearchForm;
