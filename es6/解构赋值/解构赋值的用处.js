//变换变量的值
let [x,y] = [1,2];
console.log(x,y); //1,2
[x, y] = [y,x];
console.log(x,y); //2,1

//函数返回多个值
//返回一个数组或者对象
function fn(){
    let x = 1;
    let y = 2;
    return [x,y];
}
function fn2(){
    return{
        foo:'aa',
        bar:'zz'
    }
}

//参数定义
//解构赋值可以方便的将一组参数与变量名对应
//参数有序用数组,无序用对象


//提取JSON数据
let jsonData = {
    id:111,
    status:'OK',
    data:['aa','bb']
};
let{id,status,data:number}=jsonData;
console.log(id,status,number);//111 'OK' [ 'aa', 'bb' ]

//指定函数参数的默认值

//遍历Map结构,获取键值和value
let map = new  Map();
map.set('a',1);
map.set('b',2);

for(let [key,value] of map){
    console.log(key + ' is ' + value)//a is 1
                                     //b is 2
}

//输入模块的指定方法