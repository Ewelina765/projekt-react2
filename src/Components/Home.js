import PokemonList from './PokemonList'
import styled from 'styled-components'
import React from 'react'
import Search from './Search'
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const S = {
  Container: styled.div`
    height: 100vw;
  `,
}

const Home = ({favourites, setFavourites, battle, setBattle, edit, setEdit}) => {
  const [inputText, setInputText] = useState('')
  const [pokemons, setPokemons] = useState([])

  const { data } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
  )
 
  useEffect(() => {
    if (data) {
      const filters = data.results.filter((item) =>
        item.name.includes(inputText.toLowerCase())
      )
      setPokemons(filters)
    }
  }, [inputText.length])

  return (
    <S.Container>
      <Search inputText={inputText} setInputText={setInputText} />
      <PokemonList pokemons={pokemons} data={data} inputText={inputText} favourites={favourites} setFavourites={setFavourites} battle={battle} setBattle={setBattle} edit={edit} setEdit={setEdit}/>
    </S.Container>
  )
}
export default Home
