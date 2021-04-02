class Stone {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 0.9,
        'restitution':12,
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 10;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      rectMode(CENTER);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };