function sortedFrequency(arr, num) {
	const firstIndex = findFirstIndex(arr, num);
	
	if (firstIndex === -1) {
			return 0; // Number not found in the array
	}

	const lastIndex = findLastIndex(arr, num);

	return lastIndex - firstIndex + 1;
}

function findFirstIndex(arr, num, low = 0, high = arr.length - 1) {
	if (high >= low) {
			const mid = Math.floor((low + high) / 2);

			if ((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
					return mid; // Found the first occurrence
			} else if (arr[mid] < num) {
					return findFirstIndex(arr, num, mid + 1, high);
			} else {
					return findFirstIndex(arr, num, low, mid - 1);
			}
	}

	return -1; // Number not found
}

function findLastIndex(arr, num, low = 0, high = arr.length - 1) {
	if (high >= low) {
			const mid = Math.floor((low + high) / 2);

			if ((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
					return mid; // Found the last occurrence
			} else if (arr[mid] > num) {
					return findLastIndex(arr, num, low, mid - 1);
			} else {
					return findLastIndex(arr, num, mid + 1, high);
			}
	}

	return -1; // Number not found
}

module.exports = sortedFrequency

// Springboard solution
// function sortedFrequency(arr, num) {
//     let firstIdx = findFirst(arr, num);
//     if (firstIdx == -1) return firstIdx;
//     let lastIdx = findLast(arr, num);
//     return lastIdx - firstIdx + 1;
//   }
  
//   function findFirst(arr, num, low = 0, high = arr.length - 1) {
//     if (high >= low) {
//       let mid = Math.floor((low + high) / 2)
//       if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
//         return mid;
//       } else if (num > arr[mid]) {
//         return findFirst(arr, num, mid + 1, high)
//       } else {
//         return findFirst(arr, num, low, mid - 1)
//       }
//     }
//     return -1
//   }
  
//   function findLast(arr, num, low = 0, high = arr.length - 1) {
//     if (high >= low) {
//       let mid = Math.floor((low + high) / 2)
//       if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
//         return mid;
//       } else if (num < arr[mid]) {
//         return findLast(arr, num, low, mid - 1)
//       } else {
//         return findLast(arr, num, mid + 1, high)
//       }
//     }
//     return -1
//   }
  
//   module.exports = sortedFrequency