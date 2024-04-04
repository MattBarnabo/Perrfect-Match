import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter} from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("render the NotFound component", () => {

  test("render with first message and image variant", () => {
    render(
      <BrowserRouter>
        <NotFound randomNumber={1} />
      </BrowserRouter>
    )
    const notFoundTitle = screen.getByText(
      "404: Oops! Looks like this cool cat has wandered off with the page you're seeking!"
    )
    expect(notFoundTitle).toBeInTheDocument()

    const notFoundPicture = screen.getByAltText("cool cat")
    expect(notFoundPicture).toBeInTheDocument()
    expect(notFoundPicture).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )
  })

  test("render with second message and image variant", () => {
    render(
      <BrowserRouter>
        <NotFound randomNumber={2} />
      </BrowserRouter>
    )


    const notFoundTitle2 = screen.getByText(
      "404: The cool cat you're looking for is currently sunbathing elsewhere."
    )
    expect(notFoundTitle2).toBeInTheDocument()

    const notFoundPicture2 = screen.getByAltText("cool cat")
    expect(notFoundPicture2).toBeInTheDocument()
    expect(notFoundPicture2).toHaveAttribute(
      "src",
      "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )
  })

  test("render with third message and image variant", () => {
    render(
      <BrowserRouter>
        <NotFound randomNumber={3} />
      </BrowserRouter>
    )

    const notFoundTitle3 = screen.getByText(
      "404: This page is on a catnap. Let's find another spot to lounge!"
    )
    expect(notFoundTitle3).toBeInTheDocument()

    const notFoundPicture3 = screen.getByAltText("cool cat")
    expect(notFoundPicture3).toBeInTheDocument()
    expect(notFoundPicture3).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1549317909-68b039b635e7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    )
  })
})