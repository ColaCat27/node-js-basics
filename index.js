const obj = require('./user');

console.log(`Меня зовут ${obj.name}, мне ${obj.age} лет`);
console.log(`Сейчас мы находимся в директории ${__dirname}, и работаем с файлом ${__filename}`);
obj.sayHello();