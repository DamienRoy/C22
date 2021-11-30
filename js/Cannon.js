class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.cannonbase = loadImage("./assets/cannonBase.png")
   this.Cannoning = loadImage("./assets/cannon.png")
    
  }
    display(){
      push ()
      imageMode(CENTER)
      image(this.cannon,this.x,this.y,this.width,this.height)
      pop ()
      image(this.cannonBase,70,20,200,200)
    }  
}

