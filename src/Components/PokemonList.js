import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import Search from './Search'

const S = {
  Container: styled.div`
    background-color: green;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

const PokemonList = () => {

  const [pokemons, setPokemon] = useState([])
  const [nextURL, setNextURL] = useState('')
  const [prevURL, setPrevURL] = useState('')

  const fetchPokemons = async () => {
    try {
      const res = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      )

      return res
    } catch (err) {
      console.error(err)
    }
    
  }

  const { data, status } = useQuery('pokemons', fetchPokemons)
  console.log(data, 'data')

  const NextPage = () => {
    setNextURL(data.data.next)
  }
  const PrevPage = () => {
    setPrevURL(data.data.previous)
  }

useEffect(()=> {
fetchPokemons()
},[])


  return (
    <div>
      <h1>Pokemony</h1>

      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'error' && <h2>Error!</h2>}
      {status === 'success' && (
        <div>
          {data &&
            data.data.results.map((pokemon) => (
              <PokemonCard
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
                pokemon={pokemon}
              />
             
            ))}
            {data.data.results.map((pokemon) => (
               <Search name={pokemon.name}/>
            ))}
            
        </div>
      )}
      <button onClick={PrevPage}>Previous</button>
      <button onClick={NextPage}>Next</button>
    </div>
  )
}

export default PokemonList
