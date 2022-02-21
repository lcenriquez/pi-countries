import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountry } from "../../adapters/api/countries";
import Country from "../../components/Countries/Country";

export default function CountryContainer() {
  const [ country, setCountry ] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  let id = params.id;

  useEffect(() => {
    getCountry(id).then(country => {
      if (country.hasOwnProperty('id')) {
        setCountry(country);
      } else {
        navigate('/not-found');
      }
    });
  },[id, navigate]);

  return (
    <div className="container">
      {country.hasOwnProperty('id') ? <Country {...country} /> : <p>Loading...</p>}
    </div>
  );
}