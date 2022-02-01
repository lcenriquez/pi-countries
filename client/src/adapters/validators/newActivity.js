function validateName(input) {
  let errors = [];
  let regEx = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  if (input === "") errors.push("Activity name can't be blank.");
  if (input && input.length < 2) errors.push("Activity name must have at least 2 characters.");
  if (input && !regEx.test(input)) errors.push("Activity name must be a string.");
  return errors;
}

function validateDifficulty(input) {
  let errors = [];
  if (input === "") errors.push("Difficulty can't be blank.");
  input = +input; // Convert string to number
  if (input && (isNaN(input) || input < 1 || input > 5)) {
    // Validate if input is a number is between 1 and 5
    errors.push("Difficulty must be a number between 1 and 5.");
  }
  return errors;
}

function validateDuration(input) {
  let errors = [];
  if (input === "") errors.push("Difficulty can't be blank.");
  input = +input; // Convert string to number
  if (input && (isNaN(input) || input < 1 || input > 90)) {
    // Validate if input is a number is between 1 and 5
    errors.push("Duration must be at least 1 minute and at most 90 minutes.");
  }
  return errors;
}

module.exports = {
  validateName,
  validateDifficulty,
  validateDuration
}