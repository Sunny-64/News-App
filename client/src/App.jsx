import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
// import  from './components/Footer'

function App() {
  return (
    <div className="w-full">
      <Header />
      <Cards /> 
      <Footer /> 
    </div>
  )
}

export default App
