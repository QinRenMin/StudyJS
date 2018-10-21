/*
this并不指向foo
* */

// (function(){
//    function foo(num) {
//
//        console.log('foo ' +num);
//
//        this.count++;
//
//    }
//     foo.count = 0;
//    for(let i = 0; i < 7; i++) {
//        if(i > 4) {
//            foo(i);
//
//        }
//
//
//    }
//     console.log(foo.count) // 0;
//
// })()

/*
使用call解决this指向问题
* */
(function(){
    function foo(num) {

        console.log('foo ' +num);

        this.count++;


    }
    foo.count = 0;
    for(let i = 0; i < 7; i++) {
        if(i > 4) {

            foo.call(foo,i);
        }


    }
    console.log(foo.count) // 2;
})()

/*
使用词法作用域
* */
(function(){
    function foo(num) {
        console.log('foo ' +num);
        foo.count++;
    }
    foo.count = 0;
    for(let i = 0; i < 7; i++) {
        if(i > 4) {
            foo(i);
        }
    }
    console.log(foo.count) // 2;
})()