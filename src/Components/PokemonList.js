import styled from 'styled-components'
import React, { useState } from 'react'
import PokemonCard from './PokemonCard'
import useFetch from '../hooks/useFetch'
import Button from '@mui/material/Button'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  Card: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  Input: styled.div`
    background-color: green;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ButtonDiv: styled.div`
    padding: 40px;
  `,
}

const PokemonList = ({ pokemons, inputText }) => {
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
  )

  const { data, isLoading, error, nextURL, prevURL } = useFetch(url)

  const nextPage = () => {
    setUrl(nextURL)
  }
  const prevPage = () => {
    setUrl(prevURL)
  }

  return (
    <S.Container>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error!</h2>}
      {data && inputText.length > 0 && (
        <div>
          <S.Card>
            <ul>
              {pokemons.map((pokemon, ind) => (
                <PokemonCard
                  index={ind + 1}
                  id={pokemon.id}
                  key={pokemon.id}
                  name={pokemon.name}
                  url={pokemon.url}
                  pokemons={pokemons}
                ></PokemonCard>
              ))}{' '}
            </ul>
          </S.Card>
        </div>
      )}
      {data && inputText === '' && (
        <div>
          <S.Card>
            <ul>
              {data.results.map((pokemon, ind) => (
                <PokemonCard
                  index={ind + 1}
                  id={pokemon.id}
                  key={pokemon.id}
                  name={pokemon.name}
                  url={pokemon.url}
                  pokemons={pokemons}
                ></PokemonCard>
              ))}
            </ul>
          </S.Card>
        </div>
      )}
      <S.ButtonDiv>
        <Button
          variant='contained'
          size='medium'
          style={{ backgroundColor: '#80ced6' }}
          onClick={prevPage}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          size='medium'
          style={{ backgroundColor: '#80ced6' }}
          onClick={nextPage}
        >
          Next
        </Button>
      </S.ButtonDiv>
    </S.Container>
  )
}

export default PokemonList
