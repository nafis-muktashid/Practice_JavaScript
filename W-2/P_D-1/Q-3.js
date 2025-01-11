let arr = [
  14, 3, 8, 19, 7, 2, 17, 5, 12, 9, 20, 6, 15, 1, 10, 16, 4, 13, 18, 11,
];

const sort_function = (gievn_arr) => {
  for (let i = 1; i < gievn_arr.length; ++i) {
    let key = gievn_arr[i];
    let j = i - 1;
    while (j >= 0 && gievn_arr[j] > key) {
      gievn_arr[j + 1] = gievn_arr[j];
      j--;
    }
    gievn_arr[j + 1] = key;
  }
  return gievn_arr;
};

arr = sort_function(arr);
console.log(arr);
