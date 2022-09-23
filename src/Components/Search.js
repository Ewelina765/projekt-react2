import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const S = {
  Container: styled.div`
    background-color: green;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

const Search = () => {
  const [inputText, setInputText] = useState('')
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState(null)

  const searchPokemons = async () => {
    try {
      const resp = axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=151/${pokemonName}`
      )

      return resp
    } catch (err) {
      console.error(err)
    }
  }

  const { data, status } = useQuery('pokemon', searchPokemons)
  console.log(data, 'dataSearch')

  const handleText = (e) => {
    setPokemonName(e.target.value)
  }

  // const searchPok = () => {
  //   const dataPok= data.data.results.map((x)=>x.name)
  //   setPokemon(currentList=>{[... currentList, dataPok ]})

  // }

  return (
    <S.Container>
      <div>
        <TextField
          id='outlined-basic'
          label='Search'
          variant='outlined'
          onChange={handleText}
        />
         {status === 'success' && (
          <div>
            {data.data.results
              .map((x) => x.name)
              .filter((val) => {
                if (pokemonName === '') {
                  return val
                } else if (
                  val.toLowerCase().includes(pokemonName.toLowerCase())
                ) {
                  return val
                }
              })}
          </div>
        )}
      </div>
    </S.Container>
  )
}

export default Search
