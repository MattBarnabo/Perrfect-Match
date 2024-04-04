import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter} from "react-router-dom"
import CatNew from "../pages/CatNew"

test("render the CatNew component", () => {
  render(
    <BrowserRouter>
      <CatNew />
    </BrowserRouter>
  )
  const catNameHeader = screen.getByText("Add a Cat")
  expect(catNameHeader).toBeInTheDocument()

  const catNameInput = screen.getByLabelText(
    "Enter Your Cats Name"
  )
  expect(catNameInput).toBeInTheDocument()

  const catAgeInput = screen.getByLabelText(
    "Enter Your Cats Age"
  )
  expect(catAgeInput).toBeInTheDocument()

  const catEnjoysInput = screen.getByLabelText(
    "What does your cat enjoy doing?"
  )
  expect(catEnjoysInput).toBeInTheDocument()

  const catImageInput = screen.getByLabelText(
    "Image URL"
  )
  expect(catImageInput).toBeInTheDocument()

  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})