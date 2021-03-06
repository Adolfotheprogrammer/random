var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
makeRect(0,25,200,100,"black",0.6)    
    makeCircle(100,52,25,"orange",1)
makeRect(90,75,20,8,"red",1)
makeRect(90,37,20,3,"red",0.4)
makeCircle(115,43,4,"black",0.9)
makeCircle(85,43,4,"black",0.9)
makeCircle(100,53,2,"black",0.9)
makeEllipse(100,27,28,10,1)
makeLine(123,61,77,61,"black",1)
makeCircle(100,112,35,"black",0.9)
makeLine(124,87,76,87,"white",1)
makeLine(131,97,69,97,"white",1)
makeCircle(100,25,2,"white")
makeImage("http://www.drodd.com/images15/canada-flag15.gif",0,1,70,30,1)
makeLine(12,20,12,50,"white",4,1)
 var randomstuff= Math.random()
 if(randomstuff <0.4){
 makeText("Im a Canadian",80,80,20,10,"red")
 }
}



// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0,0,200,100,"blue",1)
    makeImage("https://img.clipartfox.com/87c057d2b5c4d4752775e90425b84fbb_sports-car-clipart-side-view-cartoon-car-free-clipart_7122-2615.png",-30,40,300,30)
    makeLine(0,72,200,72,"gray",3)
    makeCircle(190,10,13,"orange")
     var randomstuff2= Math.random()
     if(randomstuff2 < 0.75){
     makeText("Vroom",75,75,10,5)
     }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0,0,200,100,"lightblue")
    makeRect(0,60,200,100,"blue")
    makeImage("http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxpzQgwEOpkKnsc9kcWLRgY5EYfCLY3smWk3WxPM8CinHa/",60,-3,60,120)
    makeCircle(100,10,10,"yellow")
var randomstuff3 =Math.random()
if(randomstuff3 < 0.6){
makeText("WHALE",60,20,10,6,"orange")
}
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var number= Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(number < 0.33){
    createFirstScene()
    }else if(number < 0.67){
    createSecondScene()
    }else{
    createThirdScene()
    }
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
  
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}