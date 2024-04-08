import React from "react"
import { useParams } from "react-router-dom"
import NavButton from "../components/NavButton"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats?.find((catObject) => catObject.id === +id)
  return (
    <div className='page-body'>
        <div className="show-profile">
          <ul className="show-text">
            <li className='page-title'><h2>Meet {cat.name}</h2></li>
            <li className="show-cat-age"><h4>Age {cat.age}</h4></li>
            <li className="show-cat-enjoys">
              <h4>{cat.name} enjoys {cat.enjoys}.</h4>
            </li>
            <li><NavButton url="/cat-index" buttonContent= "Back to All the Cats"></NavButton></li>
          </ul>
          <img
            src={cat.image}
            alt={`profile of ${cat.name}`}
            className="show-cat-image"
          />
        </div>
    </div>
  )
}

export default CatShow
