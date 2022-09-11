import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { Component } from 'react'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
const S = {
  Container: styled.div`
    background-color: green;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}
const fetchPokemons = async () => {
  try {
    const resp = await axios.get(URL)
  } catch (err) {
    console.error(err)
  }
}

const PokemonList = () => {
  const { data, status } = useQuery('pokemons', fetchPokemons)

  return (
    <div>
      <h1>Pokemony</h1>

      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'error' && <h2>Error!</h2>}
      {status === 'success' && (
        <div>
          {data?.results?.map((pokemon) => (
            <p>{pokemon.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default PokemonList
