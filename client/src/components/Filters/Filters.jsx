import style from './Filters.module.css';

export default function Filters({ reduxFilters, addFilter, clearFilters }) {
  return (
    <form className={style.filtersContainer}>
      <span>Filters {Object.keys(reduxFilters).length > 0 ? <a onClick={clearFilters}>(clear)</a> : null}</span>
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
          <select name="sort" onChange={(e) => addFilter(e.target.name, e.target.value)} defaultValue={reduxFilters?.sort || ""}>
            <option disabled value=""> -- select an option -- </option>
            <option value="A-Z">Alphabetically (A-Z)</option>
            <option value="Z-A">Alpabetically (Z-A)</option>
            <option value="P-H">By population (highest first)</option>
            <option value="P-L">By population (lowest first)</option>
          </select>
        </div>
        <div className={style.filter}>
          <input type="text" name="country" placeholder="Search by name" onChange={(e) => addFilter(e.target.name, e.target.value)} defaultValue={reduxFilters?.country} />
        </div>
      </div>        
    </form>
  );
}