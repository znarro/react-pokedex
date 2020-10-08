/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState, useEffect } from "react";
import * as Styled from "./StyledComponents";
import SearchForm from "./SearchForm";
import axios from "axios";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokeData, setPokeData] = useState({});

  const onPokemonChange = (newPokemon) => {
    setPokemon(newPokemon);
  };

  const blueButtons = Array(10).fill(1);

  useEffect(() => {
    async function getPokemon() {
      const URL = `https://pokeapi.co/api/v2/pokemon/`;
      const response = await axios.get(`${URL}${pokemon}`);
      console.log(response.data);
      setPokeData(response.data);
    }
    getPokemon();
  }, [pokemon]);

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
            <Styled.Screen>
              <img
                src={pokeData.sprites ? pokeData.sprites.front_default : ""}
                alt={pokeData.name}
                css={{ width: "100%" }}
              />
            </Styled.Screen>
            <div
              css={css`
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 20px;
              `}
            >
              <Styled.GreenButton>
                {pokeData.id ? `#${pokeData.id}` : ""}
              </Styled.GreenButton>
              <Styled.CrossButton />
            </div>
          </div>
        </Styled.LeftSide>
        <Styled.RightSide
          css={css`
            @media (max-width: 767px) {
              display: none;
            }
          `}
        >
          <SearchForm pokemon={pokemon} onPokemonChange={onPokemonChange} />
          <div css={{ display: "flex", flexWrap: "wrap" }}>
            {blueButtons.map((button, index) => (
              <Styled.BlueButton key={index} />
            ))}
          </div>
          <Styled.DataContainer>
            {pokeData.id ? (
              <React.Fragment>
                <Styled.DataField>
                  {pokeData.name
                    ? `Name: ${
                        pokeData.name[0].toUpperCase() + pokeData.name.slice(1)
                      }`
                    : ""}
                </Styled.DataField>
                <Styled.DataField>
                  {pokeData.types ? `Type: ${pokeData.types[0].type.name}` : ""}
                </Styled.DataField>
                <Styled.DataField>
                  {pokeData.height ? `Height: ${pokeData.height / 10} m` : ""}
                </Styled.DataField>
                <Styled.DataField>
                  {pokeData.weight ? `Weight: ${pokeData.weight / 10} kg` : ""}
                </Styled.DataField>
              </React.Fragment>
            ) : (
              ""
            )}
          </Styled.DataContainer>
        </Styled.RightSide>
      </Styled.Container>
    </main>
  );
};

export default Pokedex;
