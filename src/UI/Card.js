import styled from 'styled-components'
import React from 'react'

const StyledCard = styled.div`
  height: 400px;
  width: 350px;
  background-color: #fefbd8;
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 1s;
  &:hover {
    transform: scale(1.1);
  }
`

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
