import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import PokemonList from './PokemonList'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import useFetch from '../hooks/useFetch'
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { maxWidth } from '@mui/system'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  `,
  Page: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
  `,
  Img: styled.img`
    height: 250px;
    width: 250px;
  `,
  Features: styled.div`
    display: flex;
    flex-direction: row;
    font-size: large;
    gap: 70px;
    justify-content: space-evenly;
    padding-bottom: 30px;
  `,
  Two: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 50px;
  `,
  One: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Li: styled.li`
    display: inline-block;
    text-align: center;
  `,
  H: styled.h1`
    text-align: 'center';
  `,

  Button: styled.button`
    background: transparent;
    border-color: blue;
    width: 100%;
    border-radius: 10%;
  `,
  Div: styled.div`
    white-space: nowrap;
    font-weight: bold;
  `,
}

const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  let navigate = useNavigate()
  const routeChange = () => {
    navigate('/')
  }

  if (!data) return null
  return (
    <S.Container>
      <S.H>{pokemonId.charAt(0).toLocaleUpperCase() + pokemonId.slice(1)}</S.H>
      <S.Page>
        <S.Features>
          <div>
            <S.Img src={data.sprites.other.dream_world.front_default} />
          </div>
          <S.Two>
            <S.One>
              <div>{data.height}</div>
              <S.Div>Height</S.Div>
            </S.One>
            <S.One>
              {' '}
              <div>{data.weight}</div>
              <S.Div>Weight</S.Div>
            </S.One>
          </S.Two>
          <S.Two>
            <S.One>
              <div>{data.base_experience}</div>
              <S.Div>Base experience</S.Div>
            </S.One>
            <S.One>
              <div>{data.abilities[0].ability.name}</div>
              <S.Div>Ability</S.Div>
            </S.One>
          </S.Two>
        </S.Features>
        <div>
          <Button
            variant='outlined'
            border-color='red'
            onClick={routeChange}
            style={{ minWidth: '800px' }}
          >
            Strona Główna
          </Button>
        </div>
      </S.Page>
    </S.Container>
  )
}
export default PokemonDetail
