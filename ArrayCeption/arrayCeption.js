// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

// Done

function inception(array) {
	var str = JSON.stringify(array);
	while(str.includes("[]")) {
		str = str.replace("[]","")
	}

	var depth = 0;
	for (var i = 0; i < str.length; i++) {
		if(str[i] === "[" && str[i+1] !== "]") {
			depth++
		}		
	}

	if(str.includes("],[")) {
		depth--
	}


	return depth
}