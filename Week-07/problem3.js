// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending
// order. Example 1:
// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation: 0's 1's and 2's are segregated into ascending order.
// Example 2:
// Input:
// N = 3
// arr[] = {0 1 0}
// Output:
// 0 0 1
// Explanation: 0s 1s and 2s are segregated into ascending order. Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
// Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2

array = [0, 2, 2, 1, 1, 0, 0];

const shortArray = (array) => {
  zeroNumberList = [];
  oneNumberList = [];
  twoNumberList = [];
  for (let i in array) {
    if (array[i] == 0) {
      zeroNumberList.push(array[i]);
    } else if (array[i] == 1) {
      oneNumberList.push(array[i]);
    } else {
      twoNumberList.push(array[i]);
    }
  }
  return [...zeroNumberList, ...oneNumberList, ...twoNumberList];
};

console.log(shortArray(array));
