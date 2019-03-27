function triangleTracker(){

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

        if (a ===b && b === c && c === a) {
          alert("Equilateral Triangle");
      }
        else if (a === b || a === c || b === c ) {
          alert("Isosceles Triangle");
      }
        else if ((a+b)<=c || (a+c)<=b || (b+c)<=a) {
          alert("THIS IS NOT A Triangle");
      }
        else if (a !== b && b !== c ) {
          alert("Scalene Triangle");
      }
    }