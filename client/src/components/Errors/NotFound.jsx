import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={style.centeredContainer}>
      <h1>Not found</h1>
      <h2>The page you're looking for does not exist</h2>
      <Link to="/countries"><p>Go back</p></Link>
    </div>
  );
}