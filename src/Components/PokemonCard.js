import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { height } from '@mui/system'
import Search from './Search'
import { Link } from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
import Card from '../UI/Card'
import useFetch from '../hooks/useFetch'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Img: styled.img`
    height: 150px;
    width: 150px;
  `,
  Features: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: large;
    gap: 70px;
  `,
  Two: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
  `,
  One: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Li: styled.li`
    display: inline-block;
    padding: 10px;
  `,
  Favourites: styled(FavoriteIcon)`
    color: ${({ active }) => (active ? 'red' : 'grey')};
  `,
}

const PokemonCard = ({ name, url }) => {
  const [favourites, setFavourites] = useState([])
  const [clickedIcon, setClickedIcon] = useState(false)
  const [inFav, setInFav] = useState(false)

  const { data } = useFetch(url)

  const { data2 } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
  )

  useEffect(() => {
    const addToFavourites = (data2) => {
      setClickedIcon((clickedIcon) => !clickedIcon)
      if (data2) {
        const filterPoke = data2.results.filter(
          (item) => item.name !== favourites.name
        )
        setInFav(true)
        if (clickedIcon && inFav) {
          setFavourites((favourites) => [...favourites, filterPoke])
          console.log('favs', favourites)
        }
        if (clickedIcon === false) {
          const index = favourites.indexOf(filterPoke)
          if (index > -1) {
            favourites.splice(index, 1)
          }
        }
      }
      addToFavourites()
    }
  }, [])

  // const addToFavourites = () => {
  //   setClickedIcon((clickedIcon) => !clickedIcon)

  //   if (data2) {
  //     const filterPoke = data2.results.filter(
  //       (item) => item.name !== favourites.name
  //     )
  //     setInFav(true)

  //     if (clickedIcon && inFav) {
  //       setFavourites((favourites) => [...favourites, filterPoke])
  //       console.log('favs', favourites)
  //     }
  //   }
  // }

  // const removeFavourite = () => {
  //   setClickedIcon(false)
  // }

  if (!data) return null
  return (
    <S.Li>
      <S.Favourites active={clickedIcon} onClick={addToFavourites} />
      <div>
        <S.Container>
          <Link to={`/pokemons/${name}`}>
            <Card>
              <div>
                <S.Img src={data.sprites.other.dream_world.front_default} />
              </div>
              <h1>{name.charAt(0).toLocaleUpperCase() + name.slice(1)}</h1>
              <S.Features>
                <S.Two>
                  <S.One>
                    <div>{data.height}</div>
                    <div>Height</div>
                  </S.One>
                  <S.One>
                    <div>{data.base_experience}</div>
                    <div>Base experience</div>
                  </S.One>
                </S.Two>
                <S.Two>
                  <S.One>
                    <div>{data.weight}</div>
                    <div>Weight</div>
                  </S.One>
                  <S.One>
                    <div>{data.abilities[0].ability.name}</div>
                    <div>Ability</div>
                  </S.One>
                </S.Two>
              </S.Features>
            </Card>
          </Link>
        </S.Container>
      </div>
    </S.Li>
  )
}

export default PokemonCard
