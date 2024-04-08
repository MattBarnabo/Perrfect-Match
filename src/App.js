import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
  const [cats, setCats] = useState([])
  useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    try {
      const getResponse = await fetch ("http://localhost:3000/cats")
      if (!getResponse.ok) {
        throw new Error("Error on the get request for cats")
      }
      const getResult = await getResponse.json()
      setCats(getResult)
    } catch (error) {
      alert("Ope that didn't work", error.message)
    }
  }

  const createNewCat = async (newCat) => {
    try {
      const postResponse = await fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCat)
      })
        if(!postResponse.ok) {
          throw new Error("Error on the post request for cats")
        }
        await postResponse.json()
        getCats()
    } catch (error) {
      alert("Ope that didn't work", error.message)
    }
  }
  const updateCat = async (editCat, id) => {
    console.log("editCat:", editCat);
    console.log("id:", id);
    try {
      const patchResponse = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editCat)
      })
      if(!patchResponse.ok) {
        throw new Error("Error on the patch request for cats")
      }
      await patchResponse.json()
      getCats()
    } catch(error) {
      alert("Ope that didn't work", error.message)
    }
  }

  const deleteCat = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE"
        })
        if(!response.ok) {
        throw new Error("Error on the delete request")
      }
      getCats()
    } catch(error) {
      alert("Ope that didn't work", error.message)
    }
  }

  let randomNumber = Math.ceil(Math.random()*3)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-index" element={<CatIndex cats={cats} />}
        />
        <Route path="/cat-show/:id" element={<CatShow
        cats={cats} deleteCat={deleteCat} />}
        />
        <Route path="/cat-new" element={<CatNew createNewCat={createNewCat} />}
        />
        <Route path="/cat-edit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />}
        />
        <Route path="*" element={<NotFound randomNumber = {randomNumber} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

