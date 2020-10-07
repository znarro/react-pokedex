/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import { StyledInput } from "./StyledComponents";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form>
      <StyledInput
        type="text"
        onChange={handleChange}
        value={query}
        placeholder="Enter pokémon name"
      />
    </form>
  );
};

export default SearchForm;
