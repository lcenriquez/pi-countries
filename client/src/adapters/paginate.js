export function paginate(array) {
  let currentPosition = 0;
  let paginatedArray = [];
  while (currentPosition < array.length) {
    if (currentPosition === 0) {
      // Set first page items
      paginatedArray.push(array.slice(currentPosition,9));
      currentPosition = 9;
    } else {
      // Set items for every other page
      paginatedArray.push(array.slice(currentPosition,currentPosition + 10));
      currentPosition += 10;
    }
  }
  // console.log(paginatedArray);
  return paginatedArray;
}