function doIt() {
      btn = document.querySelector("#do-it");
      userCode = document.getElementById("codeBox").value

      myResult = eval(userCode)
      //document.getElementById("codeBox").value = myResult
      if (btn.innerHTML == "Run") {
        btn.innerHTML = "Do it!";
      } else {
        btn.innerHTML = "Run";
      }
   };

function loadPumpkin() {
  document.getElementById("codeBox").value = pumpkinCodeString
  document.getElementById("highlighting-content").innerHTML=pumpkinCodeString
  Prism.highlightElement(document.getElementById("highlighting-content"));
};

function loadSnowman() {
  document.getElementById("codeBox").value = snowmanCodeString
  document.getElementById("highlighting-content").value=snowmanCodeString
  Prism.highlightElement(document.getElementById("highlighting-content"));
};

function loadCircles() {
  document.getElementById("codeBox").value = circlesCodeString
  document.getElementById("highlighting-content").value=circlesCodeString
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
fill(255, 153, 0);
textAlign(CENTER, TOP);
textSize(30);
text("Pumpkin carving contest!", width/2, 0);

// concrete
fill(102, 102, 102);
rect(0, 265, width, 200);

// pumpkin center
var pumpkinY = 232;
var pumpkinHeight = 250;

// pumpkin stem
fill(53, 145, 14);
stroke(3, 69, 0);
var stemHeight = pumpkinHeight/10;
var stemY = pumpkinY - pumpkinHeight/2 - stemHeight;
quad(width/2-stemHeight/2, stemY,
     width/2+stemHeight/2, stemY,
     width/2+stemHeight, stemY+stemHeight*2,
     width/2-stemHeight, stemY+stemHeight*2);

// pumpkin body
fill(255, 153, 0);
stroke(255, 119, 0);
ellipse(width/2-pumpkinHeight/3, pumpkinY+10, pumpkinHeight/3, pumpkinHeight*0.8);
ellipse(width/2+pumpkinHeight/3, pumpkinY+10, pumpkinHeight/3, pumpkinHeight*0.8);
ellipse(width/2+pumpkinHeight/5, pumpkinY+5, pumpkinHeight/3, pumpkinHeight*0.9);
ellipse(width/2-pumpkinHeight/5, pumpkinY+5, pumpkinHeight/3, pumpkinHeight*0.9);
ellipse(width/2, pumpkinY+7, pumpkinHeight/2, pumpkinHeight*0.95);

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
