import Logo from './Components/Header/Logo'
import Navigation from './Components/Header/Navigation'
import Search from './Components/Search'
import Home from './Components/Home'
import React, { Component }  from 'react';
import { BrowseRouter, Routes, Route, Link } from 'react-router-dom'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Registration } from './Components/Registration'
import styled from 'styled-components'
import { Sign } from './Components/Sign'
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const S = {
  RegistrationWrapper: styled(Registration)`
    && {
      background-color: #d9ecd0;
      height: 100vw;
      width: 100vw;
    }
  `,
}

const App = () => {
  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <Home />
      <S.RegistrationWrapper />
      <SnackbarProvider>
        <Sign />
      </SnackbarProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
