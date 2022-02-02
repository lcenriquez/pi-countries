export default function ShowActivity({ name, difficulty, duration, season, countries }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Difficulty: {difficulty}</p>
      <p>Duration: {duration}</p>
      <p>Season: {season}</p>
      <p>Available in: {countries?.join(', ')}</p>
    </div>
  );
}