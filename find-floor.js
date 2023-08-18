function findFloor(arr, x) {
	let left = 0;
	let right = arr.length - 1;
	let floor = -1; // Initialize the floor value to -1

	while (left <= right) {
			const mid = Math.floor((left + right) / 2);

			if (arr[mid] === x) {
					// If the value is found in the array, it's the floor value
					return arr[mid];
			} else if (arr[mid] < x) {
					// Update the floor value and search in the right half
					floor = arr[mid];
					left = mid + 1;
			} else {
					// Search in the left half
					right = mid - 1;
			}
	}

	return floor;
}

module.exports = findFloor