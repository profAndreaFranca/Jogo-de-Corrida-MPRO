class Form {
  constructor() {
    this.input = createInput("nome");
    this.buttonImg = createImg("./assets/images/start.png");
    this.greetings = createElement("h2");
  }

  //estilizando os elementos
  elementsStyle(){
    this.input.position(380,180);
    this.input.size(180,30);
    this.input.class('customInput')

    this.buttonImg.position(525,250)
    this.buttonImg.size(150,50)

    this.greetings.position(380,180)
  }

  //esconder os elementos
  hide(){
    this.input.hide()
    this.buttonImg.hide()
    this.greetings.hide()
  }
    
  display() {
    this.elementsStyle()
  }
  
}
