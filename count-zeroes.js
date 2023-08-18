function countZeroes(arr) {
  let pivot = firstZero(arr)
  if (pivot === -1) {
    return 0;
  }
  return arr.length - pivot
}

function firstZero(arr, low=0, high=arr.length -1){
  if (high >= low){
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return firstZero(arr, mid + 1, high)
    }
    return firstZero(arr, low, mid - 1)
  }
  return -1;
}

module.exports = countZeroes  


