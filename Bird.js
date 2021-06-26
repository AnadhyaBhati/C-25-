class Bird extends BaseClass{
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      super(x, y, 50, 50, options);
      this.image=loadImage("sprites/bird.png")
      
    }
    display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      super.display();
    }
}