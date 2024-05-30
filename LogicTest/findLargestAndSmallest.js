const arr = [3, 4, 9, 3, 8, 0, 4, 9];

function findLargestAndSmallest(arr) {
  let result = [];
  let largest = arr[0];
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }

  result[0] = largest;

  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }

  result[1] = smallest;

  return result;
}

console.log(findLargestAndSmallest(arr));
