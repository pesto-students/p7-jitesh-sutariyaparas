// Problem 6.5: Pair With Given Difference

const pairDiff = (array, diff) => {
  for (let i = 0; i <= array.length; i++) {
    console.log(array[i], typeof i);
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (Math.abs(array[j]) - Math.abs(array[i]) == diff) {
        return 1;
      }
    }
  }
  return 0;
}

let array = [5, 10, 3, 2, 50, 80];
let diffToFind = 48;
console.log(pairDiff(array, diffToFind));
