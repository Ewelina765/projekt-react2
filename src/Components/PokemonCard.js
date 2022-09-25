import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { height } from '@mui/system'
import Search from './Search'
import { Link } from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Card: styled.div`
    height: 400px;
    width: 350px;
    background-color: lightgray;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 1s;
    &:hover {
      transform: scale(1.1);
    }
  `,
  Img: styled.img`
    height: 150px;
    width: 150px;
  `,
  Features: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: large;
    gap: 70px;
  `,
  Two: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
  `,
  One: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
}

const PokemonCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const result = await axios.get(url)
        setPokemon(result.data)

        return result
      } catch (err) {
        console.error(err)
      }
    }
    getPokemon()
  }, [])

  if (!pokemon) return null
  return (
    <div>
      <S.Container>
        <Link to={`/pokemons/${name}`}>
          <S.Card>
            <div>
              <S.Img src={pokemon.sprites.front_default} />
            </div>
            <h1>{name}</h1>
            <S.Features>
              <S.Two>
                <S.One>
                  <div>{pokemon.height}</div>
                  <div>Height</div>
                </S.One>
                <S.One>
                  <div>{pokemon.base_experience}</div>
                  <div>Base experience</div>
                </S.One>
              </S.Two>
              <S.Two>
                <S.One>
                  <div>{pokemon.weight}</div>
                  <div>Weight</div>
                </S.One>
                <S.One>
                  <div>{pokemon.abilities[0].ability.name}</div>
                  <div>Ability</div>
                </S.One>
              </S.Two>
            </S.Features>
          </S.Card>
        </Link>
      </S.Container>
    </div>
  )
}

export default PokemonCard
