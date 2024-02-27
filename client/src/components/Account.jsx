import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteWorkoutExercises from './FavoriteWorkoutExercises'
import FavoriteRecipes from './FavoriteRecipes'
import SelfCareChecklist from './SelfCareChecklist'
import AccountSchedule from './AccountSchedule'

export default function Account({ todaysAppointments, setTodaysAppointments, user, favoriteRecipes, setFavoriteRecipes, favoriteWorkoutExercises, setFavoriteWorkoutExercises, setUser, favoriteSelfCare, setFavoriteSelfCare }) {

  const navigate = useNavigate();
  console.log(user)

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
        <span>Username: {user.username}</span><br/> 
      </div>
      <div ><AccountSchedule todaysAppointments={todaysAppointments} setTodaysAppointments={setTodaysAppointments} user={user} user_id={user.user_id}/> </div>
      <div className="favoritesCard"><FavoriteWorkoutExercises favoriteWorkoutExercises= {favoriteWorkoutExercises} setFavoriteWorkoutExercises={setFavoriteWorkoutExercises} user ={user} setUser = {setUser}/> </div>
      <div className="favoritesCard"><FavoriteRecipes user={user} setUser = {setUser} favoriteRecipes = {favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/> </div>
    </div>
    <div className="selfCareChecklist">{<SelfCareChecklist user={user} setUser = {setUser} favoriteSelfCare={favoriteSelfCare} setFavoriteSelfCare={setFavoriteSelfCare}/>}</div>
    </>
  );
};