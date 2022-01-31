import style from './Filters.module.css';

export default function Filters() {
  return (
    <form className={style.filtersContainer}>
      <span>Filters</span>
      <div className={style.actualFilters}>
        <div className={style.filter}>
          <label>Activities</label>
          <select>
            <option value="value1">Ski</option>
            <option value="value2">Diving</option>
            <option value="value3">Hiking</option>
            <option value="value3">Coulinary</option>
          </select>
        </div>
        <div className={style.filter}>
          <label>Continents</label>
          <select>
            <option value="value1">Asia</option>
            <option value="value2">Oceania</option>
            <option value="value3">North America</option>
            <option value="value3">South America</option>
          </select>
        </div>
        <div className={style.filter}>
          <label>Sort</label>
          <select>
            <option value="value1">Alphabetically (A-Z)</option>
            <option value="value2">Alpabetically (Z-A)</option>
            <option value="value3">By population (greatest first)</option>
            <option value="value3">By population (lowest first)</option>
          </select>
        </div>
        <div className={style.filter}>
          <input type="text" placeholder="Search by name" />
        </div>
      </div>        
    </form>
  );
}