import React from "react"

const NotFound = ({randomNumber}) => {
  const message = () => {
    const message1 = "404: Oops! Looks like this cool cat has wandered off with the page you're seeking!"
    const message2 = "404: The cool cat you're looking for is currently sunbathing elsewhere."
    const message3 = "404: This page is on a catnap. Let's find another spot to lounge!"
      if(randomNumber === 1) {
        return message1
      } else if(randomNumber === 2) {
        return message2
      } else {
        return message3
      }
  }
  const image = () => {
    const image1 = "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const image2 = "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const image3 = "https://images.unsplash.com/photo-1549317909-68b039b635e7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      if(randomNumber === 1) {
        return image1
      } else if(randomNumber === 2) {
        return image2
      } else {
        return image3
      }
  }

  return (
    <>
      <div className="not-found-content">
        <div>
          <img
            src={image()}
            alt="cool cat"
            className="image"
          />
        </div>
        <div className="not-found-title">
          <h3 className="message">{message()}</h3>
        </div>
      </div>
    </>
  )
}

export default NotFound
