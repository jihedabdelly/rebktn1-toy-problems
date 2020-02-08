// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// You've got Helpers!
// myHelper(x, y)

// Examples
// input: [ 20, -10, -10, 2, 4, 299 ]
// Output:	[ -10, -10, 2, 4, 20, 299 ]

// DONE

var swap = function(arr,ndx1,ndx2) {
	var temp = arr[ndx1];
	if(arr[ndx1] > arr[ndx2]) {
		arr[ndx1] = arr[ndx2];
		arr[ndx2] = temp;
	}
}

var bubbleSort = function(array) {
  // Your code here.
  var count = 0;
  for (var i = 0; i < array.length-1; i++) {
  	if(array[i] - array[i+1] <= 0) {
  		count++
  	}
  }
  if(count === array.length-1) {
  	return "The array "+array+" is now sorted"
  }


  for (var i = 0; i < array.length-1; i = i+2) {
  	swap(array, i, i+1)
  }
  for (var i = 1; i < array.length-1; i = i+2) {
  	swap(array, i, i+1)
  }

  return bubbleSort(array) 
};
