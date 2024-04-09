import React, { useState, useMemo, useRef, useEffect } from "react"
import TinderCard from "react-tinder-card"
import NavButton from "../components/NavButton";
import "../App.css"

const Index = ({ cats }) => {
  const [currentIndex, setCurrentIndex] = useState(cats.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(cats.length)
        .fill()
        .map(() => React.createRef()),
    [cats.length]
  )

  useEffect(() => {
    setCurrentIndex(cats.length - 1)
    currentIndexRef.current = cats.length - 1
  }, [cats.length])

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < cats.length - 1

  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < cats.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className="index-page">
      <h1 className="index-header">Perrfect Match</h1>
      <div className="swipe-container">
        {cats.map((cat, index) => (
          <TinderCard
            ref={childRefs[index]}
            key={cat.name}
            onSwipe={(dir) => swiped(dir, cat.name, index)}
            onCardLeftScreen={() => outOfFrame(cat.name, index)}
          >
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-back">
                    <ul className="flip-card-back-ul">
                      <li>
                        <h3>{cat.name}</h3>
                      </li>
                      <li>
                        <h4>Age: {cat.age}</h4>
                      </li>
                      <li>
                        <p className="index-enjoys">Enjoys: {cat.enjoys}</p>
                      </li>
                      <li>
                        <NavButton className= "flip-card-button"
                        url={`/cat-show/${cat.id}`}
                        buttonContent="See More"
                        />
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{ backgroundImage: 
                    "url(" + cat.image + ")" }} 
                    aria-label={ `Profile of a cat named ${cat.name}`}
                    className="flip-card-front card"
                  >
                    <h3>{cat.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          </TinderCard>
        ))}
        </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#f51955" }} onClick={() => swipe("left")}
          >
          Swipe left!
        </button>
        <button
          style={{ backgroundColor: !canGoBack && "#f55477" }} onClick={() => goBack()}
          >
            Undo swipe!
        </button>
        <button
          style={{ backgroundColor: !canSwipe && "#f51955" }} onClick={() => swipe("right")}
          >
          Swipe right!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText">
          Swipe a card or press a button!
        </h2>
      )}
      </div>
  )
}

export default Index