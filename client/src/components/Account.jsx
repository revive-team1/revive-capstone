import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import FavoriteWorkoutExercises from './FavoriteWorkoutExercises'
import FavoriteRecipes from './FavoriteRecipes'
import SelfCareChecklist from './SelfCareChecklist'
import AccountSchedule from './AccountSchedule'
import photo8 from '../assets/photo8.png'

export default function Account({ todaysAppointments, setTodaysAppointments, user, favoriteRecipes, setFavoriteRecipes, favoriteWorkoutExercises, setFavoriteWorkoutExercises, setUser, favoriteSelfCare, setFavoriteSelfCare }) {
  const navigate = useNavigate()
  return (
    <>
    <div className="accountPage">
    <div className="userInfo">
      <br/> <br/> <br/> <br/>
    <h1 className='m-4'>Account</h1>
    <div className="longBreakLine"></div>
      <br/> <br/>
      <h1 className="welcomeMessage">Welcome, {`${user.firstname}`}!</h1>
      <div className="accountDetails">
        <br/>
        <span>Name: {user.firstname} {user.lastname}</span><br />
        <span>Username: {user.username}</span><br/> 
      
      </div>
      
      <br/> <br/>
      <div className="photo">
      <img className="accountPhoto" src={photo8}></img> <br/> <br/>
      </div>

      <div ><AccountSchedule todaysAppointments={todaysAppointments} setTodaysAppointments={setTodaysAppointments} user={user} user_id={user.user_id}/> </div>
      <div className="favoritesCard"><FavoriteWorkoutExercises favoriteWorkoutExercises= {favoriteWorkoutExercises} setFavoriteWorkoutExercises={setFavoriteWorkoutExercises} user ={user} setUser = {setUser}/> </div>
      <div className="favoritesCard"><FavoriteRecipes user={user} setUser = {setUser} favoriteRecipes = {favoriteRecipes} setFavoriteRecipes={setFavoriteRecipes}/> </div>
    </div>
    <div className="selfCareChecklist">{<SelfCareChecklist user={user} setUser = {setUser} favoriteSelfCare={favoriteSelfCare} setFavoriteSelfCare={setFavoriteSelfCare}/>}</div>
    </div>
    <div>
        <button className='btn btn-outline-dark justify-content-center' onClick={() => navigate(`/selfcare`)}>Explore Self-Care Ideas</button> 
    </div>

    <br/> <br/> <br/> <br/> <br/>
    </>
  );
};