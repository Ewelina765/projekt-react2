import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import ColorizeIcon from '@mui/icons-material/Colorize'
import axios from 'axios'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
  Img: styled.img`
    height: 250px;
    width: 250px;
    opacity: ${({ opacity }) => opacity};
  `,

  PokemonDiv: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Sword: styled(ColorizeIcon)`
    color: ${({ active }) => (active ? 'black' : 'grey')};
    cursor: pointer;
  `,
  StyleLink: styled(Link)`
    text-decoration: none;
    color: #034f84;
  `,
  Trapeze: styled.div`
    border-bottom: 50px solid #555;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    height: 0;
    width: 325px;
  `,
  Buttons: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  `
}
const PokemonBattle = ({ id, battle, setBattle }) => {
  const [clickedSword, setClickedSword] = useState(true)
  const [clickedSword2, setClickedSword2] = useState(true)
  const [pokemon1, setPokemon1] = useState('')
  const [pokemon2, setPokemon2] = useState('')
  const [imgOpacity, setImgOpacity] = useState('1')
  const [imgOpacity2, setImgOpacity2] = useState('1')
  // const [looser, setLooser] = useState('')

  // const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  // console.log('data', data)

  useEffect(() => {
    const fetchPoke1 = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${battle[0]}`
      )
      setPokemon1(response.data)
      console.log('pokemon1', pokemon1)
    }
    fetchPoke1()
  }, [])

  useEffect(() => {
    const fetchPoke2 = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${battle[1]}`
      )
      setPokemon2(response.data)
      console.log('pokemon2', pokemon2)
    }
    fetchPoke2()
  }, [])


  const pokemonPower1 = pokemon1.base_experience * pokemon1.weight
  const pokemonPower2 = pokemon2.base_experience * pokemon2.weight

  console.log('1', pokemonPower1)
  console.log('2', pokemonPower2)

  const battleClick = () => {
    setImgOpacity(pokemonPower1 > pokemonPower2 ? '1' : '0.5')
    setImgOpacity2(pokemonPower2 > pokemonPower1 ? '1' : '0.5')
  }
  const cleanUp = () => {
    setBattle([])
  }

  if (!pokemon1 || !pokemon2) return null
  return (
    <S.Container>
      <S.PokemonDiv>
        <S.Img
          src={pokemon1.sprites.other.dream_world.front_default}
          opacity={imgOpacity}
        />
        <S.Trapeze></S.Trapeze>
      </S.PokemonDiv>
      <S.Buttons>
        <div>
          <Button
            variant='contained'
            size='medium'
            style={{ backgroundColor: '#80ced6' }}
            disabled={battle.length < 2}
            onClick={battleClick}
          >
            Pojedynek
          </Button>
        </div>
        <div>
          <Button
            variant='contained'
            size='medium'
            style={{ backgroundColor: '#80ced6' }}
            onClick={cleanUp}
          >
            Usuń pokemony z areny
          </Button>
        </div>
      </S.Buttons>
      <S.PokemonDiv>
        <S.Img
          src={pokemon2.sprites.other.dream_world.front_default}
          opacity={imgOpacity2}
        />
        <S.Trapeze></S.Trapeze>
      </S.PokemonDiv>
    </S.Container>
  )
}

export default PokemonBattle
