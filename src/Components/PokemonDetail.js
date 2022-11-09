import { useParams } from 'react-router-dom'
import React from 'react'
import PokemonList from './PokemonList'

const PokemonDetail = ({ pokemons }) => {
  const { pokemonId } = useParams()
  console.log('pokemonIs', pokemonId)
  console.log('pokemons', pokemons)
  return (
    <div>
      <p>Hello </p>
    </div>
  )
}
export default PokemonDetail
