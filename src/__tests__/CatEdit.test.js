import React from "react";
import { render, screen } from  "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import CatEdit from "../pages/CatEdit"
import mockCats from "../mockCats"

test("render the CatEdit component", () => {
    render(
    <MemoryRouter initialEntries={["/cat-edit/1"]}>
    <Routes>
      <Route path="cat-edit/:id" element={<CatEdit cats={mockCats} />} />
    </Routes>
  </MemoryRouter>
  )
  
  const cat = mockCats.find((catObject) => catObject.id === 1)

  const catNameHeader = screen.getByText(`Edit ${cat.name}`)
  expect(catNameHeader).toBeInTheDocument()

  const catNameInput = screen.getByLabelText(
    "Enter Your Cat's Name"
  )
  expect(catNameInput).toBeInTheDocument()

  const catName = screen.getByDisplayValue(`${cat.name}`)
  expect(catName).toBeInTheDocument()

  const catAgeInput = screen.getByLabelText(
    "Enter Your Cat's Age"
  )
  expect(catAgeInput).toBeInTheDocument()

  const catAge = screen.getByDisplayValue(`${cat.age}`)
  expect(catAge).toBeInTheDocument()

  const catEnjoysInput = screen.getByLabelText(
    "What does your cat enjoy doing?"
  )
  expect(catEnjoysInput).toBeInTheDocument()

  const catEnjoys = screen.getByDisplayValue(`${cat.enjoys}`)
  expect(catEnjoys).toBeInTheDocument()

  const catImageInput = screen.getByLabelText(
    "Image URL"
  )
  expect(catImageInput).toBeInTheDocument()

  const catImage = screen.getByDisplayValue(`${cat.image}`)
  expect(catImage).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})