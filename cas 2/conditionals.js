// USLOVNI KOMANDI

// if (uslov -logicki iskaz){
    //code block
    //komanda 1;
    //komanda 2;
    //komanda 3;
//}

// logicki operatori >,<,>=,==, !=
const a = 10, b = 12;
const uslov = a !=b; //ovaa logicka operacija vrakja TRUE ili FALSE

// boolean type = true/false

// if-else structure
if (uslov) {
    console.log("a ne e ednakvo na b")
} else {
    console.log("a e ednakvo na b")
}

const broj1 = 10, broj2 = 5;

if ( broj1 > broj2) {
    console.log(broj1 + " e pogolem od " + broj2)
} else if  ( broj1 < broj2) {
    console.log( broj1 + " e pomal od " + broj2)
}else {
    console.log(broj1 + " e ednakov na " + broj2 )
}

if ("Aleksandar" === "Ana"){
    console.log("Iminjata se isti")
} else{
    console.log("Iminjata ne se isti")
}

//one-liner - ternaren operator za sporedba
//const names = "Ana" === "Ana" ? "Iminjata se isti" : "Iminjata ne se isti"
//console.log(names)

const water = 100;
const coffee = 20;

// ili- operator
if ( water < 20 || coffee < 10) {
    // ovoj operator se pisuva dokolku e ispolnet barem eden od uslovite
    console.log("Error")
}

// logicko i- operator
if (water > 20 && coffee > 10) {
    //ovoi blok moze da se izvrsi samo dokolku site uslovi se ispolneti
    console.log("Moze da napravime kafe")
}

// switch-case struktura

const animal = "Cat"
switch(animal) {
    case "Parrot": {
        console.log("This animal can sign!")
        break
    }

    case "Dog": {
        console.log("This animal can bark!")
        break
    }

    case "Cat": {
        console.log("This animal can purr!")
        break
    }

    default: {
        console.log("Unknown animal!")
    }
}
