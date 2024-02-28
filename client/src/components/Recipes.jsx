import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import photo3 from '../assets/photo3.png'
import RecipesBackgroundTemp from '../assets/RecipesBackgroundTemp.jpg'


function Recipes() {
  const [recipeList, setRecipeList] = useState([])
  const [search, setSearch] = useState("")

  const searchResults = recipeList.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
  console.log(searchResults)


  useEffect(() => {

    const fetchAllRecipes = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/recipes");
        // const response = await fetch("https://revive-capstone.onrender.com/api/recipes");
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
      <div className='card bg-none text-black p-0 m-1'>
        <img src={RecipesBackgroundTemp} alt='cutting board with food' className='card-img img-responsive' width={'400px'} height={'350px'}></img>
        <div className='card-img-overlay d-flex justify-content-center'>
          <div className='row'>
            <div>
              <h1 className='card-title m-4'>Chef Spotlight</h1>
              <button className='btn btn-light m-1'>
                <a href='www.tiktok.com' target='blank' className='nav-link'>tiktok</a>
              </button>
              <button className='btn btn-light m-1'>
                <a href='www.tiktok.com' target='blank' className='nav-link'>tiktok</a>
              </button>
              <button className='btn btn-light m-1'>
                <a href='www.tiktok.com' target='blank' className='nav-link'>tiktok</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img className="accountPhoto" src={photo3}></img> <br/> <br/>
      <div>
        <div>
          <h2 className='fw-light'>Recipe Library</h2>
        </div>
        <div className='d-flex justify-content-center'>
          <input className='form-control w-25 text-center' id="searchbar" placeholder="Search Recipes..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>



        <div className='row'>
          {searchResults.map((recipe) => {
            return (
              <>
                <div className='col-md-6'>
                  <div className='card m-3'>
                    <img src={recipe.imgurl} alt={recipe.name} className='card-img-top' height={'500px'} />
                    <div className='card-body'>
                      <h3 className='card-title'>{recipe.name}</h3>
                      {/* <p>Difficulty: {recipe.difficulty}</p> */}
                      {/* <p>Serves {recipe.recipe_yield}</p> */}
                      {/* <p>{recipe.description}</p> */}

                      <div className='p-3 m-3'>

                        <Link to={`/recipes/${recipe.recipe_id}`} className='btn btn-outline-dark'>
                          See Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Recipes