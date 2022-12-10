import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { height } from '@mui/system'
import Search from './Search'
import { BrowserRouter, Link } from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
import Card from '../UI/Card'
import useFetch from '../hooks/useFetch'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ColorizeIcon from '@mui/icons-material/Colorize'
import { Routes, Route } from 'react-router-dom'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
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
  Favourites: styled(FavoriteIcon)`
    color: ${({ active }) => (active ? 'red' : 'grey')};
    margin-left: 0px;
  `,
  DivImg: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  IconDiv: styled.div``,
  Sword: styled(ColorizeIcon)`
    color: ${({ active }) => (active ? 'black' : 'grey')};
  `,
  StyleLink: styled(Link)`
    text-decoration: none;
    color: #034f84;
  `,
}

const PokemonCard = ({ name, url, id, index, data2 }) => {
  const [favourites, setFavourites] = useState([])
  const [clickedIcon, setClickedIcon] = useState(false)
  const [isInFav, setIsInFav] = useState(false)

  const { data } = useFetch(url)


  // const addToFavourites = index => {
  //   setClickedIcon((clickedIcon) => !clickedIcon)
  //   if (favourites.includes(index) && clickedIcon) setFavourites(favourites=>[...favourites, index]);
  //   console.log(index);
  // };
  // const addToFavourites = (index) => {
  //   setClickedIcon((clickedIcon) => !clickedIcon)
  //  const exist  = favourites.find((item) => item.id == index)
   
    // if (clickedIcon && !exist  && favourites.length>0) {
     
      
       
    //     setFavourites((favourites)=>[...favourites, id])
      
    // }
    // if (!clickedIcon) {
    //   const filter = favourites.filter((item) => item.id !== id)
    //   return filter
    // }
  

  

  const addToFavourites = () => {
    setClickedIcon((clickedIcon) => !clickedIcon)
   
      const filterPoke = data2.results.find(
        (item) => item.id === index
      )

     if (clickedIcon && favourites.length===0 ) {
        setFavourites((favourites) => [...favourites, index])
        console.log('favs', favourites)
      } 
      if (clickedIcon && favourites.length > 0 ) {
        
        setFavourites(favourites.map((x) => x.id===index? x : [...favourites,index]))
        console.log('favs', favourites)
      } 
      if(!clickedIcon) {
        setFavourites(favourites.filter(item => item.id !== index))
      }
    }
  
  useEffect(() => {
    addToFavourites()
  }, [favourites.length])

  

  if (!data) return null
  return (
   
    <S.Li>
      <S.Container>
        <Card>
          <S.IconDiv>
            <S.Favourites active={clickedIcon} onClick={addToFavourites} />
            <S.Sword />
          </S.IconDiv>
          <S.StyleLink to={`/pokemons/${name}` }>
            <S.DivImg>
              <S.Img src={data.sprites.other.dream_world.front_default} />
              <h1>{name.charAt(0).toLocaleUpperCase() + name.slice(1)}</h1>
            </S.DivImg>
            <S.Features>
              <S.Two>
                <S.One>
                  <div>{data.height}</div>
                  <div>Height</div>
                </S.One>
                <S.One>
                  <div>{data.base_experience}</div>
                  <div>Base experience</div>
                </S.One>
              </S.Two>
              <S.Two>
                <S.One>
                  <div>{data.weight}</div>
                  <div>Weight</div>
                </S.One>
                <S.One>
                  <div>{data.abilities[0].ability.name}</div>
                  <div>Ability</div>
                </S.One>
              </S.Two>
            </S.Features>
          </S.StyleLink>
        </Card>
    
 <Routes>
        
          <Route path='/pokemons/:pokemonId' element={<PokemonDetail />} />
          
        </Routes>

      </S.Container>
      
    </S.Li>
    
   
  
  )
}

export default PokemonCard
