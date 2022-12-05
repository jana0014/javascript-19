class Kafemat {
    voda;
    kafe;
    mleko;
    napraveniKafinja;

    constructor(voda, kafe, mleko) {
        this.voda = voda;
        this.kafe = kafe;
        this.mleko = mleko;
        this.napraveniKafinja = 0;
    }

    makeCoffee() {
        if(this.kafe >= 7 && this.voda >= 100 && this.mleko >= 10) {
            console.log('Kafeto e gotovo!')
            this.kafe -= 7
            this.voda -= 100
            this.mleko -= 10
            this.napraveniKafinja++ 
        } else {
            if(this.kafe < 7) {
                console.log(`Fali ${7 - this.kafe} grama kafe!`)
            }
            if(this.voda < 100) {
                console.log(`Fali ${100 - this.voda} grama voda!`)
            }
            if(this.mleko < 10) {
                console.log(`Fali ${10 - this.mleko} grama mleko!`)
            }

        }
    }
}

const kafemat = new Kafemat(200, 25, 300)
kafemat.makeCoffee();
kafemat.makeCoffee();
kafemat.makeCoffee();
console.log(`Napraveni kafinja ${kafemat.napraveniKafinja}`)