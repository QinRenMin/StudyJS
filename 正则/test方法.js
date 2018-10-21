/*
含义：正则匹配字符串，返回布尔值
写法：正则.test(字符串)
* */
(function(){
    let str = 'abc';
    let re =/a/;
    let re1 =/abc/;
    let re2 =/w/;
    console.log(re.test(str)); //true
    console.log(re1.test(str)); //true
    console.log(re2.test(str)); //false
})();