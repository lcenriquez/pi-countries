import { useState } from "react";
import { useDispatch } from "react-redux";
import NewActivity from "../../components/Activities/NewActivity/NewActivity";
import { validateName, validateDifficulty, validateDuration } from "../../adapters/validators/newActivity";

export default function Activity() {
  const dispatch = useDispatch();
  const [ input, setInput ] = useState({});
  const [ errors, setErrors ] = useState({});

  function validate(input) {
    let errors = {};
    errors.name = validateName(input.name);
    errors.difficulty = validateDifficulty(input.difficulty);
    errors.duration = validateDuration(input.duration);
    return errors;
  }

  function handleChange(event) {
    event.preventDefault();
    setInput({...input, [event.target.name]: event.target.value});
    setErrors(validate({...input, [event.target.name]: event.target.value}));
  }

  return (
    <NewActivity handleChange={handleChange} errors={errors} />
  );
}