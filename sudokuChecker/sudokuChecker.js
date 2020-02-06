/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296
896275314
214963857
589427163
362189745
471356982
923541678
648792531
157638429"
*/



function sudokuChecker(board) {
  // Your code here.
  var rows = [];
  var columns = [];
  var subgrids = [];

  for (var i = 0; i <= 8; i++) {
  	var row = [];
  	for (var j = 0; j <= 8; j++) {
  		row.push(board[j+9*i])		
  	}
  	rows.push(row)
  }

  for (var i = 0; i <= 8; i++) {
  	var column = [];
  	for (var j = 0; j <= 8; j++) {
  		column.push(board[9*j+i])		
  	}
  	columns.push(column)
  }

  function subgrids(board) {
  	var start = [0,3,6,27,30,33,54,57,60];
  	
  }

  console.log("Rows :",rows) 
  console.log("Columns :",columns)
}
