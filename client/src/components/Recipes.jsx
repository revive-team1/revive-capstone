import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Recipes() {
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {

    const fetchAllRecipes = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/recipes");
        const result = await response.json();
        console.log(result)
        setRecipeList(result);
      } catch (error) {
        console.error(error)
      }
    }
    fetchAllRecipes()
  }, [])

  return (
    <>
      <div>
        {recipeList.map((recipe) => {
          return (
            <>
              <p>{recipe.name}</p>
              <p>{recipe.difficulty}</p>
              <p>{recipe.recipe_yield}</p>
              <p>{recipe.description}</p>
              <img src={recipe.imgUrl} />

              <div>
                <Link to={`/recipes/${id}`}>
                  <button>
                    See Details
                  </button>
                </Link>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Recipes