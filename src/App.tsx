import React from 'react'
import Characters from './components/Body/Characters'
import { Header } from './components/header'
import Global from './GlobalStyle/Global'

const App = () => {
  return <>
    <Global />
    <Header/>
    <Characters />
  </>
}

export default App