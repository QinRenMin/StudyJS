/*
* \uxxxx形式表示一个字符 xxxx表示字符的Unicode码点
* 这种表示方法的范围在:\u0000到\uFFFF范围之间,超出范围的需要两个字节表示
* '吉'  -> \uD842\uDFB7
* 解决超过范围:加上大括号即可
* */
//es6表示字符串的方法
console.log('\z' === 'z'); //true
console.log('\172' === 'z');
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');
console.log('\u{7A}' ==='z');