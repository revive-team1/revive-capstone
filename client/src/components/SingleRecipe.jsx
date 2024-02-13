import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FavoriteRecipesButton from './FavoriteRecipesButton'

function SingleRecipe({ user_id }) {
  const [recipe, setRecipe] = useState([])
  const { recipe_id } = useParams()

  useEffect(() => {

    const fetchSingleRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/recipes/${recipe_id}`);
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
      <div className='d-flex justify-content-center p-5'>

        <div className='h-50 w-50'>

          <h2 className='p-5'>{recipe.name}</h2>
          <img src={recipe.imgurl} className='singlePageImg p-5' />
          <h5>Difficulty Level: {recipe.difficulty}</h5>
          <h5>Serves {recipe.recipe_yield}</h5>
          <p className='p-5'>Instructions: {recipe.description}</p>
          <div className='button'>
            <Link
              to="/recipes" className='btn btn-outline-dark m-2'>
              Back
            </Link>
          </div>
          <FavoriteRecipesButton className='backButton m-2 p-1' user_id={user_id} recipe_id={recipe.recipe_id} />

        </div>

      </div>



    </>
  )
}

export default SingleRecipe