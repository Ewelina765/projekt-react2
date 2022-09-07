import Header from './Components/Header/Header'
import Logo from './Components/Header/Logo'
import Navigation from './Components/Header/Navigation'

import { Registration } from './Components/Registration'
import styled from 'styled-components'
import { Sign } from './Components/Sign'
import { SnackbarProvider } from 'notistack'
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
  //  <Logo/>

  //     <Navigation/>
  return (
    <div>
      <S.RegistrationWrapper />
      <SnackbarProvider>
       <Sign />
      </SnackbarProvider>
     
    </div>
  )
}

export default App
