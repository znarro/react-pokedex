/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React, { useState } from "react";

const StyledForm = styled.form`
  background-color: green;
`;

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <StyledForm>
        <input type="text" onChange={handleChange} value={query} />
      </StyledForm>
    </div>
  );
};

export default SearchForm;
