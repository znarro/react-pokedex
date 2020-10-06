/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";
import normalize from "normalize.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          ${normalize};
          @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
          body {
            background-color: whitesmoke;
            font-family: "Press Start 2P", cursive;
          }
        `}
      />
      <div className="App">
        <h1>Pokedex</h1>
      </div>
    </React.Fragment>
  );
}

export default App;
