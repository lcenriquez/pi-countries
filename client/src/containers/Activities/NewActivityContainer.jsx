import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewActivity from "../../components/Activities/NewActivity";
import { createActivity } from "../../adapters/api/activities";
import { getActivities, getCountries } from "../../redux/actions";
import { validateName, validateDifficulty, validateDuration, validatePresence } from "../../adapters/validators/newActivity";

export default function NewActivityContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [ input, setInput ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ selectedOptions, setSelectedOptions ] = useState([]);
  const reduxCountries = useSelector(state => state.countries)
  let errorCount = 0;
  
  useEffect(() => {
    // On page load
    if (reduxCountries.length === 0) dispatch(getCountries());
  },[]);

  useEffect(() => {
    Object.values(errors).forEach(error => error.length > 0 ? errorCount += 1 : null)
    // console.log("ERROR COUNT:", errorCount);
    let button = document.querySelector("#submitActivity");
    if (button && Object.keys(input).length === 5 && errorCount === 0) {
      button.classList.remove('disabledButton');
      button.removeAttribute('disabled');
    } else {
      button.classList.add('disabledButton');
      button.setAttribute('disabled', 'true');
    }
  },[errors]);

  useEffect(() => {
    let countryIds;
    if (selectedOptions.length > 0) {
      countryIds = selectedOptions.map(country => country.id)
      setErrors({...errors, countries: []});
    } else {
      setErrors({...errors, countries: ['At least one country must be selected']})
    }
    setInput({...input, countries: countryIds})
  },[selectedOptions])

  function validate(input) {
    let errors = {};
    errors.name = validateName(input.name);
    errors.difficulty = validateDifficulty(input.difficulty);
    errors.duration = validateDuration(input.duration);
    errors.seasion = validatePresence(input.season);
    // Additional check for countries field
    if (selectedOptions.length === 0) errors.countries = ['At least one country must be selected'];
    return errors;
  }

  function handleChange(event) {
    event.preventDefault();
    setInput({...input, [event.target.name]: event.target.value});
    setErrors(validate({...input, [event.target.name]: event.target.value}));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(input).length === 5 && errorCount === 0) {
      setInput({});
      setErrors({});
      setSelectedOptions([]);
      createActivity(input).then(activity => {
        dispatch(getActivities());
        navigate(`/activities/${activity.id}`)
      });
    }
  }

  return (
    <NewActivity handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} options={reduxCountries} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
  );
}