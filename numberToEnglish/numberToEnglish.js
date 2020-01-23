/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion'
};

function numberToEnglish(number) {
  // your code here...
  var str = JSON.stringify(number);
  var length = str.length;
  var output = "";
  
  var firstPart = length - Math.floor(length/3);
  var secondPart = Math.floor(length/3);
  output += onlyHundreds(JSON.parse(str.slice(0, firstPart))) + numbersToPlace[10**secondPart]
  for (var i = 0; i < secondPart; i=i+3) {
  	var 
  }

  function onlyHundreds(number) {
  	var output = "";
  	var str = JSON.stringify(number);
  	var length = str.length;

  	if(length <= 2 && number <= 20) {
	  	output = numbersToWords[number] 
	} else if(length<=2 && number > 20) {
	  	output = numbersToWords[Math.floor(number/10)*10] +' '+ numbersToWords[number - Math.floor(number/10)*10]
	} else if(length === 3) {
	  	output = numbersToWords[Math.floor(number/100)] + ' hundred ' + onlyHundreds(number - Math.floor(number/100)*100 )
	} 
	return output
  }


  return output
}
