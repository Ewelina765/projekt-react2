import React from 'react'
import PokemonCard2 from './PokemonCard2'
import { useState } from 'react'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import PokemonBattle from './PokemonBattle'
import styled from 'styled-components'

const Arena = ({ battle, setBattle, url }) => {
  
  const S = {
    Container: styled.div`
      display: flex;
      flex-direction: column;
    `,
    Card: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    `,
  }

  return (
    <S.Container>
      <S.Card>
        {battle.map((id) => {
          return<div key={id.id}> <PokemonCard2 id={id} battle={battle} setBattle={setBattle} /></div>
        })}
      </S.Card>
      <div>
         <PokemonBattle battle={battle} setBattle={setBattle}/>
      </div>
    
     
     
    </S.Container>
  )
}
export default Arena
