/** @jsx jsx */
import { jsx } from "@emotion/core";
import { StyledInput } from "./StyledComponents";

const SearchForm = ({ pokemon, onPokemonChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onPokemonChange(value.toLowerCase());
  };

  return (
    <form>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={pokemon}
        placeholder="Enter pokémon name"
        spellcheck="false"
      />
    </form>
  );
};

export default SearchForm;
