import useFetch from '../hooks/useFetch'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ColorizeIcon from '@mui/icons-material/Colorize'
import Arena from '../Components/Arena'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    transform: rotate(90deg);
  `,
  StyleLink: styled(Link)`
    text-decoration: none;
    color: #034f84;
  `,
  Font:styled.div`
  font-weight: bolder;
  `
}

const PokemonCard2 = ({
  setFavourites,
  favourites,
  id,
  battle,
  setBattle,
  edit,
  setEdit,
  heightP,
  setHeightP,
}) => {
  const [clickedHeart, setClickedHeart] = useState(true)
  const [clickedSword, setClickedSword] = useState(true)

  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  
  

  const onHeartClick = () => {
    setClickedHeart((clickedHeart) => !clickedHeart)
    setFavourites((prev) =>
      prev.includes(data.id)
        ? favourites.filter((x) => x !== data.id)
        : [...prev, data.id]
    )
  }
  const onSwordClick = () => {
    setClickedSword((clickedIcon) => !clickedIcon)
    setBattle((prev) =>
      prev.includes(data.id)
        ? battle.filter((x) => x !== data.id)
        : [...prev, data.id]
    )
  }

  if (!data) return null
  return (
    <S.Li>
      <S.Container>
        <Card>
          <S.IconDiv>
            <S.Favourites active={clickedHeart} onClick={onHeartClick} />
            <S.Sword active={clickedSword} onClick={onSwordClick} />
          </S.IconDiv>
          <S.StyleLink to={`/pokemons/${data.name}`}>
            <S.DivImg>
              <S.Img src={data.sprites.other.dream_world.front_default} />
              <h1>
                {data.name.charAt(0).toLocaleUpperCase() + data.name.slice(1)}
              </h1>
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

export default PokemonCard2
