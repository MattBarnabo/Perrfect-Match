import React from 'react'
import Logo from "../assets/Logos/pmlLarge.png"
import Slider from "../assets/Logos/slider.png"

const Home = () => {
  return (
    <div>
        <svg className ="curved-text" viewBox="0 0 500 500">
          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text width="500">
            <textPath href="#curve">
            Are You Ready To Meet Your Perrfect Match??
            </textPath>
          </text>
        </svg>
      {/* <div className='home-logo'> */}
        <img src={Logo}
        alt="logo of a cat with a heart in a circle and the name perrfect match adopt a cat below"
        className='home-logo'
        />
        <button className='home-slider'>
          <img src={Slider}
        alt="slider with pink and white arrow shape with a pink heart"
        />
        </button>
      {/* </div> */}
    </div>
  )
}

export default Home
