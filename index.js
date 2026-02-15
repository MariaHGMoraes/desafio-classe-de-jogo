class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {

        let ataque = ""

        if (this.tipo === "mago") {
            let ataques = ["magia", "bola de fogo", "raio mágico"]
            let numeroAleatorio = Math.floor(Math.random() * ataques.length)
            ataque = ataques[numeroAleatorio]

        } else if (this.tipo === "guerreiro") {
            let ataques = ["espada", "machado", "lança"]
            let numeroAleatorio = Math.floor(Math.random() * ataques.length)
            ataque = ataques[numeroAleatorio]

        } else if (this.tipo === "monge") {
            let ataques = ["artes marciais", "golpe rápido", "chute giratório"]
            let numeroAleatorio = Math.floor(Math.random() * ataques.length)
            ataque = ataques[numeroAleatorio]

        } else if (this.tipo === "ninja") {
            let ataques = ["shuriken", "ataque furtivo", "katana"]
            let numeroAleatorio = Math.floor(Math.random() * ataques.length)
            ataque = ataques[numeroAleatorio]
        }

        console.log("o " + this.tipo + " atacou usando " + ataque)
    }
}


let heroi1 = new Heroi("Arthus", 30, "mago")
let heroi2 = new Heroi("Kratos", 40, "guerreiro")
let heroi3 = new Heroi("Lee", 25, "monge")
let heroi4 = new Heroi("Hanzo", 28, "ninja")

let listaHerois = [heroi1, heroi2, heroi3, heroi4]


for (let i = 0; i < listaHerois.length; i++) {
    listaHerois[i].atacar()
}
