var Range = function (start, end, step) {

    this.start = start
    if (!end) {
        this.end = start
    } else {
        this.end = end
    }
    if (!step) {
        this.step = (this.start <= this.end) ? 1 : -1
    } else {
        this.step = step
    }
}
<<<<<<< HEAD
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
=======


Range.prototype.size = function () {
    return Math.floor((this.start - this.end) / this.step) + 1
};

Range.prototype.each = function (callback) {
    for (var x = this.start; this.step > 0 ? x <= this.end; x += this.step) {
        callback(x)
    }
}

Range.prototype.includes = function (val) {
    if (this.step > 0) {
        return (val >= this.start && val <= this.end &&
            (((val - this.start) / step) % 1 === 0))
    } else {
        return (val <= this.start && val >= this.end &&
            (((val - this.start) / step) % 1 === 0))
    }
};
>>>>>>> 29427cac5b44b01e96e97f633bc0388b9d079355
