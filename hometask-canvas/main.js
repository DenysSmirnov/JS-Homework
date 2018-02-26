document.getElementById("circle").onclick = function(e) {
    var x = e.offsetX,
        y = e.offsetY;
    var array = render(matrix());
    if (array.indexOf(x+';'+y) !== -1) {
        document.getElementById("msg").innerHTML = 'Координаты: '+x+' '+y+' Попал!';
    } else {
        document.getElementById("msg").innerHTML = 'Координаты: '+x+' '+y+' Мимо';
    }
}

function circle() {
    var canvas = document.getElementById('circle');
    var obCanvas = canvas.getContext('2d');
    canvas.width  = 440;
    canvas.height = 440;
    obCanvas.beginPath();
    obCanvas.arc(220, 220, 70, 0, 2*Math.PI, false);
    obCanvas.moveTo(220, 440);
    obCanvas.lineTo(220, 0);
    obCanvas.moveTo(0, 220);
    obCanvas.lineTo(440, 220);
    obCanvas.moveTo(80, 220);
    obCanvas.lineTo(220, 360);
    obCanvas.moveTo(420, 217);
    obCanvas.lineTo(440, 220);
    obCanvas.lineTo(420, 223);
    obCanvas.moveTo(217, 20);
    obCanvas.lineTo(220, 0);
    obCanvas.lineTo(223, 20);
    obCanvas.moveTo(80, 215);
    obCanvas.lineTo(80, 225);
    obCanvas.moveTo(215, 360);
    obCanvas.lineTo(225, 360);
    obCanvas.lineWidth = 1;
    obCanvas.strokeStyle = 'black';
    obCanvas.stroke();
}

function matrix () {
  var matrix = [];
  for (var i =0; i <= 140; i++) {
    matrix[i] = [];
    for (var j = 140; j <= 280; j++) {
      if (j-i <= 140) {
        matrix[i][j] = i+80+';'+(j+80); 
      }
    }
  }
  return matrix;
}

function render (array) {
  var rowsQty = array.length;
  var result = [];
  for (var i = 0; i < rowsQty; i++) {
    var row = array[i];
    for (var k in row) {
      result.push(row[k]);
    }
  }
  return result;
}