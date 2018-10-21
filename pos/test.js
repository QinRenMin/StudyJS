// // let obj = {name:'zz',age:32};
// // let proxy = new Proxy(obj,{
// //     get(target,key,proxy){
// //         return target[key];
// //     }
// // });
// // console.log(proxy.age);
// //
// //
// // (function () {
// //     let b = 2;
// //
// //     foo('let b = 3',1);
// //
// //     function foo(str,a) {
// //         eval(str);
// //         console.log(a,b);
// //     }
// //
// // })();
// //
// // console.log(a); //undefined
// // var a = 2;
// //
// // d = 3;
// // var d;
// // console.log(d); //3 先声明，后赋值啊
//
//
//
//
// // function aaa() {
// //     let a = 1;
// //     return function () {
// //         a++;
// //         console.log(a);
// //     }
// // }
// // let b =aaa();
// // b();
// //  b();
// //
// // let aaa = (function () {
// //     let a = 1;
// //     return function () {
// //         a++;
// //         console.log(a);
// //     }
// // })();
// // aaa();
// // aaa();
//
//
//
// // let aaa = (function () {
// //     //私有成员
// //     let a = 1;
// //   function bbb() {
// //         a++;
// //         console.log(a);
// //     }
// //     function ccc(){
// //       a++;
// //       console.log(a);
// //     }
// //
// //     return{
// //         a:a,
// //         b:bbb,
// //         c:ccc
// //     }
// // })();
// //
// // console.log(aaa.a); //1
// // aaa.b();//2
// // aaa.c();//3
// // console.log(aaa.a); //1
// // function fun(n,o) {
// //      // console.log(n,o);
// //      console.log(o);
// //
// //     return {
// //         fun:function(m){
// //             // console.log(m+','+n);
// //             return fun(m,n);
// //         }
// //     };
// // }
// // var a = fun(0);a.fun(1);a.fun(2);  a.fun(3);//undefined,0,0,0
// // var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
// // var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1
//
// for (var i = 1; i <= 5; i++) {
//
//     setTimeout( function timer() {
//
//         console.log(i);
//
//     }, 1000 );
//
// }
//
// for (var i = 1; i <= 5; i++) {
//
//     (function(i){
//
//         setTimeout( function timer() {
//
//             console.log(i);
//
//         },  1000 );
//
//     })(i);
//
// }
//
// for (let i = 1; i <= 5; i++) {
//
//     setTimeout( function timer() {
//
//         console.log(i);
//
//     }, 1000 );
//
// }

let a = 4.5;
a =a.toString().split('.');
console.log(a.length)