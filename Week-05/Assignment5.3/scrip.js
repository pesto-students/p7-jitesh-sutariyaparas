// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (myArray) => {
  const hasDuplicate = (arr) => new Set(myArray).size !== myArray.length;
  return hasDuplicate;
};

console.log(hasDuplicate([1, 3, -3, 5, 6, 7]));

console.log(hasDuplicate([1, 3, -3, 7, 5, 6, 7, 7]));
