/**
 * Object Destructuring
 */

const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};
// const name = person.name;
// const age = person.age;

// ES6 feature: destructuring
const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`);
const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}
const {publisher: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

/**
 * Array Destructuring
 */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//const [street, city2, state, zip] = address;
const [, city2 ='Palo Alto', state = 'CA'] = address;
console.log(`You are in ${city2} ${state}`);

const item =['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , midCost] = item;
console.log(`A medium ${itemName} costs ${midCost}`);