import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Input = styled.div`
  background-color: #80ced6;
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
