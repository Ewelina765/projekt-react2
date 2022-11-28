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

const PokemonCard = ({ name, url, pokemons }) => {
  const [favourites, setFavourites] = useState([])
  const [clickedIcon, setClickedIcon] = useState(false)

  const addToFavourites = () => {
    setClickedIcon((clickedIcon) => !clickedIcon)
    const filterFavourites = favourites.filter((item) =>
      item.name.includes(name)
    )
    if (clickedIcon === true && favourites.length > 0 && !filterFavourites) {
      setFavourites((favourites) => [...favourites, filterFavourites])
      console.log('favs', favourites)
    }
  }

  // const removeFavourite = () => {
  //   setClickedIcon(false)
  // }

  const { data } = useFetch(url)

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
