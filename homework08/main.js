var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = [];
  for (let x = 0; x < size; x++) {
    table[x] = [];
    for (let y = 0; y < size; y++) {
      table[x][y] = y+1 + x + x * y;
    }
  }
  return table;
}

function matrix (size) {
  var matrix = [];
  for (let x = 0; x < size; x++) {
    matrix[x] = [];
    for (let y = 0; y < size; y++) {
      if (x===y) {
        matrix[x][y] = 1;
      } else if (x+y == size-1) {
        matrix[x][y] = 2;
      } else if (y-x > 0) {
        if (x+y < size-1) {
          matrix[x][y] = 3;
        } else {
          matrix[x][y] = 4;
        }
      } else if (y-x < 0) { 
        if (x+y > size-1) {
          matrix[x][y] = 5;
        } else {
          matrix[x][y] = 6;
        }
      }
    }
  }
  return matrix;
}

function pascal (size) {
  var triangle = [];
  for (let x = 0; x < size; x++) {
    triangle[x] = [];
    for (let y = 0; y < size; y++) {
      if (x===y || y===0) {
        triangle[x][y] = 1;
      } else if (x - y === 1 || x > 2 && y===1) {
        triangle[x][y] = x;
      } else if (x-1 > 0 && y-1 > 0) {
        triangle[x][y] = triangle[x-1][y]+triangle[x-1][y-1];
      } else triangle[x][y] = "";
    }
  }
  return triangle;
}

function render (array) {
  var rowsQty = array.length;
  var result = [];
  for (var i = 0; i < rowsQty; i++) {
    var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
    result.push(row);
  }
  return result.join('');
}