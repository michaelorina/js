var varNum = 0;
let letNum = 0;

console.log('varNum', varNum);
console.log('letNum', letNum);

//What is the difference?
/*
hoisting 
varNum = undefined
let not hoisted at all*/

function test(){
    

    if (true){
        var varNum = 0;
        let letNum = 0;
    }
    console.log('varNum', varNum);
    console.log('letNum', letNum);
}

test();

//varNum prints
//letNum not defined

//which one should we be using?
//let because it is more natural

const constNum = 0;
//does what let does but the value is permanent can
//consNum cannot be reassigned

const arr = [1,2,3];
//you can add into the array;
arr.push(4);
//same array but one more value into it
