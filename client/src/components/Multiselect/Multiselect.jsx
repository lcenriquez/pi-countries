import style from './Multiselect.module.css';

export default function Multiselect({ showOptions, handleChange, handleSelect, selectedOptions, filteredOptions }) {
  return (
    <div>
      <div className={style.selectContainer} onClick={showOptions}>
        <select>
          <option> -- select at least one option -- </option>
        </select>
        <div className={style.optionsContainer}></div>
      </div>
      <div className={style.optionList} id="optionList">
        <label>
        <input type="text" placeholder="Search" onChange={(e) => handleChange(e)} />
        </label>
        {filteredOptions?.map(object => <CheckboxItem key={object.id} name={object.name} id={object.id} handleSelect={handleSelect} selected={selectedOptions.findIndex(option => option.id ===object.id) > -1 ? true : false} />)}
      </div>
    </div>
  );
}

function CheckboxItem({ id, name, handleSelect, selected }) {
  return (
    <label>
      <input type="checkbox" value={name} id={id} onChange={e => handleSelect(e)} defaultChecked={selected} />
      {name}
    </label>
  );
}