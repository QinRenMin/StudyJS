let [a,b] = [5,10];

function tag(s,v1,v2) {
    console.log(s); //[ 'hello ', ' world ', '' ]
    console.log(v1); //5
    console.log(v2); //10
}
tag `hello ${a+b} world ${a * b }`;