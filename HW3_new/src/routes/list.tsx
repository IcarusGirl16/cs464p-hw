import Root from './root';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function List() {
  const [countries, setCountry] = useState([]);
  const url = 'https://cs464p564-frontend-api.vercel.app/api/countries';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.error('Request Failed', error);
      });
  }, []);

  return (
    <>
      <Root />
      <main id='list' className='mt-20 p-4'>
        <h1>List of Countries</h1>
        <p>This page lists the countries of South America, their flags, and info.</p>
        <div id="results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      </main>
    </>
  );
}

function CountryCard ({country}) {
  return (
  <section className="country border p-4 m-4 rounded shadow-md flex flex-col items-center">
    <p className="name font-bold text-lg">{country.name}</p>
    <img className="flag w-32 h-20 object-cover my-2" src={country.flag_png} alt={country.flag_alt} />
    <p className="pop">Population: {country.population}</p>
    <p className="gdp">GDP in Billions: {country.gdp_billions}</p>
  </section>
  );
}