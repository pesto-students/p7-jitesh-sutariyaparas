// Pair With Given Difference
function pairDiff(array, diff) {
  for (i = 0; i <= array.length; i++) {
    console.log(array[i], typeof i);
    for (j = i + 1; j <= array.length - 1; j++) {
      if (Math.abs(array[j]) - Math.abs(array[i]) == diff) {
        return 1;
      }
    }
  }
  return 0;
}

array = [5, 10, 3, 2, 50, 80];
diffToFind = 48;
console.log(pairDiff(array, diffToFind));
