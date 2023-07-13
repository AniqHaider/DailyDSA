// Remove Property From A Object
const cat = { 
    name: 'carla',
    age: 3,
    hobbies: ['sleeping', 'eating', 'annoying others'],
    greet: function() {
        console.log('meow meow');
    },
    stats: {
        speed: '20 km/h' ,
        sleeptime: '14 hours a day',
    }
};

console.log(cat);
delete cat.greet;
delete cat.stats['speed'];
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(cat);