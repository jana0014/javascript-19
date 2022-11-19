// zadacha 1

const emails = ['test@test.com', 'test123123', 'koco@koco.net', 'test@koco.co']
const invalidEmails = []

emails.forEach(email => {
    if(!checkValidity(email)) {
        invalidEmails.push(email)
    }
})

function checkValidity (email) {
    if(email.includes('@') && email.includes('com') || email.includes('net')) {
        return true

    } 
    return false 
}
console.log(invalidEmails)

// zadacha 2

const names = ['jana gligorova', 'johnny Bravo', 'SaShko koCEv' ]
const result = []

for(let i = 0; i < names.length; i++){
    result.push(convertName(names[i]))
}

function convertName (name) {
    let newName = ''
    for(let i = 0; i < name.length; i++) {
        if( i == 0) {
            newName += name[0].toUpperCase()
        }

        else if(name[i - 1] == ' ') {
            newName += name[i].toUpperCase()
        }
        else newName += name[i].toLowerCase()

    }  return newName
} 
console.log(result)

// zadacha 3

const myAnimals = [
    { type: 'Horse', numberOfLegs: 4 },
    { type: 'Sheep', numberOfLegs: 4 },
    { type: 'Chicken', numberOfLegs: 2 },
    { type: 'Fish', numberOfLegs: 0 },
    { type: 'Dog', age: 7, numberOfLegs: 4 },
    { type: 'Goat', numberOfLegs: 4 }
]

function countLegs() {
    let legs = 0
    myAnimals.forEach(animal => {
        legs += animal.numberOfLegs
    }) 
    return legs
}
console.log(countLegs())

// zadacha 4

const team = {
    wins: 3,
    losses: 4,
    draws: 2
}

function countPoints() {
    let result = team.wins*3 + team.losses*(-2) + team.draws*1
    return result
}
console.log(countPoints())

// zadacha 5

const myBooks = [
    {
      author: 'J.R.R. Tolkien',
      name: 'The Hobbit',
      year: 1910,
      ISBN: 3,
      price: 1000,
      read: true
    },
    {
      author: 'Fyodor Dostoyevsky',
      name: 'Crime and punishment',
      year: 1887,
      ISBN: 1,
      price: 500,
      read: false
    },
    {
      author: 'J.K. Rowling',
      name: 'Harry Potter',
      year: 2000,
      ISBN: 2,
      price: 600,
      read: false
    }
    
]

function sortByAuthor () {
    let result = myBooks.sort((a,b) => {
        return a.author.localeCompare(b.author)
    })
    return result
}
console.log(sortByAuthor())