import React from 'react'
import Pokedex from './logo.png'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  let navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  }
  return (
    <div>
      <img src={Pokedex} width='230px' height='140px' onClick={goToHome} />
    </div>
  )
}

export default Logo
