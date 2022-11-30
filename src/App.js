import Home from './Components/Home'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Registration } from './Components/Registration'
import styled from 'styled-components'
import { Sign } from './Components/Sign'
import PokemonList from './Components/PokemonList'
import PokemonCard from './Components/PokemonCard'
import { render } from 'react-dom'
import PokemonDetail from './Components/PokemonDetail'
import axios from 'axios'
import Navigation from './Components/Header/Navigation'
import Error from './Components/Error'
import Search from './Components/Search'
import BackGroundFoto from './UI/Background'
const queryClient = new QueryClient()

const S = {
  RegistrationWrapper: styled(Registration)`
    && {
      background-color: #d9ecd0;
      height: 100vw;
      width: 100vw;
    }
  `,
  Main: styled.main`
  background-image: url(BackGroundFoto)
 width: 100vw;
 height: 100vw;
 background-color: #d5f4e6;
  `,
 
}

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('http://localhost:8002/users')
      const data = await response.json()
      setUsers(data)
      console.log('users', users)
    }
    fetchUser()
  }, [users.length])

  return (
    <div>
      <nav>
        <Navigation/>
      </nav>
      <S.Main>
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<Home/>} />
          <Route path='/registration' element={<S.RegistrationWrapper />} />
          <Route path='/sign' element={<Sign users={users} />} />
          <Route path='*' element={<Error />} />
          <Route path='/pokemons/:pokemonId' element={<PokemonDetail />} />
        </Routes>
     </S.Main>
    </div>
  )
}

export default App
