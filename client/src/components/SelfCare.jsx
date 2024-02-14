
import React from "react";
import { useGetSelfCareQuery } from "../api/fetching";
import { useNavigate } from "react-router-dom";
import { useState } from "react"

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
      <div id='spotlight' className='border border-3 border-black rounded-4 p-5 m-5'>
        <h1 className='m-4'>Self Care Spotlight</h1>
        <div className='d-flex flex-wrap'>
          <a href='https://www.youtube.com/watch?v=nun1hwBNdm0' className='border border-3 border-black rounded-2 p-2 m-3' target="blank">Self Care Do's & Don'ts</a>
          <a href='https://www.youtube.com/watch?v=Mqqxi8mt4t0' className='border border-3 border-black rounded-2 p-2 m-3' target="blank">Small Ways to Practice Self-Care in Difficult Times</a>
          <a href='https://www.youtube.com/watch?v=q5viyKoCikI' className='border border-3 border-black rounded-2 p-2 m-3' target="blank">What is self-care and why is it important?</a>
        </div>
      </div>
      <br />
      <div>
        <form>
          <input placeholder="Search self care here..."
            onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>

      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center'>
        {data.filter((selfCareIdea) => {
          return search.toLowerCase() === '' ? selfCareIdea : selfCareIdea.name.toLowerCase().includes(search)
        }).map((selfCareIdea) => (
          <div key={selfCareIdea.selfcare_id} className='border border-3 border-black rounded-4 p-3 m-5' id="selfCareCard">
            <h3>{selfCareIdea.name}</h3>
            <img className='selfCareimg' src={new URL(`${selfCareIdea.imgurl}`, import.meta.url).href} alt={selfCareIdea.name}></img>
            <br />
            <button onClick={() => {
              navigate(`/selfCare/${selfCareIdea.selfcare_id}`)
            }}>See Details</button>
          </div>
        ))}
      </div>
    </>
  );
};

