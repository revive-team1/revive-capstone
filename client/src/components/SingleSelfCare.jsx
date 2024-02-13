
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SingleSelfCare() {
    const [selfCare, setSelfCare] = useState({})
    const { selfCare_id } = useParams()

    useEffect(() => {
        async function fetchSingleSelfCareIdea() {
            try {
                const response = await fetch(`http://localhost:8080/api/selfCare/${selfCare_id}`);
                const selfCare = await response.json();
                setSelfCare(selfCare)
            } catch (error) {
                console.error('Uh oh, trouble fetching single self care idea!', error);
            }
        }
        fetchSingleSelfCareIdea()
    }, [])

    return (
        <div className='d-flex justify-content-center p-5'>
            <div className="h-50 w-50 singleBackground">
                <h2 className="p-5">{selfCare.name}</h2>
                <img className='p-5 singlePageImg' src={new URL(`${selfCare.imgurl}`, import.meta.url).href} alt={selfCare.name}></img>
                <h5>What to do: {selfCare.description}</h5>
                <br />
                <Link to={selfCare.article_url} target="blank" className="textOnImg">Click here for an article to learn more </Link>
                <br />
                <br />
                <Link to={'/selfCare'} className='btn btn-outline-dark'
                >
                   Back
                </Link>
                <br />
            </div>
        </div>
    );
}
