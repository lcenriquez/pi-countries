import CountryCard from '../Cards/CountryCard';
import style from './Countries.module.css';

export default function Countries({countries}) {
  return (
    <div>
      <div className={style.cardsContainer}>
        {countries?.map(country => <CountryCard key={country.id} {...country} />)}
      </div>
    </div>
  );
}