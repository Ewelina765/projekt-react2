import styled from 'styled-components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import useFetch from '../hooks/useFetch'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ColorizeIcon from '@mui/icons-material/Colorize'
import IconButton from '@mui/material/IconButton'
import BrushIcon from '@mui/icons-material/Brush'

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
    cursor: pointer;
  `,
  DivImg: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  IconDiv: styled.div``,

  Sword: styled(ColorizeIcon)`
    color: ${({ active }) => (active ? 'black' : 'grey')};
    cursor: pointer;
    transform: rotate(90deg);
  `,
  Edit: styled(BrushIcon)`
    color: ${({ active }) => (active ? 'blue' : 'grey')};
    cursor: pointer;
    transform: rotate(90deg);
  `,
  StyleLink: styled(Link)`
    text-decoration: none;
    color: #034f84;
  `,
  Font: styled.div`
    font-weight: bolder;
  `,
}

const PokemonCard = ({
  name,
  url,
  favourites,
  setFavourites,
  battle,
  setBattle,
  edit,
  setEdit,
}) => {
  const { data } = useFetch(url)

  const onHeartClick = () => {
    setFavourites((prev) =>
      prev.includes(data.id)
        ? favourites.filter((x) => x !== data.id)
        : [...prev, data.id]
    )
  }
  const onSwordClick = () => {
    setBattle((prev) =>
      prev.includes(data.id)
        ? battle.filter((x) => x !== data.id)
        : [...prev, data.id]
    )
  }
  const onEditClick = () => {
    setEdit((prev) =>
      prev.includes(data.id)
        ? edit.filter((x) => x !== data.id)
        : [...prev, data.id]
    )
  }

  if (battle.length > 2) {
    battle.splice(2)
  }

  if (edit.length > 1) {
    edit.splice(1)
  }

  if (!data) return null
  return (
    <S.Li>
      <S.Container>
        <Card>
          <S.IconDiv>
            <IconButton>
              <S.Favourites
                active={favourites.includes(data.id)}
                onClick={onHeartClick}
              />
            </IconButton>
            <IconButton disabled={battle.length > 1}>
              <S.Sword
                active={battle.includes(data.id)}
                onClick={onSwordClick}
              />
            </IconButton>
            <IconButton disabled={edit.length > 0}>
              <S.Edit active={edit.includes(data.id)} onClick={onEditClick} />
            </IconButton>
          </S.IconDiv>
          <S.StyleLink to={`/pokemons/${name}`}>
            <S.DivImg>
              <S.Img src={data.sprites.other.dream_world.front_default} />
              <h1>{name.charAt(0).toLocaleUpperCase() + name.slice(1)}</h1>
            </S.DivImg>
            <S.Features>
              <S.Two>
                <S.One>
                  <div>{data.height}</div>
                  <S.Font>Height</S.Font>
                </S.One>
                <S.One>
                  <div>{data.base_experience}</div>
                  <S.Font>Base experience</S.Font>
                </S.One>
              </S.Two>
              <S.Two>
                <S.One>
                  <div>{data.weight}</div>
                  <S.Font>Weight</S.Font>
                </S.One>
                <S.One>
                  <div>{data.abilities[0].ability.name}</div>
                  <S.Font>Ability</S.Font>
                </S.One>
              </S.Two>
            </S.Features>
          </S.StyleLink>
        </Card>
      </S.Container>
    </S.Li>
  )
}

export default PokemonCard
