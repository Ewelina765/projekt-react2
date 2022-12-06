import styled from 'styled-components'
import Logo from './Logo'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { LogInContext } from '../../Contexts/LogContext'
import { useContext } from 'react'
const S = {
  Container: styled.div`
    background-color: #ffef96;
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
  StyleLink: styled(NavLink)`
  text-decoration: none;
  color: #034f84;
  
};
  
  `,
}
const Navigation = () => {
  const {isLogIn, setIsLogIn} = useContext(LogInContext)

  const logOut = () => {
setIsLogIn(false)
  }
  return (
    <S.Container>
      <div>
        <Logo />
      </div>
      <S.Nav>
        <S.NavBasic>
          <S.StyleLink to='favourites' >Ulubione</S.StyleLink>
          <S.StyleLink to='arena'>Arena</S.StyleLink>
          <S.StyleLink to='sign'>Logowanie</S.StyleLink>
          <S.StyleLink to='registration'>Rejestracja</S.StyleLink>
        </S.NavBasic>
       {isLogIn &&(<S.NavExtend>
          <S.StyleLink to='edition'>Edycja</S.StyleLink>
          <S.StyleLink to='logout' onClick={logOut}>Wyloguj</S.StyleLink>
        </S.NavExtend>)} 
      </S.Nav>
    </S.Container>
  )
}

export default Navigation