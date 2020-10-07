/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 80%;
  margin: 0 auto;
  border: 1px solid blue;
`;

const LeftSide = styled.div`
  width: 400px;
  height: 600px;
  background-color: #dd0303;
`;

const RightSide = styled.div`
  width: 400px;
  height: 500px;
  background-color: blue;
`;

export { Container, LeftSide, RightSide };
