import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Input = styled.div`
  background-color: green;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Search = ({ setInputText, inputText }) => {
  return (
    <Input>
      <TextField
        id='outlined-basic'
        label='Search'
        variant='outlined'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </Input>
  )
}

export default Search
