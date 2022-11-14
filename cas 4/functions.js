// function declaration

function myFirstFunction (greeting, name) {
    // kod sto ke se izvrsuva od f-jata
    // function body

    console.log(greeting + name)

    // return value
    return
}
// function call/ function invocation

myFirstFunction('Hello ', 'Jana ')

function sum(num1, num2) {
    let result = num1 + num2// const result postoi samo vo opseg na ovaa f-ja
    return result
}

let result = sum(4, 5) // postoi vo cel fajl
console.log(result)

// da se napise f-ja koja kako parametar dobiva ime vo tekstualen format (string)
//i gi vrakja inicijalite od zadadenoto ime( return na iniicijali)
// "John Ronald Reuel Tolkien" ===> 'JRRT'

function getInitials(name) {
    let initials = ''
    const nameArray = name.split(' ')
    for(const word of nameArray) {
        initials += word.charAt(0)
    }
    return initials
}

console.log(getInitials("John Ronald Reuel Tolkien"))

// da se napise f-j akoja sto kako parametar prima temperatura (brojka) vo farenhajtovi stepeni i treba da ja vrati nejzinata vrednost vo celziusovi. formula za konverzije e 
// 1c = ((1f - 32) *5) /9

function convertFahrenheitToCelsius(fahrenheit){
    let celsius = ((fahrenheit - 32) * 5) / 9
    return celsius
}
console.log(convertFahrenheitToCelsius(100))

// da se napise f-ja koja sto ke konvertira utc datum vo sledniot format ==> 'dd/mm/yyyy'

// const date = new Date() // ova vrakja datum vo utc time stamp
// const month = date.getMonth() // 11
// date.getFullYear() // 2022
// date.getDay // 14
// date.getHours() // 21
// date.getMinutes() // 45
// // 14/11/2022 - 21:45

function convertDate() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    //string template 
    return `${day}/${month}/${year} - ${hours}:${minutes}`

    // return day + '/' + month + '/' + year + '/' + hours + ':' + minutes
} console.log(convertDate())