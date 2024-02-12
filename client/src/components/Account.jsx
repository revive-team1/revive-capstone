import React from 'react'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteExercises from './FavoriteExercises'
import FavoriteRecipes from './FavoriteRecipes'
import Checklist from './Checklist'


export default function Account({ user,favoriteRecipes, setFavoriteRecipes, favoriteExercises, setFavoriteExercises, setUser }) {
  const navigate = useNavigate();

  return (
    <>
    <div className="userInfo">
      <h2 className="welcomeMessage">Welcome, {`${user.firstname}`}!</h2>
     <br/>
      <h2 className="accountHeading">Account Information:</h2>
      <div className="accountDetails">
        <span>Name: {user.firstname} {user.lastname}</span><br />
        <span>Username: {user.username}</span><br/> <br/>
      </div>
      <br/>

      <FavoriteExercises favoriteExercises= {favoriteExercises} setFavoriteExercises={setFavoriteExercises} user ={user} setUser = {setUser}/>
      <FavoriteRecipes user={user} setUser = {setUser} favoriteRecipes = {favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/>
    </div>
    <div>{<Checklist />}</div>
    </>
  );
};