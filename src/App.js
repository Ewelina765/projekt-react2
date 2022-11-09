import Home from './Components/Home'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Registration } from './Components/Registration'
import styled from 'styled-components'
import { Sign } from './Components/Sign'
import PokemonCard from './Components/PokemonCard'
import { render } from 'react-dom'
import PokemonDetail from './Components/PokemonDetail'
import axios from 'axios'
import Navigation from './Components/Header/Navigation'

const queryClient = new QueryClient()

const S = {
  RegistrationWrapper: styled(Registration)`
    && {
      background-color: #d9ecd0;
      height: 100vw;
      width: 100vw;
    }
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
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<Home />} />
          <Route path='/registration' element={<S.RegistrationWrapper />} />
          <Route path='/sign' element={<Sign users={users} />} />

          <Route path='/pokemons/:pokemonId' element={<PokemonDetail />} />
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
