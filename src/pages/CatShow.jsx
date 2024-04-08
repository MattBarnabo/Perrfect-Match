import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import NavButton from "../components/NavButton"

const CatShow = ({ cats, deleteCat }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const cat = cats.find((catObject) => catObject.id === +id)
  const handleDeleteCat = () => {
    deleteCat(cat.id)
    navigate("/cat-index")
  }

  return (
    <div className='page-body'>
      <div className="show-profile">
        <ul className="show-text">
          <li className='page-title'>
            <h2>Meet {cat.name}</h2>
          </li>
          <li className="show-cat-age">
            <h4>Age {cat.age}</h4>
          </li>
          <li className="show-cat-enjoys">
            <h4>{cat.name} enjoys {cat.enjoys}.</h4>
          </li>
          <li>
            <NavButton
              url={`/cat-edit/${cat.id}`}
              buttonContent= {`Edit ${cat.name}`}
              className="show-button"
            >
            </NavButton>
          </li>
          <li>
            <button
              onClick={handleDeleteCat(cat.id)}
              className="nav-button show-button"
            >
              Delete {cat.name}
            </button>
          </li>
          <li>
            <NavButton
              url={"/cat-index"}
              buttonContent= {`Back to all cats`}
              className="show-button"
            >
            </NavButton>
          </li>
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
