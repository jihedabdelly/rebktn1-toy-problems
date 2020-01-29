/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
​
// Helpers
​
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}
​
var reverseLinkedList = function(linkedList) {
  // your code here...
  var storage = [];
 
  while(true) {
  	storage.push(linkedList["value"]);
  	if(linkedList["next"] === null) {
  		break;
  	} else {
  		linkedList = linkedList["next"];
  	}
  }
  //return storage
  var reverse = new Node(storage[0])
  reverse.next = new Node(storage[1])

  for (var i = 2; i < storage.length; i++) {
  	if(reverse.next !== null) {
  		
  	}
  }

  return reverse
}