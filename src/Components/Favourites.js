import React from 'react'
import PokemonCard2 from './PokemonCard2'

const Favourites = ({ favourites, setFavourites }) => {
  return (
    <>
      {favourites.map((id) => {
        return (
          <PokemonCard2
            id={id}
            favourites={favourites}
            setFavourites={setFavourites}
          />
        )
      })}
      <div>{favourites.length===0 && <p>Nie masz ulubionych kart</p>}</div>
    </>
  )
}
export default Favourites
