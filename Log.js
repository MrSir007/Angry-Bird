class Log extends BaseClass {
  constructor(x,y,height,angle) {
    super(x,y,12,height,angle);
    this.image = loadImage("images/wood2.png");
    Matter.Body.setAngle(this.body,angle);
  }
  display() {
    super.display();
  }
}