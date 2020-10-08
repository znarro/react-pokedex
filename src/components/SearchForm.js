/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
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
      />
    </form>
  );
};

export default SearchForm;
