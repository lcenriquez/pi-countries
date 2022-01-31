import { Link } from 'react-router-dom';
import style from './Landing.module.css'

export default function Landing() {
  return (
    <div className={style.landingPageContainer}>
      <div className={style.banner}>
        <h1>Henry Countries</h1>
        <h2>Made by Luis Carlos Enríquez</h2>
        <Link to="/countries">
          <button className={style.cta}>Start</button>
        </Link>
      </div>
    </div>
  );
}