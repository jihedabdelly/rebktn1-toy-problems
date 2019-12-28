/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence(array) {
	// var evenAppearance = [];
	// for (var i = 0; i < array.length; i++) {
	// 	var elm = array[i];
	// 	var count = 1;
	// 	for (var j = i+1; j < array.length; j++) {
	// 		if(array[j] === elm) {
	// 			count++
	// 		}
	// 	}

	// 	if(!evenAppearance.includes(elm) && count%2===0) {
	// 		evenAppearance.push(elm)
	// 	}
	// }

	// var object = {};
 //    var keys = [];
 //    for (var i = 0; i < array.length; i++) {
 //    	if(!keys.includes(array[i])) {
 //    		keys.push(array[i]);
 //    		object[array[i]] = 1;
 //    	} else if(keys.includes(array[i])) {
 //    		object[array[i]]++;
 //    	}
 //    }

 //    return object

	
	
 // 	for (var i = 0; i < array.length; i++) {
 // 		var keys = Object.keys(object);
 // 		if(!keys.includes(array[i])) {
 // 			object[array[i]] = 1;
 // 		} else {
 // 			object[array[i]]++;
 // 		}
 // 	}
 //    console.log(object)
 // 	for (var key in object) {
 // 		if (object[key] % 2 === 0) {
 // 			return key
 // 		}
 // 	} 

 	var jason = JSON.stringify(array)
 	var newLength = jason.length;
 	jason = jason.slice(1,newLength - 1) + ''

 	function splittin(newArr) {
 		//for obj split('},') then add } to elsach elm
 		//for arr split('],') then add ] to elsach elm
 		//else split(',')

 	}

 	//apply a counting algorithm of each element then return first evenly appeared one
}