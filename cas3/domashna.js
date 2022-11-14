// zadacha 1

const numbers = [10, 20, 30, 40, 50]
const names = ['Jana', 'Dona', 'Bojana', 'Bafi', 'Igor']
const result =[]

for (let i = 0; i<numbers.length; i++){
    result.push(numbers[i])
    result.push(names[i])
} console.log(result)

// zadacha 2

const niza1 = [121, 15, 45, 26, 33, 192]
let najgolem = niza1[0]
let najmal = niza1[0]

for (let i = 1; i < niza1.length; i++){
    if(niza1[i] > najgolem){
        najgolem = niza1[i]
    }

    if(niza1[i] < najmal){
        najmal = niza1[i]
    }
} console.log("Najgolem broj e " + najgolem + ",a najmal e " + najmal + ".")


//zadacha 3


// zadacha 4

const niza2 = ['z', 'd', 'r', 'a', 'v', 'o']
let zbir = ''

for(let i = 0; i<niza2.length; i++){
    zbir += niza2[i]
} console.log(zbir)

// zadacha 5

const niza3 = [1, 2, [3, 4], 5, 6]
const niza4 = []

for(let i = 0; i < niza3.length; i++){
    if(niza3[i].length) {
        niza3[i].forEach(el => {
            niza4.push(el)
        })
    } else {
        niza4.push(niza3[i])
    }
} console.log(niza4);