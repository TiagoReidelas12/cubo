class Plataforma{
    constructor(x,y,largura,altura){
this.corpo=Matter.Bodies.rectangle(x,y,largura,altura,{isStatic:true})
this.largura= largura
this.altura= altura;
Matter.World.add(mundo,this.corpo)

    }

    mostrar(){
const posiçao = this.corpo. position;
fill("green")
rectMode(CENTER)
rect(posiçao.x,posiçao.y,this.largura,this.altura);
    }
        
    
}