import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Recipes() {
  const [recipeList, setRecipeList] = useState([])
  const [search, setSearch] = useState("")

  const searchResults = recipeList.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
  console.log(searchResults)


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
        <div id="searchbarContainer">
          <input id="searchbar" placeholder="Search Recipes" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        {searchResults.map((recipe) => {
          return (
            <>
              <p>{recipe.name}</p>
              <p>{recipe.difficulty}</p>
              <p>{recipe.recipe_yield}</p>
              <p>{recipe.description}</p>
              <img src={recipe.imgurl} />

              <div>
                <Link to={`/recipes/${recipe.recipe_id}`}>
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