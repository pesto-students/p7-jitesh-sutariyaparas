// Problem 6.6: 3 sum
//Given an array S of n integers,
// find three integers in S such that the sum is closest to a given number, target.
// Return the sum of the three integers.Assume that there will only be one solution
//Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

const closestSum =(array, target) => {
  let sumList = [];
  for (let i = 0; i <= array.length; i++) {
    let j = i + 2;
    if (j < array.length) {
      let sum = array[i] + array[i + 1] + array[j];
      sumList.push(sum);
    }
  }

  for (let i = 0; i < sumList.length; i++) {
    if (i == 0) {
      let result = sumList[i];
      let previousDiff = Math.abs(sumList[i] - target);
    } else {
      let currentDiff = Math.abs(sumList[i] - target);
      if (currentDiff < previousDiff) {
        result = sumList[i];
      }
    }
  }
  return result;
}

let array = [-1, 2, 1, -4];
let target = 1;

console.log(closestSum(array,target));
