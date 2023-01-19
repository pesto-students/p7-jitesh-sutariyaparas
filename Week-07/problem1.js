// Problem 6.1: Max Sum Contiguous Subarray

const maxSubArraySum = (array) => {
  let maxSum = Number.MIN_VALUE,
    maxEndIndexSum = 0,
    startIndex = 0,
    endIndex = 0,
    sumStartIndex = 0;

  for (let i = 0; i < array.length; i++) {
    maxEndIndexSum += array[i];

    if (maxSum < maxEndIndexSum) {
      maxSum = maxEndIndexSum;
      startIndex = sumStartIndex;
      endIndex = i;
    }

    if (maxEndIndexSum < 0) {
      maxEndIndexSum = 0;
      sumStartIndex = i + 1;
    }
  }
  console.log("Maximum contiguous sum is : " + maxSum);
  console.log("Start index " + startIndex);
  console.log("End index " + endIndex);
}

var array = [-2, 6, -3, 6, -7, -6, 4, -1, -2, -1, -5, -3];
maxSubArraySum(array);
