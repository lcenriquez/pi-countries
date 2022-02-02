import { Link } from 'react-router-dom';

export default function ShowActivity({ name, difficulty, duration, season, countries }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Difficulty: {difficulty}</p>
      <p>Duration: {duration}</p>
      <p>Season: {season}</p>
      Available in:
      <ul>{countries?.map(c => <li><Link to={`/countries/${c.id}`}>{c.name}</Link></li>)}</ul>
    </div>
  );
}