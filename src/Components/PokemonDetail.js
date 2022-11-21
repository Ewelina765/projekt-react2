import { useParams } from 'react-router-dom'
import React from 'react'
import PokemonList from './PokemonList'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'

const PokemonDetail = ({ pokemons }) => {
  const { pokemonId } = useParams()


  return (
    <div>
      <p>{pokemonId}</p>
      <PokemonCard />
      <Link to='/'> Strona główna </Link>
    </div>
  )
}
export default PokemonDetail
