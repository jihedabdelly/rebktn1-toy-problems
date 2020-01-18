/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

<<<<<<< HEAD
//Done

function longestRun(string) {
	var ndx1 = 0;
	var ndx2 = 0;
	var finalArr = [ndx1, ndx2];
	for (var i = 0; i < string.length; i++) {
		ndx1 = i;
		for (var j = i+1; j < string.length; j++) {
			if(string[j] === string[i]) {
				ndx2=j;
				if(ndx2-ndx1 > finalArr[1] - finalArr[0]) {
					finalArr = [ndx1, ndx2]
				}
			} else {
				break;
			}
		}
	}

	return finalArr
}
=======



>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
