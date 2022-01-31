import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={style.navContainer}>
      <Link to="/countries"><h4>Henry Countries</h4></Link>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
      </ul>
    </nav>
  );
}