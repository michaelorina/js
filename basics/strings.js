let str = 'abcd';

console.log(str);
console.log(str + 'efg'); //concatenation
console.log(str > 'efg'); //false
console.log(str === 'abcd'); //true
console.log('Hello this is a single quote\'');
//backslash \n
console.log(`Hello
World!`);
console.log(`Result ${2+3}`);
console.log('This is a very' +
            'long string'); 

console.log('This is a very \
            long string');

console.log(str[1]);
console.log(str.includes('e'));
//toUpperCase
//toLowerCase
//substr [1,2]
//slice[1, 2]
//all functions do not change string
//padStart [10, '-']
//padEnd
//trim str.trim() trimStart trimEnd
//split ','