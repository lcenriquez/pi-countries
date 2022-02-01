import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={style.navContainer}>
      <Link to="/countries"><h4>Henry Countries</h4></Link>
      <ul>
      <li><Link to='/activities'>Activities</Link></li>
      <li><Link to='/activities/new'>Create activity</Link></li>
      </ul>
    </nav>
  );
}