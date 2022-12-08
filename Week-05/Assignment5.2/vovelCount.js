// Write a function called vowelCount which accepts a string and returns a map where
// the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (myString) => {
  const vowelMap = new Map();
  myString = myString.toLowerCase();

  for (let char in myString) {
    char = myString[char];
    if ("aeiou".includes(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
};

console.log(vowelCount("My name is Paras"));
