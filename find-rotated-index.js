function findRotatedIndex() {
	let left = 0;
	let right = arr.length -1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (arr[mid] === num) {
			// Found the number at mid index
			return mid;
		}

		// if the left half is sorted
		if (arr[left] <= arr[mid]) {
			if (arr[left] <= num && num < arr [mid]) {
				right = mid -1;
			} else {
				left = mid +1;
			}
		}
		// if the right half is sorted
		else {
			if (arr[mid] < num && num <= arr[right]) {
				left = mid +1;
			} else {
				right = mid -1;
			}
		}
	}
	// Number not found in arr
	return -1;
}

module.exports = findRotatedIndex
// Springboard's solution
// function findRotatedIndex(array, num) {
//   var pivot = findPivot(array)
//   if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
//     return binarySearch(array, num, 0, pivot - 1);
//   } else {
//     return binarySearch(array, num, pivot, array.length - 1);
//   }
// }

// function binarySearch(array, num, start, end) {
//   if (array.length === 0) return -1;
//   if (num < array[start] || num > array[end]) return -1;

//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);
//     if (array[mid] === num) {
//       return mid;
//     } else if (num < array[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return -1;
// }

// function findPivot(arr) {
//   if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//   var start = 0
//   var end = arr.length - 1;
//   while (start <= end) {
//     var mid = Math.floor((start + end) / 2);
//     if (arr[mid] > arr[mid + 1]) return mid + 1
//     else if (arr[start] <= arr[mid]) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }
// }

// module.exports = findRotatedIndex