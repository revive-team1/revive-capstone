import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FavoriteRecipesButton from './FavoriteRecipesButton'
import { useSelector } from 'react-redux'

function SingleRecipe({ user_id }) {
  const token = useSelector((it) => it.actionsSlice.token)
  const [recipe, setRecipe] = useState([])
  const { recipe_id } = useParams()

  useEffect(() => {

    const fetchSingleRecipe = async () => {
      try {
        // const response = await fetch(`http://localhost:8080/api/recipes/${recipe_id}`);
        const response = await fetch(`https://revive-capstone.onrender.com/api/recipes/${recipe_id}`);
        const recipe = await response.json();
        console.log(recipe)
        setRecipe(recipe);
      } catch (error) {
        console.error(error)
      }
    }
    fetchSingleRecipe()
  }, [])


  return (
    <>
      <div className='row row-cols-sm-1 justify-content-center row-cols-md-4 g-4'>

        <div className='col-6 col-lg-6 p-2'>
          <div className='recipe'>
            <h2 className='card-title text-center'>{recipe.name}</h2>
            <img src={recipe.imgurl} className='card-img-top m-1'/>
            <h5 className='card-subtitle mb-2 text-body-secondary m-1'>Difficulty Level: {recipe.difficulty}</h5>
            <h5 className='card-subtitle mb-2 text-body-secondary m-1'>Serves {recipe.recipe_yield}</h5>
            <p className='lead card-subtitle'><strong>Instructions:</strong> {recipe.description}</p>
            <div className='button'>
              <Link
                to="/recipes" className='btn btn-outline-dark m-2'>
                Back
              </Link>
            </div>

            <div>

              {(!token) ? (
                <>
                  <button className='btn btn-outline-dark' type='button' role='button'><Link className='nav-link' to='/login'>Login to Like Recipe</Link></button>
                </>
              ) : (
                <>
                  <FavoriteRecipesButton className='btn btn-outline-dark' type='button' role='button' user_id={user_id} recipe_id={recipe.recipe_id} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleRecipe