let a;
let b;
let c;

document.getElementById("submitButton").onclick = function() {
  a = document.getElementById("A-input").value;
  a = Number(a);

  b = document.getElementById("B-input").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("C-label").innerHTML = "Side C: " + c;
}



let a1;
let b1;
let c1;

document.getElementById("submitButton1").onclick = function() {
  c1 = document.getElementById("C-input1").value;
  c1 = Number(c1);

  b1 = document.getElementById("B-input1").value;
  b1 = Number(b1);

  a1 = Math.sqrt(Math.pow(c1, 2) - Math.pow(b1, 2));

  document.getElementById("A-label1").innerHTML = "Side A: " + a1;
}

let a2;
let b2;
let c2;

document.getElementById("submitButton2").onclick = function() {
  c2 = document.getElementById("C-input2").value;
  c2 = Number(c2);

  a2 = document.getElementById("A-input2").value;
  a2 = Number(a2);

  b2 = Math.sqrt(Math.pow(c2, 2) - Math.pow(a2, 2));

  document.getElementById("B-label2").innerHTML = "Side B: " + b2;
}

