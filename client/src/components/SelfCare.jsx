
import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore } from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";
import { useState } from "react"


const selfCareApi = createApi({
  reducerPath: "selfCare",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080/api`,
    prepareHeaders(headers) {
      headers.set('Content-type', 'application/json'); 
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/selfCare`,
    }),
  }),
});


const { useGetSelfCareQuery } = selfCareApi;

export const store = configureStore({
  reducer: {
    [selfCareApi.reducerPath]: selfCareApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(selfCareApi.middleware), 
});

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