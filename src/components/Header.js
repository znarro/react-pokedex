/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 30px;
    `}
  >
    <h1
      css={css`
        color: #ffcb05;
        font-family: "Luckiest Guy", cursive;
        font-size: 4rem;
        letter-spacing: 10px;
        margin: 30px 0;
        text-shadow: 5px 5px #3d7dca;
      `}
    >
      React Pokedex
    </h1>
  </header>
);
