import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/About/About'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/Home' element={ <Home /> }/>
        <Route path='/About' element={ <About /> }/>
        <Route path='/' element={ <Home /> }/>

      </Routes>
    </>
  )
}

