import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import LoginScreen from './components/LoginScreen';
import HeaderComponent from './components/HeaderComponent';
import './App.css'

function App() {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <LoginScreen></LoginScreen>
    </>
  )
}

export default App
