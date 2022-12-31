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
import GlobalStyle from './UI/createGlobalStyle'

const S = {
  RegistrationWrapper: styled(Registration)`
    && {
      background-color: #d5f4e6;
      height: 100vw;
      width: 100vw;
    }
  `,
  Main: styled.main`
    width: 100vw;
    height: 100vw;
    background-color: #d5f4e6;
  `,
}

const App = () => {
  const [users, setUsers] = useState([])
  const [favourites, setFavourites] = useState([])
  const [battle, setBattle] = useState([])
  const [edit, setEdit] = useState([])

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
      <GlobalStyle />
      <nav>
        <Navigation />
      </nav>
      <S.Main>
        <Routes>
          <Route path='/' element={<App />} />
          <Route
            index
            element={
              <Home
                favourites={favourites}
                setFavourites={setFavourites}
                battle={battle}
                setBattle={setBattle}
                edit={edit}
                setEdit={setEdit}
              />
            }
          />
          <Route path='/registration' element={<S.RegistrationWrapper />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/sign' element={<Sign users={users} />} />
          <Route path='*' element={<Error />} />
          <Route path='/pokemons/:pokemonId' element={<PokemonDetail />} />
          <Route
            path='/edition'
            element={<Edition edit={edit} setEdit={setEdit} />}
          />
          <Route
            path='/arena'
            element={<Arena battle={battle} setBattle={setBattle} />}
          />
          <Route
            path='/favourites'
            element={
              <Favourites
                setFavourites={setFavourites}
                favourites={favourites}
              />
            }
          />
        </Routes>
      </S.Main>
    </LogInProvider>
  )
}

export default App
