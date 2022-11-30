import styled from 'styled-components'
import Logo from './Logo'
import React from 'react'
import { NavLink } from 'react-router-dom'
const S = {
  Container: styled.div`
    background-color: #fefbd8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
    height: 100px;
    font-size: 20px;
  `,
  Logo: styled.div``,
  Nav: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 10px 20px;
  `,
  NavBasic: styled.div`
    display: flex;
    gap: 10px 20px;
  `,
  NavExtend: styled.div`
    display: flex;
    gap: 10px 20px;
  `,
}
const Navigation = () => {
  return (
    <S.Container>
      <div>
        <Logo />
      </div>
      <S.Nav>
        <S.NavBasic>
          <NavLink to='/favourites'>Ulubione</NavLink>
          <NavLink to='/arena'>Arena</NavLink>
          <NavLink to='/sign'>Logowanie</NavLink>
          <NavLink to='/registration'>Rejestracja</NavLink>
        </S.NavBasic>
        <S.NavExtend>
          <NavLink to='/edition'>Edycja</NavLink>
          <NavLink to='/logout'>Wyloguj</NavLink>
        </S.NavExtend>
      </S.Nav>
    </S.Container>
  )
}

export default Navigation
