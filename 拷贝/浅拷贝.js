// let a = [1,2,3,4];
// b = a;
// console.log(a === b);
// a[0] = 0;
// console.log(b);
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(let key in obj){
             if(obj.hasOwnProperty(key)){
            //     //判断ojb子元素是否为对象，如果是，递归复制
            //     if(obj[key]&&typeof obj[key] ==="object"){
            //         objClone[key] = deepClone(obj[key]);
            //     }else{
            //         //如果不是，简单复制
            //         objClone[key] = obj[key];
            //     }
            objClone[key] = obj[key];
            }
        }
    }
    return objClone;
}
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);
console.log(Array.isArray(a));
console.log(typeof a[1]);