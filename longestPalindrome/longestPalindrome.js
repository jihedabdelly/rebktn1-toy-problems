/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  // your code here...
  var palindromes = [];
  for(var i = 0; i < string.length; i++) {
 		var left = i-1;
 		var right = i+1;
 		var palindrome = string[i];

 		while(left>=0 && right<string.length) {
 			if(string[left] === string[right]) {
 				palindrome = string[left] + palindrome + string[right];
 				palindromes.push(palindrome)
 				left--
 				right++
 			} else {
 				break;
 			}
 		} 

  }

  var longest = palindromes[0];

  for (var i = 1; i < palindromes.length; i++) {
  	if(palindromes[i].length > longest.length) {
  		longest = palindromes[i]
  	}
  }

  return longest
}
