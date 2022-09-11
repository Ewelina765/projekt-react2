import styled from 'styled-components'
import Logo from './Logo'
import React, { Component }  from 'react';
const S = {
  Container: styled.div`
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 20px;
    height: 100px;
    font-size: 20px;
    
   
  `,
  Logo: styled.div`
  
  `,
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
  `

}
const Navigation = () => {
  return (
    <S.Container>
      <div>
        <Logo />
      </div>
      <S.Nav>
        <S.NavBasic>
          <p>Ulubione</p>
          <p>Arena</p>
          <p>Logowanie</p>
          <p>Rejestracja</p>
        </S.NavBasic>
        <S.NavExtend>
          <p>Edycja</p>
          <p>Wyloguj</p>
        </S.NavExtend>
      </S.Nav>
    </S.Container>
  )
}

export default Navigation
