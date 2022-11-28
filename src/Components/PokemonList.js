import styled from 'styled-components'
import React, { useState } from 'react'
import PokemonCard from './PokemonCard'
import useFetch from '../hooks/useFetch'

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
    justify-content: space-around;
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
  `
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

  // const [favourites, setFavourites] = useState([])
  // const [clickedIcon, setClickedIcon] = useState(false)

  // const addToFavourites = (name) => {
  //   setClickedIcon((clickedIcon) => !clickedIcon)
  //   if (clickedIcon==true) {
  //     favourites.filter((alreadyFavourite) => alreadyFavourite.name == name)
  //     setFavourites((favourites) => [...favourites, name])
  //     console.log('favs', favourites)
  //   }
  // }

  // const removeFavourite = () => {
  //   setClickedIcon(false)
  // }

  return (
    <S.Container>
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
                  // addToFavourites={addToFavourites}
                  // clickedIcon={clickedIcon}
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
      <S.ButtonDiv>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </S.ButtonDiv>
    </S.Container>
  )
}

export default PokemonList
