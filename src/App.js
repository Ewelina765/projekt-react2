import Home from './Components/Home'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Registration } from './Components/Registration'
import styled from 'styled-components'
import { Sign } from './Components/Sign'
import PokemonDetail from './Components/PokemonDetail'
import Navigation from './Components/Header/Navigation'
import Error from './Components/Error'
import { LogInProvider } from './Contexts/LogContext'
import LogOut from './Components/LogOut'
import Edition from './Components/Edition'
import Favourites from './Components/Favourites'
import Arena from './Components/Arena'

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
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('http://localhost:8002/users')
      const data = await response.json()
      setUsers(data)
    }
    fetchUser()
  }, [users.length])

  


  return (
    <LogInProvider>
      <nav>
        <Navigation />
      </nav>
      <S.Main>
        <Routes>
          <Route path='/' element={<App />} />
          <Route index element={<Home favourites={favourites} setFavourites={setFavourites}/>} />
          <Route path='/registration' element={<S.RegistrationWrapper />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/sign' element={<Sign users={users} />} />
          <Route path='*' element={<Error />} />
          <Route path='/pokemons/:pokemonId' element={<PokemonDetail />} />
          <Route path='/edition' element={<Edition/>}/>
          <Route path='/arena' element={<Arena/>}/>
          <Route path='/favourites' element={<Favourites favourites={favourites} setFavourites={setFavourites}/>}/>
        </Routes>
      </S.Main>
    </LogInProvider>
  )
}

export default App
