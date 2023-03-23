function addTwo(num){
    return num + 2;
}

console.log(addTwo(3));

function callFunc(func, param){
    console.log(func(param));
}

callFunc(addTwo, 10);

//typeof function but it an object