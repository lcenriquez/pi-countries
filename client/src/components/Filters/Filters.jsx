import style from './Filters.module.css';

export default function Filters() {
  return (
    <form className={style.filtersContainer}>
      <span>Filters</span>
      <div className={style.actualFilters}>
        <div className={style.filter}>
          <label>Activities</label>
          <select name="activities">
            <option value="value1">Ski</option>
            <option value="value2">Diving</option>
            <option value="value3">Hiking</option>
            <option value="value3">Coulinary</option>
          </select>
        </div>
        <div className={style.filter}>
          <label>Continents</label>
          <select name="continents">
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="NA">North America</option>
            <option value="SA">South America</option>
          </select>
        </div>
        <div className={style.filter}>
          <label>Sort</label>
          <select name="sortBy">
            <option value="A-Z">Alphabetically (A-Z)</option>
            <option value="Z-A">Alpabetically (Z-A)</option>
            <option value="P-H">By population (highest first)</option>
            <option value="P-L">By population (lowest first)</option>
          </select>
        </div>
        <div className={style.filter}>
          <input type="text" name="country" placeholder="Search by name" />
        </div>
      </div>        
    </form>
  );
}