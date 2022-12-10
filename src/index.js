import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { SnackbarProvider } from 'notistack'
import { Sign } from './Components/Sign'
import PokemonCard from './Components/PokemonCard'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
     
          <App/>
         
      
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
)
