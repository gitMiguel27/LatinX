import './Home.css';
import React, { useState, useEffect } from "react";
import CountryList from "./CountryList";

function Home () {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        fetch("/countries")
        .then(resp => resp.json())
        .then(countries => {
            // console.log(countries);
            setCountries(countries);
        });
    }, []);

    return (
        <div className="home">
            <CountryList countries={countries} />
        </div>
    )
}

export default Home;