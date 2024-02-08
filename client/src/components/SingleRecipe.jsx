import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FavoriteRecipesButton from './FavoriteRecipesButton'

function SingleRecipe({user_id}) {
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

      <div className='button'>
        <Link
         to="/recipes">
          <button className='backButton'>Back</button>
        </Link>
      </div>


      <p>{recipe.name}</p>
      <p>{recipe.difficulty}</p>
      <p>{recipe.recipe_yield}</p>
      <p>{recipe.description}</p>
      <img src={recipe.imgUrl} />

      <FavoriteRecipesButton user_id = {user_id} recipe_id = {recipe.recipe_id}/>

    </>
  )
}

export default SingleRecipe