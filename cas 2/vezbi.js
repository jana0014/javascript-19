
/*if (broj === 0){
    console.log("Brojot ne e nitu paren nitu neparen.")
} else {
    if (broj % 2 === 0){
        console.log("Brojot e paren.")
    } else {
        console.log("Brojot e neparen.")
    }
}

let vozrast = prompt();

if (vozrast >= 21){
    console.log("Moze da pie alkohol.")
} else if (vozrast >= 16) {
    console.log("Moze da vozi avtomobil.")
} else (vozrast >= 18) {
    console.log("Moze da glasa na izbori.")
}

let vreme = prompt();

if(vreme >= 1 && <= 12) {
    console.log("Dobro utro.")
} else if (vreme >12 && <= 18) {
    console.log("Dobar den")
} else (vreme >18 && <=24) {
    console.log("Dobra vecer")
}*/

const month = 6
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
    console.log("Mesecot ima 31 den.")
} else if (month === 4 || month === 6 || month === 9 || month === 11 ) {
    console.log("Mesecot ima 30 dena.")
}else if ( month === 2 ){
    console.log("Mesecot ima 28 dena.")
}else {
    console.log("Ne postoi takov mesec!")
}