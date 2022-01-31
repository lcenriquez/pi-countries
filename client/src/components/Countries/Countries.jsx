import Card from '../Card/Card';
import style from './Countries.module.css';

export default function Countries({countries}) {
  return (
    <div>
      <div className={style.cardsContainer}>
        {countries?.map(country => <Card key={country.id} {...country} />)}
      </div>
    </div>
  );
}