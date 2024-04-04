import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex1'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import mockCats from "./mockCats"
import "./tinder.css"


const App = () => {
  const [cats, setCats] = useState(mockCats)
  const createNewCat = (newCat) => {
    console.log(newCat);
  }
  let randomNumber = Math.ceil(Math.random()*3)
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-index" element={<CatIndex cats={cats} />} />
        <Route path="/cat-show/:id" element={<CatShow  cats={cats}/>} />
        <Route path="/cat-new" element={<CatNew createNewCat={createNewCat} />} />
        <Route path="/cat-edit" element={<CatEdit />} />
        <Route path="*" element={<NotFound randomNumber = {randomNumber} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

