import { useEffect, useState } from 'react';
import Filters from '../Filters/Filters';
import Card from '../Card/Card';
import { getAllCountries } from '../../adapters/api/countries';
import style from './Home.module.css';

export default function Home() {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    getAllCountries().then(countries => setCountries(countries));
  },[]);

  return (
    <div>
      <Filters />
      <div className={style.cardsContainer}>
        {countries?.map(country => <Card key={country.id} {...country} />)}
      </div>
    </div>
  );
}