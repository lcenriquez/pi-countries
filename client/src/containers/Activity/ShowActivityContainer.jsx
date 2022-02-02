import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowActivity from "../../components/Activities/ShowActivity/ShowActivity";

export default function ShowActivityContainer() {
  const [ activity, setActivity ] = useState({})
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/activities/${id}`)
    .then(response => response.json())
    .then(json => setActivity(json))
    .catch(e => console.error(e));
  },[]);
  
  return (
    <ShowActivity {...activity} />
  );
}