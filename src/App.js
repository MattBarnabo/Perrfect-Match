import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import mockCats from "./mockCats"


const App = () => {
  const [cats, setCats] = useState(mockCats)
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-index" element={<CatIndex />} />
        <Route path="/cat-show" element={<CatShow />} />
        <Route path="/cat-new" element={<CatNew />} />
        <Route path="/cat-edit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

