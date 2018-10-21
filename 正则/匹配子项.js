
/*
匹配子项：小括号（分组操作）
把正则整体看做是父亲，从左起第一个叫做第一个子项，依次类推
* */
(function () {
    let str = '2018-09-04';
    let re = /(\d+)(-)/g;
    str.replace(re,function ($0,$1) {
            console.log($0);
            console.log($1+('aaa'));
    });

})();