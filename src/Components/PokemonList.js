import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { Component, useState } from 'react'

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
    const [pokemonName, setPokemonName] = useState('')
    
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0`)

    return resp
  } catch (err) {
    console.error(err)
  } 
}
const getPokemon = async (resp) => {
  resp.map(async(item) => {
    const result = await axios.get(item.url)
    console.log(result,'result')
    return result
  })
}

const PokemonList = () => {
  
  const [nextURL, setNextURL] = useState();
  const [prevURL, setPrevURL] = useState()
  const { data, status } = useQuery('pokemons', fetchPokemons)
  const {data2} = useQuery('item', getPokemon )

  const NextPage = () => {
setNextURL(data.data.next)
  } 
  const PrevPage = () => {
    setPrevURL(data.data.previous)
  }
  return (
    <div>
      <h1>Pokemony</h1>

      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'error' && <h2>Error!</h2>}
      {status === 'success' && (
        <div>
          {data && data.data.results.map((pokemon) => (
            <p>{pokemon.name}</p>
          ))}
        </div>
      )}
      <button onClick={PrevPage}>Previous</button>
      <button onClick = {NextPage}>Next</button>
    </div>
  )
}

export default PokemonList
