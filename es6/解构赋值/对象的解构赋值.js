/*
* 对象的属性没有次序,变量必须和属性同名才能取到正确的值
* */

let {foo,bar} ={foo:'aaa',bar:'bbb'};
console.log(foo,bar);//aaa bbb

//与顺序无关
let {ba,fo} = {fo:'ccc',ba:'ddd'};
console.log(fo,ba);//ccc ddd

//如果定义的变量找不到对应的同名属性,则返回undefined
let {baz} = {bar:'eeee'};
console.log(baz);//undefined

//解决变量名与属性名不一致的问题
//内部机制先找到同名属性,然后再赋值给对应的变量,真正被赋值的是后者
//ff是匹配的模式,ee才是变量
let{ff:ee}={ff:'eeee'};
console.log(ee); //eeee
// console.log(ff);//ReferenceError: ff is not defined


//嵌套结构对象
let obj = {
    p:['hello',{
        y:'world'
    }]
};
let {p,p:[x,{y}]}=obj;
console.log(p); //[ 'hello', { y: 'world' } ]
console.log(x,y); //hello world
console.log(obj.p[0],obj.p[1].y);//hello world