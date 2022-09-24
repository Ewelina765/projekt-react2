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
  Card: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `,
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState(null)
  const [nextURL, setNextURL] = useState()
  const [prevURL, setPrevURL] = useState()
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
  )
  const [inputText, setInputText] = useState(null)

  const fetchPokemons = async () => {
    try {
      const res = await axios.get(url)

      return res
    } catch (err) {
      console.error(err)
    }
  }

  const { data, status } = useQuery('pokemons', fetchPokemons)
  console.log(data, 'dataList')

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
  const filterPoke = data.data.results.filter((poke) => {
    if(poke.name.toLowerCase().includes(inputText.toLoverCase()))
      return <PokemonCard key={poke.name}/>
    })}, [inputText])

  return (
    <div>
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'error' && <h2>Error!</h2>}
      {status === 'success' && (
        <div>
        <input onChange={(e) => setInputText(e.target.value)}/>{inputText}
          <S.Card>
            {data &&
              data.data.results.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  pokemon={pokemon}
                />
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
