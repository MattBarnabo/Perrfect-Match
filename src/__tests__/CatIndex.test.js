import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter} from "react-router-dom"
import CatIndex from "../pages/CatIndex"
import mockCats from "../mockCats"

test('renders the CatIndex components', () => {
  render(
    <BrowserRouter>
      <CatIndex cats={mockCats} />
    </BrowserRouter>
  )
  const indexTitle = screen.getByText("Perrfect Match")
  expect(indexTitle).toBeInTheDocument()

  mockCats.forEach((cat) => {
    const catName = screen.getAllByText(cat.name)
    expect(catName).toHaveLength(2)

    const catImage = screen.getByLabelText(`Profile of a cat named ${cat.name}`)
    expect(catImage).toBeInTheDocument()
  })
})
