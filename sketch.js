 var circleSize = 15

function setup () {
  createCanvas(600,600);
  background(255, 255, 255);
 fill((random(255)), (random(255)), (random(255)));

}

function draw() {
  
strokeWeight(0);



var brushWeight = function(){
  if(keyIsDown(UP_ARROW)){
   return circleSize = circleSize + 1
  }
  else { if(keyIsDown(DOWN_ARROW)){
    if (circleSize >= 5){
      return  circleSize = circleSize - 1
  }
    else {return circleSize = 0
      }
    }
  else { return circleSize
  }
}
}

var weight = brushWeight();

var painter = function(){
    if (mouseIsPressed){
      ellipse(mouseX, mouseY, weight, weight);
      }
      else{ fill((random(255)), (random(255)), (random(255)));
      }
    }


painter()
console.log(weight)
console.log(brushWeight())
}
