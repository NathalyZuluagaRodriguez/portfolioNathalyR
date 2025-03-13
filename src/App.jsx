import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home/Home'
import { Skills } from './components/pages/Skills/Skills'
import { PersonalInfo } from './components/pages/PersonalInfo/PersonalInfo'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/Skills' element={ <Skills /> }/>
        <Route path='/PersonalInfo' element={ <PersonalInfo /> }/>

      </Routes>
    </>
  )
}


