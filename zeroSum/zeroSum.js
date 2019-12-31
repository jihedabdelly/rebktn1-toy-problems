/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

//Done

function zeroSum(array) {
	var bool = false;
	var obj = {};
	for (var i = 0; i < array.length; i++) {
		if(obj[-array[i]]){
			obj[-array[i]] += array[i]
			bool = true
		} else {
			obj[array[i]] = array[i]
		} 
		
	}
	return bool
}