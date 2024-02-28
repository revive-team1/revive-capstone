
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import FavoriteSelfCareButton from "./FavoriteSelfCareButton";

export default function SingleSelfCare({ user_id }) {
    const [selfCare, setSelfCare] = useState({})
    const { selfCare_id } = useParams()


    const token = useSelector((it) => it.actionsSlice.token)

    useEffect(() => {
        async function fetchSingleSelfCareIdea() {
            try {
                // const response = await fetch(`http://localhost:8080/api/selfCare/${selfCare_id}`);
                const response = await fetch(`https://revive-capstone.onrender.com/api/selfCare/${selfCare_id}`);
                const selfCare = await response.json();
                setSelfCare(selfCare)
            } catch (error) {
                console.error('Uh oh, trouble fetching single self care idea!', error);
            }
        }
        fetchSingleSelfCareIdea()
    }, [])

    return (

        <div className="p-5">
            <h2>{selfCare.name}</h2>
            <p>{selfCare.description}</p>
            <img className='singlePageImg' src={new URL(`${selfCare.imgurl}`, import.meta.url).href} alt={selfCare.name}></img>
            <br />
            <Link to={selfCare.article_url} target="blank">Click here for an article to learn more </Link>
            <br />
            <br />
            {(!token) ? (
                <>
                    <button className='btn btn-outline-dark' type='button' role='button'><Link to='/login'>Login to Add Self Care to Checklist</Link></button>
                </>
            ) : (
                <>
                    <FavoriteSelfCareButton user_id={user_id} selfCare_id = {selfCare.selfcare_id} />
                </>
            )}
            <br />
            <br />
            <Link className='btn btn-outline-dark' to={'/selfCare'}>Back to all Self Care Ideas</Link>
            <br />
        </div>
    );
}
