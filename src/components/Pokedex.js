/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import * as Styled from "./StyledComponents";

const Pokedex = () => {
  return (
    <main>
      <Styled.Container>
        <Styled.LeftSide />
        <Styled.RightSide />
      </Styled.Container>
    </main>
  );
};

export default Pokedex;
