import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Activity() {
  const dispatch = useDispatch();
  const [ input, setInput ] = useState({});
  const [ errors, setErrors ] = useState({});

  function handleChange(event) {
    event.preventDefault();
    setInput({...input, [event.target.name]: event.target.value})
  }

  return (
    <div className="container">
      <h1>New activity</h1>
      <form>
        <input type="text" name="name" placeholder="Activity name" onChange={(e) => handleChange(e)} />
        <input type="text" name="duration" placeholder="Duration (mins)" onChange={(e) => handleChange(e)} />
        <input type="text" name="difficulty" placeholder="Difficulty" onChange={(e) => handleChange(e)} />
        <select name="season" onChange={(e) => handleChange(e)}>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
        </select>
        Available in:
      </form>
    </div>
  );
}