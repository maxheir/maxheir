// var txt1;

function loadFile() {
  loadStrings("text/justinlyrics.txt", fileLoaded);
}
// function preload(){
//   txt1 = loadStrings("text/justinlyrics.txt");
// }

function setup() {
  var button = select("#loadfile");
  button.mousePressed(loadFile);

  noCanvas();
  console.log();
}

function fileLoaded(data) {
  // txt1 = data
  createP(join(data, "<br/>"));
}
