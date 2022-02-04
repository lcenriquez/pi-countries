import ActivityCard from "../Cards/ActivityCard";
import style from './Country.module.css';

export default function Country({ id, name, flag, continent, capital, subregion, population, area, activities }) {
  return (
    
    <div className={style.countryLayout}>
      <div className={style.leftSidebar}>
        <h1>Things to do in {name}</h1>
        <div className={style.activitiesContainer}>
          {activities?.map(activity => <ActivityCard key={activity.id} {...activity} />)}
        </div>
      </div>
      <div className={style.rightSidebar}>
        <h1>Country details</h1>
        <img src={flag} alt={name} />
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Country code:</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>Capital:</th>
              <td>{capital}</td>
            </tr>
            <tr>
              <th>Region/Continent:</th>
              <td>{continent}</td>
            </tr>
            <tr>
              <th>Subregion:</th>
              <td>{subregion}</td>
            </tr>
            <tr>
              <th>Population:</th>
              <td>{population.toLocaleString()}</td>
            </tr>
            <tr>
              <th>Area:</th>
              <td>{area.toLocaleString()} km<sup>2</sup></td>
            </tr>  
          </tbody>
          
        </table>
      </div>
    </div>
  );
}