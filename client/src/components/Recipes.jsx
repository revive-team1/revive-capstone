import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import photo5 from '../assets/photo5.png'

function Recipes() {
  const [recipeList, setRecipeList] = useState([])
  const [search, setSearch] = useState("")

  const searchResults = recipeList.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
  console.log(searchResults)


  useEffect(() => {

    const fetchAllRecipes = async () => {
      try {
        // const response = await fetch("http://localhost:8080/api/recipes");
        const response = await fetch("https://revive-capstone.onrender.com/api/recipes");
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
      <div id='spotlight' className='border-none p-5 m-5'>
        <div className='d-flex justify-content-center'>
          <h1 className='m-4 '>Chef Spotlight</h1>
        </div>
        <div className='longBreakLine'></div>
        <br></br>
        <div className='d-flex flex-wrap justify-content-center'>
          <button className='btn btn-light m-1'>
            <a href='https://www.tiktok.com/@theiranianvegan/video/7319620575515872544?_r=1&_t=8kD7VuPsssJ' target='blank' className='nav-link'>tiktok</a>
          </button>
          <button className='btn btn-light m-1'>
            <a href='https://www.tiktok.com/@jenneatsgoood/video/7195764885920288046?lang=en' target='blank' className='nav-link'>tiktok</a>
          </button>
          <button className='btn btn-light m-1'>
            <a href='https://www.tiktok.com/@thekoreanvegan/video/7294337410471628075?_r=1&_t=8kD7Wp7howI' target='blank' className='nav-link'>tiktok</a>
          </button>
          <br />
        </div>
        <br></br>
        <img className="accountPhoto" src={photo5}></img> <br />
        <br></br>
        <h2 className='fw-light'>Recipe Library</h2>
        <div className='d-flex justify-content-center'>
          <input className='form-control w-75 text-center' id="searchbar" placeholder="Search Recipes..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div>
        
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center'>
          {searchResults.map((recipe) => {
            return (
              <>
                <div className='card p-3 m-5'>
                  <div>
                    <img src={recipe.imgurl} alt={recipe.name} className='card-img-top' height={'400px'} />
                    <div className='card-body'>
                      <h4 className='card-title'>{recipe.name}</h4>
                      {/* <p>Difficulty: {recipe.difficulty}</p> */}
                      {/* <p>Serves {recipe.recipe_yield}</p> */}
                      {/* <p>{recipe.description}</p> */}

                      <div className='p-3 m-3'>
                      <div className='foodButton'>
                        <Link to={`/recipes/${recipe.recipe_id}`} className='btn btn-outline-dark'>
                          See Details
                        </Link>
                      </div>
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