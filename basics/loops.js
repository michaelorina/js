for (let i = 0; i < 4; i++){
    console.log(i);
    if (i ===1){
        break;
    }
}

for (let i = 0; i < 4; i++){
    
    if (i ===1){
        continue;
    }
    console.log(i);
}

//while loops

let i = 0;
while (i<4){
    console.log(i);
    i++;
}

//do while
let i = 0;
do{
    console.log(i);
    i++; 
}while (i<4); 

for (const value of [1,2,3]){
    console.log(value);
}

const obj = {
    name: 'Michael',
    age: 22,
};

for (const key in obj){
    conssole.log(key, obj[key]);
}

//function on eacha array

[1,2,3].forEach(function(value){
    console.log(value);
})