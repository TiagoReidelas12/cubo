const Motor =Matter.Engine,
Mundo = Matter.World,
Corpos = Matter. Bodies;

var plataformas=[];
function setup() {
createCanvas(windowWidth,windowHeight)

motor = Motor.create()
mundo = motor.world 
  
plataformas.push(new Plataforma(500,height-150,200,20))//1
plataformas.push(new Plataforma(400,height-300,200,20))//2
plataformas.push(new Plataforma(700,height-600,200,20))//4
plataformas.push(new Plataforma(800,height-500,200,20))//3

Lord=new Jogador(450,height-200,50,50)


}


function draw() {
  background("skyBlue")
Motor.update(motor)

Lord.mostrar()
for(var plataforma of plataformas){
  plataforma.mostrar()

  if(LordTocandoPlataforma(Lord,plataforma)){
    Lord.resetarPulos()
  }
  

}
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Lord.mover(0.05)
  }

  else if (keyCode===LEFT_ARROW){
    Lord.mover(-0.05)
  }

  else if (keyCode===UP_ARROW){
    Lord.pular()
  }
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}


function LordTocandoPlataforma(Lord,plataforma){
  const posicaoLord=Lord.corpo.position;
const posicaoPlataforma=plataforma.corpo.position

const tocando =
     posicaoLord.y + Lord.altura / 2 >= posicaoPlataforma.y - plataforma.altura / 2 &&
     posicaoLord.x + Lord.largura / 2 >= posicaoPlataforma.x - plataforma.largura / 2 &&
     posicaoLord.x - Lord.largura / 2 <= posicaoPlataforma.x + plataforma.largura / 2;
 
   return tocando;}


