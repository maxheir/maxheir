var textfield;
var output;
var submit;

function setup() {
  noCanvas();
  // textfield = createInput("your favorite food");
  textfield = select("#txt");
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);

}

function newText() {
  var s = textfield.value();
  // createP("length is " +s.length);

  // var index = s.indexOf("rainbow");

  // var newText = s.substring(s.length/2,s.length);
  // createP(newText);
  // createP(index);

  var words = split(s, ' ');
  // createP(words);

  for (i=0; i<words.length; i++){
    // createP(words[i])
  }

  words = words.sort();
  s = join(words, ' ');
createP(s);
}
