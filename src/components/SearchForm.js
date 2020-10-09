/** @jsx jsx */
import { jsx } from "@emotion/core";
import { StyledInput } from "./StyledComponents";

const SearchForm = ({ pokemon, onPokemonChange }) => {
  const handleChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\s/, "-").toLowerCase();
    console.log(`InputValue: ${value}`);
    onPokemonChange(value.toLowerCase());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={pokemon}
        placeholder="Enter pokemon's name"
        spellcheck="false"
      />
    </form>
  );
};

export default SearchForm;
