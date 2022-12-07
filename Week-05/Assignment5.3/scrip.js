// Write a function called has Duplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (myArray) => {
  let setArray = new Set(myArray);
  if (setArray.size == myArray.length) {
    return false;
  } else {
    return true;
  }
};

console.log(hasDuplicate([1, 3, -3, 5, 6, 7]));

console.log(hasDuplicate([1, 3, -3, 7, 5, 6, 7, 7]));
