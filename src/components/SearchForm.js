/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import { StyledInput } from "./StyledComponents";

const SearchForm = ({ pokemon, onPokemonChange }) => {
  const handleChange = (event) => {
    onPokemonChange(event.target.value);
  };

  return (
    <form>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={pokemon}
        placeholder="Enter pokémon name"
      />
    </form>
  );
};

export default SearchForm;
