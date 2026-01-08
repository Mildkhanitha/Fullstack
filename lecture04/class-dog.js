class dog {
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log("this is "+ this.name+"!");
    }
    static bark(){
        console.log("woof woof!");
    }
}
const myDog = new dog("Buster");
myDog.introduce();
dog.bark();
myDog.bark(); // This will cause an error because bark is a static method