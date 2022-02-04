import MultiSelectContainer from '../../containers/MultiSelect/MultiselectContainer';
import style from './NewActivity.module.css';

export default function NewActivity({ options, handleChange, handleSubmit, errors, selectedOptions, setSelectedOptions }) {
  return (
    <div className="container">
      <h1>New activity</h1>
      <form className={style.newActivityForm} onSubmit={e => handleSubmit(e)}>
        <div className={style.field}>
          <label htmlFor="name">Activity name</label>
          <input id="name" type="text" name="name" placeholder="Activity name" onChange={(e) => handleChange(e)} />
          <small>{errors.name?.join(' ')}&nbsp;</small>
        </div>
        <div className={style.field}>
          <label htmlFor="duration">Duration</label>
          <input type="text" name="duration" placeholder="Duration (minutes)" onChange={(e) => handleChange(e)} />
          <small>{errors.duration?.join(' ')}&nbsp;</small>
        </div>
        <div className={style.field}>
          <label htmlFor="difficulty">Difficulty</label>
          <input type="text" name="difficulty" placeholder="A number from 1-5 where 1 is the easiest and 5 is the hardest" onChange={(e) => handleChange(e)} />
          <small>{errors.difficulty?.join(' ')}&nbsp;</small>
        </div>
        <div className={style.field}>
          <label htmlFor="season">Season</label>
          <select name="season" onChange={(e) => handleChange(e)}>
            <option disabled value="" selected> -- select an option -- </option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
          </select>
          <small>{errors.season?.join(' ')}&nbsp;</small>
        </div>
        <div className={style.field}>
          <label>Countries</label>
          <MultiSelectContainer options={options} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
          <small>{errors.countries?.join(' ')}&nbsp;</small>
        </div>
        <div className={style.field}>
          <button id="submitActivity" type="submit" disabled className="disabledButton">Submit</button>
        </div>
        All fields are required.
      </form>
    </div>
  );
}