throw 'Oh no';

throw new Error('Oh no');

try{
    throw new Error('Oh no');  
}catch(error){
    console.log(error)
}