/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  
  for (var i = 0; i < string.length; i++) {
  	var char = string[i];
  	var rest = string.slice(i+1)
  	if(rest.indexOf(char) === -1) {
  		return char;
  	}
  	
  }

  return "All chars are repeated"
};
