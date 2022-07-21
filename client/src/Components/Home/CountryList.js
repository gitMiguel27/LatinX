import './CountryList.css';
import React from "react";
import CountryCard from "./CountryCard";

function CountryList({ countries }) {
    return (
        <div className="country-list">
            {countries.map(country => {
                return <CountryCard key={country.id} country={country} />
            } )}
        </div>
    )
}

export default CountryList;