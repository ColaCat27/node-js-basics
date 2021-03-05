const user = {
    name: 'Vladislav',
    age: 25,
    sayHello() {
        return console.log(`Hello, my name ${this.name}, age ${this.age}`);
    }
}

module.exports = user;