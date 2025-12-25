const cat = {
    name: 'Whiskers',
    age: 3,
    Whatname : function() {
        return this.name;
    }
};
const dog = {
    name: 'Buddy',
    age: 5,
    Whatname : cat.Whatname
};
console.log(cat.Whatname()); // Output: Whiskers
console.log(dog.Whatname()); // Output: Whiskers