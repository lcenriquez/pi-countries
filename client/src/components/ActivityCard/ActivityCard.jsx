import style from './ActivityCard.module.css';

export default function ActivityCard({ name, difficulty, duration, season }) {
  return (
    <div className={style.activityContainer}>
      <h3>{name}</h3>
      <p>Difficulty: {difficulty}</p>
      <p>Duration: {duration}</p>
      <p>Season: {season}</p>
    </div>
  );
}