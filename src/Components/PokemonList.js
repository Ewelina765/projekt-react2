import styled from 'styled-components'
import { useQuery } from 'react-query'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import PokemonDetail from './PokemonDetail'
import useFetch from '../hooks/useFetch'
import Search from './Search'

const S = {
  Container: styled.div`
    background-color: green;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Card: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `,
  Input: styled.div`
    background-color: green;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

const PokemonList = ({ pokemons, inputText, setInputText }) => {
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
  )

  const { data, isLoading, error, nextURL, prevURL } = useFetch(url)
  console.log('data', data)

  const nextPage = () => {
    setUrl(nextURL)
  }
  const prevPage = () => {
    setUrl(prevURL)
  }

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error!</h2>}
      {data && inputText.length > 0 && (
        <div>
          <S.Card>
            <ul>
              {pokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  pokemons={pokemons}
                ></PokemonCard>
              ))}
            </ul>
          </S.Card>
        </div>
      )}
      {data && inputText === '' && (
        <div>
          <S.Card>
            <ul>
              {data.results.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  pokemons={pokemons}
                ></PokemonCard>
              ))}
            </ul>
          </S.Card>
        </div>
      )}
      )<button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default PokemonList
