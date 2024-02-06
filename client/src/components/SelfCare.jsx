

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
        {data.selfCare.filter((selfCareIdea) => {
          return search.toLowerCase() === '' ? selfCareIdea : selfCareIdea.name.toLowerCase().includes(search)
        }).map((selfCareIdea) => (
          <div key={selfCareIdea.selfCare_id} className="selfCareCard">
            <h3>{selfCareIdea.name}</h3>
            <br />
            <button onClick={() => {
              navigate(`/selfCare/${selfCareIdea.selfCare_id}`)
            }}>See Details</button>
          </div>
        ))}
      </div>
    </>
  );
};

