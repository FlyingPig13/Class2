 

function setup () {
  createCanvas(600,600);
  background(255, 255, 255);
 fill((random(255)), (random(255)), (random(255)));

}

function draw() {
  
strokeWeight(0);
var circleSize = 15


var brushWeight = function(){
  if(keyCode == UP_ARROW){
   return circleSize + 5
  }
  else { if(keyCode == DOWN_ARROW){
    if (circleSize >= 5){
      return circleSize - 5
  }
    else { return 0
      }
    }
  else { return circleSize
  }
}
}


var painter = function(){
    if (mouseIsPressed){
      ellipse(mouseX, mouseY, brushWeight(), brushWeight());
      }
      else{ fill((random(255)), (random(255)), (random(255)));
      
      
      
      }
    }


painter()
}
