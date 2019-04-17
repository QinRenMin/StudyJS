function *setGenerator(){
    yield "hello";
    yield "generator";
    return;
}
let h = setGenerator();
for(let value of h){
    console.log(value)
}
//hello
// generator