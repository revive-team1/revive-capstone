
import React from "react";
import { useGetSelfCareQuery } from "../api/fetching";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import photo13 from '../assets/photo13.png'

export default function SelfCare() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const { data = {}, error, isLoading } = useGetSelfCareQuery();

  if (isLoading) {
    return <div className={data.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={data.error}>Error: {error.message}</div>;
  }

  return (
    <>
      <div id='spotlight' className='border-none p-5 m-5'>
        <div className='d-flex justify-content-center'>
        <h1 className='m-4'>Self Care Spotlight</h1>
        </div>
        <div className="longBreakLine"></div>
        <br></br>
        <div className='d-flex flex-wrap justify-content-center'>
        <button className='btn btn-light m-1'>
            <a href='https://www.youtube.com/watch?v=nun1hwBNdm0' className='nav-link' target="blank">Self Care Do's & Don'ts</a>
          </button>
          <button className='btn btn-light m-1'>
            <a href='https://www.youtube.com/watch?v=Mqqxi8mt4t0' className='nav-link' target="blank">Small Ways to Practice Self-Care in Difficult Times</a>
          </button>
          <button className='btn btn-light m-1'>
            <a href='https://www.youtube.com/watch?v=q5viyKoCikI' className='nav-link' target="blank">What is self-care and why is it important?</a>
          </button>
          <br></br>
        </div>
        <br></br>
        <img className="accountPhoto" src={photo13} alt='bowls with brush'></img> <br/>
        <br></br>
        <h2 className='d-flex justify-content-center fw-light'>Self Care Library</h2>
        <br></br>
        <form className='d-flex justify-content-center'>
          <input className='form-control w-75 text-center' placeholder="Search activities..."
            onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>    
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center'>
        {data.filter((selfCareIdea) => {
          return search.toLowerCase() === '' ? selfCareIdea : selfCareIdea.name.toLowerCase().includes(search)
        }).map((selfCareIdea) => (
          <div key={selfCareIdea.selfcare_id} className='card p-3 m-5' id="selfCareCard">
            <h3>{selfCareIdea.name}</h3>
            <img className='justify-content-center align-items-center' src={new URL(`${selfCareIdea.imgurl}`, import.meta.url).href} alt={selfCareIdea.name}></img>
            <br />
            <br />
            <div className='selfCareButton'>
            <button className='btn btn-outline-dark' onClick={() => {
              navigate(`/selfCare/${selfCareIdea.selfcare_id}`)
            }}>See Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

