import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleRecipe() {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()

  useEffect(() => {

    const fetchSingleRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/recipes/${id}`);
        const result = await response.json();
        console.log(result)
        setRecipe(result);
      } catch (error) {
        console.error(error)
      }
    }
    fetchSingleRecipe()
  }, [id])


  return (
    <>

      <div className='button'>
        <Link to="/recipes">
          <button className='backButton'>Back</button>
        </Link>
      </div>


      <p>{recipe.name}</p>
      <p>{recipe.difficulty}</p>
      <p>{"yield: "(recipe.recipe_yield)}</p>
      <p>{recipe.description}</p>
      <img src={recipe.imgUrl} />

    </>
  )
}

export default SingleRecipe