/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState, useEffect } from "react";
import * as Styled from "./StyledComponents";
import SearchForm from "./SearchForm";
import axios from "axios";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState("");

  const onPokemonChange = (newPokemon) => {
    setPokemon(newPokemon);
  };

  const blueButtons = Array(10).fill(1);

  // useEffect(() => {
  //   async function getPokemon() {
  //     const pokeData = await axios.get(
  //       `https://pokeapi.co/api/v2/pokemon/bulbasaur/`
  //     );
  //     console.log(pokeData);
  //     // setPokemon(data.data.name);
  //   }
  //   getPokemon();
  // });

  return (
    <main>
      <Styled.Container>
        <Styled.LeftSide>
          <div
            className="upper"
            css={css`
              display: flex;
              padding: 20px;
              border-bottom: 2px solid black;
            `}
          >
            <Styled.Circle big={true}>
              <Styled.Circle
                css={{ backgroundColor: "whitesmoke", border: "none" }}
              />
            </Styled.Circle>
            <Styled.Circle css={{ backgroundColor: "#ff6b6b" }} />
            <Styled.Circle css={{ backgroundColor: "#e9e900" }} />
            <Styled.Circle css={{ backgroundColor: "#03c803" }} />
          </div>
          <div className="lower" css={{ padding: "20px" }}>
            <Styled.Screen />
            <div
              css={css`
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 20px;
              `}
            >
              <Styled.GreenButton />
              <Styled.CrossButton />
            </div>
          </div>
        </Styled.LeftSide>
        <Styled.RightSide>
          <SearchForm pokemon={pokemon} onPokemonChange={onPokemonChange} />
          <div css={{ display: "flex", flexWrap: "wrap" }}>
            {blueButtons.map((button, index) => (
              <Styled.BlueButton key={index} />
            ))}
          </div>
        </Styled.RightSide>
      </Styled.Container>
    </main>
  );
};

export default Pokedex;
