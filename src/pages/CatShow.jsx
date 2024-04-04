import React from "react"
import { useParams } from "react-router-dom"
import NavButton from "../components/NavButton"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats?.find((catObject) => catObject.id === +id)
  return (
    <div className='page-body'>
      <div>
        <h2 className='page-title'>Meet {cat.name}</h2>
        <p>Age {cat.age}</p>
        <p>
          {cat.name} enjoys {cat.enjoys}.
        </p>
        <img
          src={cat.image}
          alt={`profile of ${cat.name}`}
          className="show-cat-profile"
        />
      </div>
      <NavButton url="/cat-index" buttonContent= "Back to All the Cats"></NavButton>
    </div>
  )
}

export default CatShow
