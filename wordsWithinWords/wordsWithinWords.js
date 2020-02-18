/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

function nestedWordCount(words) {
  // your code here...
  var obj = {}
  var ndxOfMax = 0;

  for (var i = 0; i < words.length; i++) {
  	obj[i] = 0
  }

  for (var i = 0; i < words.length; i++) {
  	for (var j = 0; j < words.length; j++) {
  		if(words[i].includes(words[j])) {
  			obj[i]++
  		}	
  	}
  }

  for (var i = 0; i < words.length; i++) {
  	if(obj[i]>obj[ndxOfMax]) {
  		ndxOfMax = i
  	}
  }

  return words[ndxOfMax]
}
