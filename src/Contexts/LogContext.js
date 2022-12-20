import { useState, createContext } from 'react'
import React from 'react'

export const LogInContext = createContext()

export const LogInProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false)

  const logInFunction = () => {
    setIsLogIn(true)
  }
  const logOutFunction = () => {
    setIsLogIn(false)
  }

  return (
    <LogInContext.Provider
      value={{ isLogIn, setIsLogIn, logInFunction, logOutFunction }}
    >
      {children}
    </LogInContext.Provider>
  )
}
