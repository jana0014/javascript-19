let person = {
    // properties
    // key -value pairs
    name: "Jana",
    gender: 'female',
    age: 22,
    height: 165,
    weight: null,
    eat: () => {console.log(`${person.name} ate an apple`)}
}

console.log(person)

person.gender = 'male'
delete person.gender
console.log(person)
console.log(person['gender'])

// spread syntax // destructor

let person2 = Object.assign({profession: 'programmer'}, person)
let person3 = {
    ...person,
    profession: 'accountant',
    age: 40
}

person2.age = 20;
person2.gender = 'male'
person2.eat();

console.log(person2)
console.log(person3)