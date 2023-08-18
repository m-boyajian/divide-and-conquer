function findRotationCount(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length -1;

	while (leftIdx <= rightIdx) {
		if (arr[leftIdx] <= arr[rightIdx]) {
				return leftIdx;
				// The arr is not rotated
		}

		const mid = Math.floor((leftIdx + rightIdx) / 2);
		const prev = (mid + arr.length -1) % arr.length;
		const next = (mid + 1) % arr.length;

		if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
			// Found the point of rotation
				return mid;		
		} else if (arr[mid] <= arr[rightIdx]) {
				// searches left half
				rightIdx = mid -1;
		}	else if (arr[mid] >= arr[leftIdx]) {
				// searches right half
				leftIdx = mid + 1;
		}
  }
	// If arr is not rotated
	return -1;
}

module.exports = findRotationCount
// Springboard solution
// function findRotationCount(arr, low = 0, high = arr.length - 1) {
//   if (high < low) return 0;
//   if (high === low) return low;
//   let mid = Math.floor((low + high) / 2)

//   // Check if element (mid+1) is minimum element.
//   // Consider the cases like [3, 4, 5, 1, 2]
//   if (mid < high && arr[mid + 1] < arr[mid])
//     return mid + 1;

//   // Check if mid itself is minimum element
//   if (mid > low && arr[mid] < arr[mid - 1]) {
//     return mid;
//   }

//   // Decide whether we need to go to left half or
//   // right half
//   if (arr[high] > arr[mid]) {
//     return findRotationCount(arr, low, mid - 1);
//   }

//   return findRotationCount(arr, mid + 1, high);
// }

// module.exports = findRotationCount