import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter} from "react-router-dom"
import Footer from "../components/Footer"
import pmlsmall from "../assets/Logos/pmlsmall.png"

test("render the Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
  const footerContent = screen.getByText(
    /2024 Seth & Matt/
  )
  expect(footerContent).toBeInTheDocument()

  const footerLogo = screen.getByAltText("logo of cat with heart in a circle")
  expect(footerLogo).toHaveAttribute("src", pmlsmall)
  expect(
    screen.getByRole("link", { name: "logo of cat with heart in a circle"})
  ).toHaveAttribute("href", "/")
})