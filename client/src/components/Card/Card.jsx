import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card({ id, name, flag, continent }) {
  return (
    <Link className={style.cardContainer} to={`/countries/${id}`}>
      <div className={style.title}>
        <h3>{name}</h3>
        <p>{continent}</p>
      </div>
      <img className={style.mainImage} src={flag} alt={name} />
    </Link>
  );
}