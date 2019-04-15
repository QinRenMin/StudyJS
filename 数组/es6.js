let arr = [1,2,3,4,2];
let result = arr.find((item) => {
    return item ===8;
});
console.log(result);
result = (arr.findIndex((item) => {
    return item === 2;
}));
console.log(result);
let arr1 = [1,2,3,NaN,5,NaN];
console.log(arr1.findIndex((item) => Object.is(NaN,item)));
console.log(arr1.includes(1));
console.log(Array.from("123").map((item) => {
    return item - 0;
}));
console.log(Array(7));
console.log(Array.of(7));
for(let e of arr.entries()){
    console.log(e);
}
for(let key of arr.keys()){
    console.log(key)
}
for(let item of arr) {
    console.log(item)
}