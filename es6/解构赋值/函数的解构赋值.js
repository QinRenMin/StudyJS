//函数的参数使用解构赋值

function add([x,,y]) {
    console.log(x+y);
}
add([1,2,3]); //4

//解构赋值也可以使用默认值,解构失败就使用默认值
function fn({x = 0, y = 0} = {}) {
    console.log([x,y]);
}
fn({x:3,y:4}); //[3,4]
fn({x:3}); // [3, 0]
fn({}); //[0,0]
fn();//[0,0]

//对比两种写法
function fn2({x,y} = {x:0,y:0}) {
    console.log([x,y]);
}
fn2({x:3,y:4}); //[3,4]
fn2({x:3}); // [ 3, undefined ]
fn2({}); //[0,0]
fn2();//[ undefined, undefined ]
//这是为函数参数指定默认值,而不是修改变量的值