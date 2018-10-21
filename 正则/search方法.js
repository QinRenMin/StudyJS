/*
含义：正则匹配字符串，匹配成功返回匹配位置，否则返回-1，相当于indexOf
用法：字符串.search(正则)
注意：正则表达式的默认行为是区分大小写的
如果想要不区分大小写，在后面添加i
匹配成功则返回第一次匹配成功的值
* */
(function () {
    let str = 'asd12zxc2as';
    let re = /S/;
    let re1 = /S/i;
    let re2 = /aS/i;
    console.log(str.search(re)); //-1
    console.log(str.search(re1)); //1
    console.log(str.search(re2)); //0
})();