
const newPerson = {
    name: "aniq",
    age: "22",
    hobby: ['coding', 'gaming']
}

console.log(newPerson.name)
console.log(newPerson.hobby[1])
console.log('------------------------------------------------------------------------')

function Person() {
    this.name = 'Jonathan',
    this.type = 'warrior',
    this.hobbies = ['Tanking', 'DPS', 'Support'],
    this.greet = function() {
        console.log('Hola Mates.');
    },
    this.money = {
        gold: 120,
        silver: 100,
    }

}

const guy = new Person();

console.log(typeof guy);
console.log(guy.name);
console.log(guy.hobbies[0]);
guy.greet();
console.log(guy.money.gold);
console.log('------------------------------------------------------------------------')


const dog = new Object ( { 
    name: 'tommy',
    age: 8,
    hobbies: ['running', 'eating', 'playing'],
    greet: function() {
        console.log('bow bow bow');
    }
});

console.log(typeof dog); // object

// accessing the object value
console.log(dog.name);
console.log(dog.hobbies[0]);
dog.greet();