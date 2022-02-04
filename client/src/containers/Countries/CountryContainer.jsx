import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../../adapters/api/countries";
import Country from "../../components/Countries/Country";

export default function CountryContainer() {
  const [ country, setCountry ] = useState({});
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    getCountry(id).then(country => setCountry(country));
  },[]);

  return (
    <div className="container">
      {country.hasOwnProperty('id') ? <Country {...country} /> : <p>Loading...</p>}
    </div>
  );
}