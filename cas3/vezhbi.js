// niza od broevi koja ja prikazuva prosecnata temperatura z asekoj den od nedelata
// treba da se napise programa koj asto ke ja presmeta proecnta temperatura za cela nedela

/* const temperatures = [ 15, 16, 17, 20, 15, 20, 21]

let sum = 0;

for( const temp of temperatures){
    sum = sum + temp
}
console.log(sum / temperatures.length)
*/

// da se ispecati sekoj vtor/tret element od proizvolna niza

const array = [
    'Cat',
    'Dog',
    'Rabbit',
    'Parrot',
    'Horse',
    'Goat',
]
for (let i = 1; i < array.length; i+=2){
    console.log(array[i])
}
//what the actual fuck
for (let i = 0; i < array.length; i++){
    if((i+1) % 3 === 0 ) {
        console.log(array[i]);
    }
}

// imame niza od random vrednosti i megju niv ima i nevalidni vrednosti (null, undefined). treba da se napise programa koja sto je gi isfiltrira nevalidnite vrednosti i kje kreira nova niza od samo onie elementi koi se validni. za kraj novata niza od validni vrednosti treba da se ispecati.

const validity = [1, 2, null, 'Username', undefined, 6, 'Password', NaN, '', 0 ,true, false]

// Output => [1, 2, 'Username', 6, 'Password']

const valid = []

/* for (let i = 0; i < validity.length; i++){
    const el = validity[i]
    if (validity[i]) valid.push(validity[i])
    // if (el) valid.push(el) - istoto e
}
let j = 0;

for (let i = 0; i < validity.length; i++) {
    if (validity[i]) {
        valid[j] = validity[i]
        j++
    }
} console.log(valid)


for (let i = 0; i < validity.length; i++) {
    if (validity[i]) valid[i] = validity[i]
} console.log(valid)
*/

for (const el of validity){
    if (el) valid.push(el)
} 

validity.forEach((el, i) => {
    console.log(i)
    if (el) valid.push(el)
}) 
console.log(valid)
