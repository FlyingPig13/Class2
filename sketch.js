 

function setup () {
  createCanvas(600,600);
  background(255, 255, 255);
 fill((random(255)), (random(255)), (random(255)));

}

function draw() {
  


strokeWeight(0);

var brushWeight = function(n){
  if(keyCode == UP_ARROW){
    n + 1
  }
  else{ if(keyCode == DOWN_ARROW){
    n - 1
  }
  else{ n
  }
}
}

var painter = function(){
    if (mouseIsPressed){
      ellipse(mouseX, mouseY, brushWeight(1), brushWeight(1));
      }
      else{ fill((random(255)), (random(255)), (random(255)));
      
      
      }
    }

painter()
  
 

}