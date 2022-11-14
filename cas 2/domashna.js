const number1 = 15
const number2 = 7
const operation = '%'


if (operation === '+') {

    console.log(number1 + number2)
} else if (operation === '-') {

    console.log(number1 - number2)
} else if (operation === '*') {

    console.log(number1 * number2)
} else if (operation === '/') {

    if (number2 == 0){


        console.log("Ne se deli so 0!")
    }else
    console.log(number1 / number2)
} else if (operation === '%') {

    if (number2 === 0){

        console.log("Ne se deli so 0!")
    } else
    console.log(number1 % number2)
}