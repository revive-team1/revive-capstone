

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
      <br />
      <div>
        <form>
          <input placeholder="Type self care name here..."
            onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>
      
      <div className="selfCare">
        {data.filter((selfCareIdea) => {
          return search.toLowerCase() === '' ? selfCareIdea : selfCareIdea.name.toLowerCase().includes(search)
        }).map((selfCareIdea) => (
          <div key={selfCareIdea.selfCare_id} className="selfCareCard">
            <h3>{selfCareIdea.name}</h3>
            <img src={new URL(`${selfCareIdea.imgURL}`, import.meta.url).href} alt={selfCareIdea.name}></img>
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

