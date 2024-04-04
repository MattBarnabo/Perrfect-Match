import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Logo from "../assets/Logos/pmlLarge.png"
import Slider from "../assets/Logos/slider.png"

test("render the Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  const homePerrfectMatchLogo = screen.getByAltText(
    "logo of a cat with a heart in a circle and the name perrfect match adopt a cat below"
  )
  expect(homePerrfectMatchLogo).toBeInTheDocument()
  expect(homePerrfectMatchLogo).toHaveAttribute("src", Logo)

  const homeSlider = screen.getByAltText(
    "slider with pink and white arrow shape with a pink heart"
  )
  expect(homeSlider).toBeInTheDocument()
  expect(homeSlider).toHaveAttribute("src", Slider)
  expect(
    screen.getByRole("link", {
      name: "slider with pink and white arrow shape with a pink heart"
    })
  ).toHaveAttribute("href", "/cat-index")

  const svgHomeCurvedText = screen.getByText("Are You Ready To Meet Your Perrrrfect Match?");
  expect(svgHomeCurvedText).toBeInTheDocument();
})