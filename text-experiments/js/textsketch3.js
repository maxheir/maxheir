// var txt1;

function loadFile() {
  loadStrings("text/justinlyrics.txt", fileLoaded);
}

function fileLoaded(data) {
  // txt1 = data
  createP(join(data, "<br/>"));
}

function setup() {
  var button = select("#loadfile");
  button.mousePressed(loadFile);

  noCanvas();
  console.log();
}
