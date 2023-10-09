function parseStringToArray(flavors, delimiter) {
    const resultArray = flavors.split(delimiter);
 
  const countMap = {};

  // Iterate through the array and count the occurrences of each string
  resultArray.forEach(str => {
    if (countMap[str]) {
      countMap[str]++;
    } else {
      countMap[str] = 1;
    }
  });

  // Create an array to store unique strings with their counts
  const uniqueStrings = [];

  // Iterate through the countMap and push unique strings with their counts
  for (const key in countMap) {
    uniqueStrings.push({ string: key, count: countMap[key] });
  }

  return uniqueStrings;
};

const delimiter = ",";


let flavors = prompt("Please enter your froyo flavors.");

let newArray = parseStringToArray(flavors, delimiter);

console.table(newArray);

