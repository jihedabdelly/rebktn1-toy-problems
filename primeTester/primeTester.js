/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/
// Done

function primeTester(n=1) {
	var count=0;

	if(n===0 || n===1) return false;

	for (var i = 2; i < n; i++) {
		if(n/i === Math.floor(n/i)) {
			count++
		}
	}


	return count===0;
}
