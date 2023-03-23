const person = {
    name: 'Michael',
    course: 'Javascript',
};

console.log(person);

//convert to json
console.log(JSON.stringify(person));

//back
console.log(JSON.parse(person));

//person.name = change value of name

const map = new Map() //func to getting and setting values
map.set(123, 'hello');
console.log(map.get(123));
map.size;
get(0); //undefined

const set = new Set();
set.add('hello');
console.log(set(hello));
set.delete;
set.size;