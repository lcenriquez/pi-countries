import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../Filters/Filters';
import Card from '../Card/Card';
import { getAllCountries } from '../../adapters/api/countries';
import { addCountries } from '../../redux/actions';
import style from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);

  useEffect(() => {
    if (countries.length === 0) getAllCountries().then(countries => dispatch(addCountries(countries)));
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