function setup () {
  createCanvas(600,600);
  background(40, 40, 200);
 fill((random(255)), (random(255)), (random(255)));
}

function draw() {
 
strokeWeight(0);
  function painter(){
    if (mouseIsPressed){
     ellipse(mouseX, mouseY, random(50), random(50));
      }
      else{ fill((random(255)), (random(255)), (random(255)));
      }
    }

painter()
  
 

}