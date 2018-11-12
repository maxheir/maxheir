var inputvar;
var output;

function setup (){
  noCanvas();
  inputvar = createInput();
  output = select('#output');

  inputvar.input(newText);

  inputvar.changed(newTyping);

}

// function draw (){
//
// }


function newText (){
  output.html(inputvar.value())
}

function newTyping (){
  createP(inputvar.value());
}
