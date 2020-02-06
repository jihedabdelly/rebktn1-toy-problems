/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  // your code here...
  //var newTime = "";
  var ndxOfColon = time.indexOf(":")
  var hours = JSON.parse(time.slice(0, ndxOfColon)) // hours as a number
  var colAndMinutes = time.slice(ndxOfColon, ndxOfColon+3)

  if(time.length === 5) {
  	return time;
  } else if (time === "12:00am") {
  	return "00:00"
  }

  if(time[4]==="p") {
  	hours += 12;
  	hours = JSON.stringify(hours);
  	return hours + colAndMinutes
  } else {
  	return JSON.stringify(hours) + colAndMinutes
  }


}
