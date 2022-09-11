import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react';



const S = {
  Container: styled.div`
    background-color: green;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}


const Search = () => {
const [inputText, setInputText] = useState('');

const handleText = (e) => {
    setInputText(e.target.value)
};

  return (
    <S.Container>
      <TextField id='outlined-basic' label='Search' variant='outlined' onChange={handleText}/>
    </S.Container>
  )
}

export default Search
