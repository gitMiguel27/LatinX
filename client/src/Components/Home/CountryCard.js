import React from "react";
import './CountryCard.css';
import { useNavigate } from 'react-router-dom';

function CountryCard({ country }) {
    let navigate = useNavigate();

    function countryClick(event) {
        console.log(event.target.innerText);
    };

    return (
        <div className="country-card">
            <img src={country.image} alt={country.name} className="flags"/>
            <button className="country-title" onClick={countryClick}>{country.name}</button>
        </div>
    )
}

export default CountryCard;