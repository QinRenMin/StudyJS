/* 什么是闭包？
定义：函数嵌套函数，内部函数可以引用外部函数的参数和变量，并且参数和变量不会被垃圾回收机制收回
如下面函数：*/

function aa() {
    let a = 1;
    return function () {
        a++;
        console.log(a);
    }
}
let b =aa();
b(); //2
b();//3

/* 闭包的好处
1）将变量长期存储在内存中
2）避免全局变量的污染
3）可以存在私有成员*/

//用法
//1.模块化代码

let aaa = (function () {
    let a = 1;
    return function () {
        a++;
        console.log(a);
    }
})();
aaa();
aaa();



let bbb = (function () {
    //私有成员
    let a = 1;
  function bbb() {
        a++;
        console.log(a);
    }
    function ccc(){
      a++;
      console.log(a);
    }
    return{
        a:a,
        b:bbb,
        c:ccc
    }
})();

console.log(bbb.a); //1
aaa.b();//2
aaa.c();//3
console.log(bbb.a); //1

//2.在循环中直接找到对应元素的索引

let ali = document.getElementsByTagName('li');
for( var i = 0 ; i < ali.length; i++)
    {
        (function (a) {
            ali[i].onclick = function () {
                alert(a);
            }
        })(i);
    }

   // let ali = document.getElementsByTagName('li');
   //  for(var i = 0; i<ali.length; i++){
   //      ali[i].onclick = (function (a) {
   //          return function () {
   //              alert(a);
   //          }
   //      })(i)
   //  }

//使用let 解决（let支持块级作用域）
//
//     let ali = document.getElementsByTagName('li');
//     for(let i = 0; i<ali.length; i++){
//         ali[i].onclick = function () {
//             alert(i);
//         }
//     }

 //解决闭包引起的内存泄露问题（IE）
//如果闭包作用域中存在一个html元素，那么就意味着该元素将无法销毁

var div  =document.getElementById('div');
    div.onclick = function () {
        alert(div.id);
    };

//上面就会造成在IE下的内存泄露问题
//解决方式

window.onunload = function () {
        div.onclick = null;
    };
//或者
var id = div.id;
div = null;
