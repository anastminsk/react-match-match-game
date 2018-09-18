const data = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

export const createNewValues = (difficulty) => {
  let results;
  if (difficulty === '8x4') {
    results = duplicateData(data, 32);
    results = shuffle(results);
    return results;
  } else if (difficulty === '6x3') {
    results = duplicateData(data, 18);
    results = shuffle(results);
    return results;
  } else {
    results = duplicateData(data, 8);
    results = shuffle(results);
    return results;
  }
}

// shuffles elements of an array
const shuffle = (arr) => {
  let results = arr.slice(0);
  let i = results.length;
  let randomIndex, temp;
  while (i > 0) {
    randomIndex = Math.floor(Math.random() * i);
    temp = results[randomIndex];
    results[randomIndex] = results[i - 1];
    results[i - 1] = temp;
    i--;
  }
  return results;
}

// creates an array with elements containing pairs
const duplicateData = (arr, length) => {
  let results = [];
  for (let i = 0; i < (length / 2); i++) {
    results.push(arr[i]);
    results.push(arr[i]);
  }
  return results;
}
