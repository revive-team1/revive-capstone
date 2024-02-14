import React from 'react'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteExercises from './FavoriteExercises'
import FavoriteRecipes from './FavoriteRecipes'
import SelfCareChecklist from './SelfCareChecklist'

export default function Account({ user,favoriteRecipes, setFavoriteRecipes, favoriteExercises, setFavoriteExercises, setUser }) {
  const navigate = useNavigate();

  return (
    <>
    <div className="userInfo">
      <br/>
      <h1 className="welcomeMessage">Welcome, {`${user.firstname}`}!</h1>
     <br/>
      <h2 className="accountHeading">Account Information</h2>
      <div className="breakLine"></div>
      
      <div className="accountDetails">
        <br/>
        <span>Name: {user.firstname} {user.lastname}</span><br />
        <span>Username: {user.username}</span><br/> <br/>
      </div>
      <br/>

      <div className="favoritesCard"><FavoriteExercises favoriteExercises= {favoriteExercises} setFavoriteExercises={setFavoriteExercises} user ={user} setUser = {setUser}/> </div>
      <div className="favoritesCard"><FavoriteRecipes user={user} setUser = {setUser} favoriteRecipes = {favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/> </div>
    </div>
    <div className="selfCareChecklist">{<SelfCareChecklist />}</div>
    </>
  );
};