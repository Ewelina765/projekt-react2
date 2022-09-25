import Navigation from './Header/Navigation'
import { Routes, Route } from 'react-router-dom'
import PokemonList from './PokemonList'
import styled from 'styled-components'
import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

const S = {
  Container: styled.div`
    height: 100vw;
  `,
}

const Home = () => {
  return (
    <S.Container>
      <Navigation />
      <PokemonList />
      <PokemonCard />
    </S.Container>
  )
}
export default Home
