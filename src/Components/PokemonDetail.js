import { NavLink, useLocation, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import PokemonList from './PokemonList'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import useFetch from '../hooks/useFetch'
import styledComponents from 'styled-components'
import styled from 'styled-components'
import Button from '@mui/material/Button';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
 
  `,
  Page: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Img: styled.img`
    height: 200px;
    width: 200px;
  `,
  Features: styled.div`
    display: flex;
    flex-direction: row;
    font-size: large;
    gap: 70px;
    justify-content: space-evenly;
    
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
    text-align: center;
  `,
  H: styled.h1`
    text-align: 'center';
  `,

  Button: styled.button`
  background: transparent;
border-color: red;
width: 100%;
border-radius: 10%;
  `,
}

const PokemonDetail = () => {
  const { pokemonId } = useParams()
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  if (!data) return null
  return (
    <S.Container>
      <S.H>{pokemonId.charAt(0).toLocaleUpperCase() + pokemonId.slice(1)}</S.H>
      <S.Page>
        <S.Features>
       
          <div>
            <S.Img src={data.sprites.front_default} />
          </div>
          <S.Two>
            <S.One>
              <div>{data.height}</div>
              <div>Height</div>
            </S.One>
            <S.One>
              {' '}
              <div>{data.weight}</div>
              <div>Weight</div>
            </S.One>
          </S.Two>
          <S.Two>
            <S.One>
              <div>{data.base_experience}</div>
              <div>Base experience</div>
            </S.One>
            <S.One>
              <div>{data.abilities[0].ability.name}</div>
              <div>Ability</div>
            </S.One>
          </S.Two>
        </S.Features>

        
          <Link to='/'><S.Button variant="outlined" border-color='red'>Strona Główna </S.Button></Link>
        
      </S.Page>
    </S.Container>
  )
}
export default PokemonDetail
