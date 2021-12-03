function doIt() {
      btn = document.querySelector("#do-it");
      userCode = document.getElementById("codeBox").value

      myResult = eval(userCode)
      //document.getElementById("codeBox").value = myResult
      //if (btn.innerHTML == "Run") {
      //  btn.innerHTML = "Do it!";
      //} else {
      //  btn.innerHTML = "Run";
      //}
   };

function loadPumpkin() {
  document.getElementById("codeBox").value = pumpkinCodeString
  document.getElementById("highlighting-content").innerHTML=pumpkinCodeString
  Prism.highlightElement(document.getElementById("highlighting-content"));
};

function loadSnowman() {
  document.getElementById("codeBox").value = snowmanCodeString
  document.getElementById("highlighting-content").innerHTML=snowmanCodeString
  Prism.highlightElement(document.getElementById("highlighting-content"));
};

function loadCircles() {
  document.getElementById("codeBox").value = circlesCodeString
  document.getElementById("highlighting-content").innerHTML=circlesCodeString
  Prism.highlightElement(document.getElementById("highlighting-content"));
};

function loadGrid() {
  document.getElementById("codeBox").value = gridCodeString
  document.getElementById("highlighting-content").innerHTML=gridCodeString
  Prism.highlightElement(document.getElementById("highlighting-content"));
};

//function preload() {
   //fontRegular = loadFont('assets/Regular.otf');
   //fontItalic = loadFont('assets/Italic.ttf');
   //fontBold = loadFont('assets/Bold.ttf');
   //myfont = loadFont('Inconsolata-Black.otf');
//}


function setup() {
  let renderer = createCanvas(400, 400);
  renderer.parent("theDrawing");
}

function draw_ok() {
  // put drawing code here
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

}

function draw() {
  // put drawing code here
}

let pumpkinCodeString = `
background(0, 0, 0);
noStroke();

// header
fill(252, 111, 3);
textAlign(CENTER, TOP);
textSize(30);
text("Carve me!", width/2, 0);

// concrete
fill(102, 102, 102);
rect(0, 265, width, 200);

// moon - two circles, one yellow, one black to match the sky
fill(241, 252, 28)
ellipse(50, 50, 70, 70)
fill(0,0,0)
ellipse(70, 50, 70, 70)

// pumpkin center
var pumpkinY = 245;
var pumpkinHeight = 250;
var pumpkinWidth = width*0.8

// pumpkin stem
fill(53, 145, 14);
stroke(3, 69, 0);
var stemHeight = pumpkinHeight/8;
var stemWidth = pumpkinHeight/10;
var stemY = pumpkinY - pumpkinHeight/2 - (3*stemHeight/4);
rect((width/2 - stemWidth/2), stemY, stemWidth, stemHeight, 4)

// pumpkin shadow
fill(25,25,25)
ellipse(width/2 + 40, pumpkinY + pumpkinHeight/2 +10, pumpkinWidth, pumpkinHeight/5)

// pumpkin body
fill(252, 111, 3);
stroke(252, 99, 0);
ellipse(width/2, pumpkinY, pumpkinWidth, pumpkinHeight)



// your carving! what will you carve?
`

let snowmanCodeString=`

background(0, 0, 0);
noStroke();

// header
fill(235, 255, 255);
textAlign(CENTER, TOP);
textSize(30);
text("Snowman of the night!", width/2, 0);

// concrete
fill(235, 255, 255);
rect(0, 265, width, 200);

// Body
var bodyY = 232;
var bodyHeight = 125;

// Head
var headY = 140;
var headHeight = 82;

fill(255, 255, 255)
stroke(3, 69, 0);
ellipse(width/2, bodyY, bodyHeight);
ellipse(width/2, headY, headHeight);

// Buttons
var button1Y = 247
var button2Y = 227
var button3Y = 207
var buttonD = 10

fill(0, 125, 255)
ellipse(width/2, button1Y, buttonD);
ellipse(width/2, button2Y, buttonD);
ellipse(width/2, button3Y, buttonD);

// Eyes
var eyeY = 130
var eyeD = 10
fill(255, 0, 0)
ellipse(width/2 - (eyeD+3), eyeY, eyeD);
ellipse(width/2 + (eyeD+3), eyeY, eyeD);

// smile
curve(width/2 - (eyeD+3), (eyeY+20), width/2 - (eyeD), (eyeY+28), width/2 + (eyeD), (eyeY+28), width/2 + (eyeD+3), (eyeY+20))
`

let circlesCodeString = `
background(0, 0, 0);
noStroke();

fill(0, 204, 173);
triangle(18, 18, 18, 360, 81, 360);

fill(90, 0, 234);
rect(81, 81, 63, 63);

fill(204);
quad(174, 18, 216, 18, 216, 360, 144, 360);

fill(255, 255, 125);
ellipse(100, 40, 72, 72);

fill(125, 0, 204);
triangle(288, 18, 351, 360, 288, 360);

fill(255, 0, 0);
arc(200, 300, 280, 280, PI, TWO_PI);

`

let gridCodeString=`
background(255, 255, 255);
noStroke();
var videoScale = 8;
var cols = width/videoScale;
var rows = height/videoScale;

// Begin loop for columns
for (var i = 0; i < cols; i++) {
  // Begin loop for rows
  for (var j = 0; j < rows; j++) {

    // Scaling up to draw a rectangle at (x,y)
    var x = i*videoScale;
    var y = j*videoScale;
    fill(255);
    stroke(0);
    // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
    rect(x, y, videoScale, videoScale);
  }
}
// header
fill(0, 0, 0);
textAlign(CENTER, TOP);
textSize(30);
text("A grid", width/2, 0);

textAlign(LEFT, TOP); // LEFT, TOP of text aligns with point (0,0) in the drawing area
textSize(10);
text("(0,0)", 0, 0);
`
