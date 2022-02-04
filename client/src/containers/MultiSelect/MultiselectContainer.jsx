import { useState } from "react";
import { search } from '../../adapters/filter';
import Multiselect from "../../components/Multiselect/Multiselect";

export default function MultiSelectContainer({ options, selectedOptions, setSelectedOptions }) {
  const [ filteredOptions, setFilteredOptions ] = useState([]);

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
    let selectedObject = {id: event.target.id, name: event.target.value};
    if (event.target.checked) {
      let objectExists = selectedOptions.findIndex(option => option.id === selectedObject.id) > -1 ? true : false;
      if (!objectExists) setSelectedOptions([...selectedOptions, selectedObject]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option.id !== selectedObject.id));
    }
  }

  return (
    <div>
      <Multiselect showOptions={showOptions} handleChange={handleChange} handleSelect={handleSelect} selectedOptions={selectedOptions} filteredOptions={filteredOptions} />
    </div>
  );
}