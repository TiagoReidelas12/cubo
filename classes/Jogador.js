class Jogador{
    constructor(x,y,largura,altura,){
        this.corpo=Matter.Bodies.rectangle(x,y,largura,altura,)
this.largura= largura
this.largura= altura
this.pulosDisponiveis=4
Matter.World.add(mundo,this.corpo)

}

    mostrar(){
        const posiçao = this.corpo.position
        fill("red")
        rectMode(CENTER)
        rect(posiçao.x,posiçao.y,this.largura,this.altura)
    }
    mover(direcao){
        Matter.Body.applyForce(this.corpo,this.corpo.position,{x:direcao,y:0})
    }
    pular(){
        
        if(this.pulosDisponiveis>0){

        
        Matter.Body.applyForce(this.corpo,this.corpo.position,{x:0,y:-0.05})
        this.pulosDisponiveis--
    }

        
    }

    resetarPulos(){
        this.pulosDisponiveis=4
    }
}