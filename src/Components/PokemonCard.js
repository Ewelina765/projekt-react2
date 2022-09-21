import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { Component, useState } from 'react'
import { height } from '@mui/system'

const PokemonCard = ({ name, url}) => {
 
  const getPokemon = async () => {
    try {
      const result = await axios.get(url);
      console.log(result, 'result2')
      return result
    } catch (err) {
      console.error(err)
    }
  }

  const { data } = useQuery('pokemon', getPokemon)
  console.log(data, 'dataCard')

  return (
    <div>
      <h1>{name}</h1>
      <h2>{url}</h2>
      {data && data.data.name}
      <div></div>
    </div>
  )
}

export default PokemonCard
