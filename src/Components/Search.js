import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';



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
const [inputText, setInputText] = useState('');
const [pokemonName, setPokemonName] = useState('')

const searchPokemons = async () => {
  try {
const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
return resp
}
catch (err) {console.error(err)}
}


const { data } = useQuery('pokemon', searchPokemons)
console.log(data, 'dataSearch')

const handleText = (e) => {
    setPokemonName(e.target.value)
};


  return (
    <S.Container>
      <TextField id='outlined-basic' label='Search' variant='outlined' onChange={handleText}/>
    </S.Container>
  )
}

export default Search
