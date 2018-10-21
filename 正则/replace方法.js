/*
含义：正则匹配字符串，用新的字符替换匹配成功的字符,匹配不成功返回原串
用法：字符串.replace(正则)

* */
(function () {
    let str = 'asd12zxc2as';
    let re = /asd/;
    let re1 = /asd/;
    let re2 = /f/;
    console.log(str.replace(re,'q')); //q12zxc2as
    console.log(str.replace(re1,'w')); //w12zxc2as
    console.log(str.replace(re2,'s')); //asd12zxc2as
})();