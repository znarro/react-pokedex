/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export const Footer = () => (
  <footer css={{ padding: "20px", textAlign: "center" }}>
    <p
      css={css`
        color: #003a70;
        font-size: 0.8rem;
        letter-spacing: 1px;
      `}
    >
      Made with{" "}
      <span role="img" aria-label="heart-emoji">
        ❤️
      </span>{" "}
      by DeveLawyer
    </p>
  </footer>
);
