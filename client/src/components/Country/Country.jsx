import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../../adapters/api/countries";
import style from './Country.module.css';

export default function Country() {
  const [ country, setCountry ] = useState({});
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getCountry(id).then(country => setCountry(country));
    console.log(country);
  },[]);

  return (
    <div className={style.countryContainer}>
      {country.hasOwnProperty('id') ? <Details {...country} /> : <p>Loading...</p>}
    </div>
  );
}

function Details({ id, name, flag, continent, capital, subregion, population, area }) {
  return (
    <div className={style.countryLayout}>
      <div className={style.leftSidebar}>
        <h1>Things to do in {name}</h1>
      </div>
      <div className={style.rightSidebar}>
        <h1>Country details</h1>
        <img src={flag} alt={name} />
        <table>
          <tr>
            <th>Name:</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Country code:</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>Capital:</th>
            <td>{capital}</td>
          </tr>
          <tr>
            <th>Region/Continent:</th>
            <td>{continent}</td>
          </tr>
          <tr>
            <th>Subregion:</th>
            <td>{subregion}</td>
          </tr>
          <tr>
            <th>Population:</th>
            <td>{population}</td>
          </tr>
          <tr>
            <th>Area:</th>
            <td>{area}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}