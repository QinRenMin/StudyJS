/*
含义：正则匹配字符串，匹配成功返回匹配成功的数组，匹配不成功则返回null
用法：字符串.match(正则)

* */
(function () {
    // let str = '123aa456qq1';
    let str = '1234561';
    let re = /\d/g;
    let re1 = /\d\d/g;
    let re2 = /\d\d\d/g;
    let re3 = /\d{1,5}/g;
    console.log(str.match(re)); //[ '1', '2', '3', '4', '5', '6' ]
    console.log(str.match(re1)); //[ '12', '34', '56' ]
    console.log(str.match(re2)); //[ '123', '456' ]
    console.log(str.match(re3)); //[ '12345', '61' ]

    let age = '65';
    let reg = /(18-19)|([2-5]\d)|(6[0-5])/;
    if(reg.test(age)){
        console.log('aaa');
    } else{console.log('bbb')}


})();