// zadacha 1
const array1 = [1, 2, 3, 4, 5, 11, 12]
const array2 = [6, 7, 8, 9, 10]

const result = []
const len = array1.length > array2.length ? array1.length : array2.length

for(let i = 0; i < len; i++){
    const el1 = array1.shift()
    const el2 = array2.shift()

    if(el1)result.push(el1)
    if(el2)result.push(el2)
} console.log(result)

// zadacha 2
const numbers = [1, 2, 3, 4, 5, 11, 12, 0]

if (!numbers.length){
    console.log('List is empty.')
} else{
    // let min = numbers[0]
    // let max = numbers[0]

    // for(const num of numbers){
    //     if (num < min){
    //         min = num
    //     } else if (num > max) {
    //         max = num
    //     }
    // }
}console.log(Math.min(...numbers), Math.max(...numbers))

//zadacha 3

const duplicates = [1, 1, 3, 4, 5, 6, 6, 6, 7]
const duplikati = []

// brute force algoritam
for (let i = 0; i < duplicates.length; i++){
    for(let j = 0; j < duplicates.length; j++){
        if(i !== j){
            if(duplicates[i] === duplicates[j]){
                duplikati.push(duplicates[j])
            }
        }
    }
} console.log(duplikati)

// zadacha 4

const arrayOfCharacters = ['z', 'd', 'r', 'a', 'v', 'o']
let text =[]

// for (let i = 0; i < string.length; i++){
//     text += string[i]
// } 
text = arrayOfCharacters.join('')

console.log(text)

console.log(text.split(''))

// zadacha 5

const complex = [1, 2, [3, 4],[100, 101], 5, 6]
const flat = []
const subArrays = []

for(const el of complex){
    if(!Array.isArray(el)) {
        flat.push(el)
    } else{
        subArrays.push(...el)
    }
} 
flat.push(...subArrays)
console.log(flat)