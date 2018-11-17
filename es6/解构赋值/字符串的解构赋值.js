/*
* 字符串被转换成了另一个类数组
* */
const [a,b,c,d,e] = 'hello';
console.log(a,b,c,d,e);//h e l l o

//对数组的length属性进行解构赋值
const{length:len} = 'hello';
console.log(len);//5

