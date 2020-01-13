/*
Spiral Traversal

Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
]) 

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]


spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
])	

// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

spiralTraversal([ 
  [ 1, 2, 3 ], 
  [ 4, 5, 6 ], 
  [ 7, 8, 9 ], 
  [ 10, 11, 12 ], 
  [ 13, 14, 15 ], 
  [ 16, 17, 18 ], 
  [ 19, 20, 21 ], 
  [ 22, 23, 24 ] 
])	

// output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]

spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]])	// [ 1, 2, 3, 4 ]

spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]]) // [ 1, 2, 3, 4, 5, 6, 7 ]
*/

function spiralTraversal(matrix) {
	var rowLength = matrix[0].length;
	var columnLength = matrix.length;
	var newMatrix=[];

	var finalArr = [];

	if(matrix.length === 0) {
		return finalArr;
	}

	for(var i = 0; i < rowLength; i++) {
		finalArr.push(matrix[0][i]);
		if(i === rowLength-1) {
			for (var j = 0; j < columnLength; j++) {
				finalArr.push(matrix[j][i])	
				if(j === columnLength-1) {
					for (var k = rowLength-2; k >= 0; k--) {
						finalArr.push(matrix[k][j]);
						if(k === 0) {
							for (var l = columnLength-1; l > 0 ; l--) {
								finalArr.push(matrix[k][l])


							}
						}
					}
				}
			}
		}
	}

	for (var i = 1; i < rowLength-1 ; i++) {
		var newRow = [];
		for (var j = 1; j < columnLength-1; j++) {
			newRow.push(matrix[i][j])
		}
		newMatrix.push(newRow);
	}

	matrix=newMatrix

	return finalArr.concat(spiralTraversal(matrix))
}