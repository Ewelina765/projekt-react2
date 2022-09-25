import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import PokemonDetail from './PokemonDetail'

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

const PokemonList = () => {
  const [nextURL, setNextURL] = useState()
  const [prevURL, setPrevURL] = useState()
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
  )
  const [inputText, setInputText] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [cards, setCards] = useState([])

  const fetchPokemons = async () => {
    setLoading(true)
    try {
      const res = await axios.get(url)
      console.log('pokemons1', pokemons)
      setPokemons(res.data.results)

      return res
    } catch (err) {
      console.error(err)
    }
  }

  const { data, status } = useQuery('pokemons', fetchPokemons)

  const nextPage = () => {
    setNextURL(data.data.next)
    console.log(nextURL, 'nexturl')
  }
  const prevPage = () => {
    setPrevURL(data.data.previous)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    if (data) {
      const filterPoke = pokemons.filter((poke) => {
        return poke.name.toLowerCase().includes(inputText.toLowerCase())
      })
      setPokemons(filterPoke)
    }
  }, [inputText])

  return (
    <div>
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'error' && <h2>Error!</h2>}
      {status === 'success' && (
        <div>
          <S.Input>
            <TextField
              id='outlined-basic'
              label='Search'
              variant='outlined'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </S.Input>

          <S.Card>
            {data &&
              data.data.results.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  pokemons={pokemons}
                >
                  <PokemonDetail pokemons={pokemons} />
                </PokemonCard>
              ))}
          </S.Card>
        </div>
      )}
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default PokemonList
