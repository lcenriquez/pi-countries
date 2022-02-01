import { useState } from 'react';
import { search } from '../../adapters/filter';
import style from './Multiselect.module.css';

export default function Multiselect({ options }) {
  const [ filteredOptions, setFilteredOptions ] = useState([]);
  const [ selectedOptions, setSelectedOptions ] = useState([]);

  let visible = false;
  function showOptions() {
    let checkboxes = document.querySelector('#optionList');
    if (!visible) {
      checkboxes.style.display = "block";
      visible = true;
    } else {
      checkboxes.style.display = "none";
      visible = false;
    }
  }

  function handleChange(event) {
    event.preventDefault();
    if (event.target.value.length > 1) setFilteredOptions(search(options, event.target.value));
  }

  function handleSelect(event) {
    let selectedObject = {id: event.target.id, name: event.target.name};
    if (event.target.checked) {
      let objectExists = selectedOptions.findIndex(option => option.id === selectedObject.id) > -1 ? true : false;
      if (!objectExists) setSelectedOptions([...selectedOptions, selectedObject]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option.id !== selectedObject.id));
    }
  }

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
      <input type="checkbox" name={name} id={id} onChange={e => handleSelect(e)} defaultChecked={selected} />
      {name}
    </label>
  );
}