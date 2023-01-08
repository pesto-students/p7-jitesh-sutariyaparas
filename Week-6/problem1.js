//Max Sum Contiguous Subarray

function maxSubArraySum(a, size) {
  var max_sum = Number.MIN_VALUE,
    max_end_indexing_here = 0,
    start_index = 0,
    end_index = 0,
    s = 0;

  for (i = 0; i < size; i++) {
    max_end_indexing_here += a[i];
    // console.log("start_index__,end_index__", start_index, end_index);
    // console.log(
    //   "max_sum__,max_end_indexing_here",
    //   max_sum,
    //   max_end_indexing_here
    // );

    if (max_sum < max_end_indexing_here) {
    //   console.log(
    //     "####IF1_ max_sum < max_end_indexing_here__",
    //     max_sum,
    //     max_end_indexing_here
    //   );
      max_sum = max_end_indexing_here;
      start_index = s;
      end_index = i;
    }

    if (max_end_indexing_here < 0) {
    //   console.log("@@@@ IF2 max_end_indexing_here < 0", max_end_indexing_here);
      max_end_indexing_here = 0;
      s = i + 1;
    }
  }
  console.log("Maximum contiguous sum is " + max_sum);
  console.log("start_indexing index " + start_index);
  console.log("end_indexing index " + end_index);
}


var a = [-2, 6, -3, -7, -6, 4, -1, -2, -1, -5, -3];
var n = a.length;
maxSubArraySum(a, n);
