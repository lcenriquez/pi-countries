export async function getAllActivities() {
  let activities;
  try {
    activities = await fetch(`${process.env.REACT_APP_API_URL}/activities`);
    activities = activities.json();
  } catch (error) {
    console.log("GET activities Error:", error);
  }
  return activities;
}

export async function createActivity(activity) {
  let createdActivity = await fetch(`${process.env.REACT_APP_API_URL}/activities`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({activity})
  })
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.error(error));
  return createdActivity;
}