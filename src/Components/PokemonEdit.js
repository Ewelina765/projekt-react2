import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ColorizeIcon from '@mui/icons-material/Colorize'
import IconButton from '@mui/material/IconButton'
import BrushIcon from '@mui/icons-material/Brush'

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
  
  DivImg: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  
  StyleLink: styled(Link)`
    text-decoration: none;
    color: #034f84;
  `,
  
}



const PokemonEdit = ({ edit, setEdit, data, nameP, heightP, baseExp, weightP, ability, setClickedEdit}) => {
 
  
 

  if (!data) return null
  return (
    <div>
      <S.Li>
        <S.Container>
          <Card>
            <S.StyleLink to={`/pokemons/${data.name}`}>
              <S.DivImg>
                <S.Img src={data.sprites.other.dream_world.front_default} />
                <h1>{nameP.charAt(0).toLocaleUpperCase() + nameP.slice(1)}</h1>
              </S.DivImg>
              <S.Features>
                <S.Two>
                  <S.One>
                    <div>{heightP}</div>
                    <div>Height</div>
                  </S.One>
                  <S.One>
                    <div>{baseExp}</div>
                    <div>Base experience</div>
                  </S.One>
                </S.Two>
                <S.Two>
                  <S.One>
                    <div>{weightP}</div>
                    <div>Weight</div>
                  </S.One>
                  <S.One>
                    <div>{ability}</div>
                    <div>Ability</div>
                  </S.One>
                </S.Two>
              </S.Features>
            </S.StyleLink>
          </Card>
        </S.Container>
      </S.Li>
    </div>
  )
}

export default PokemonEdit
