/*
* 构造一个函数func(str1,str2),使用substr()方法,判断str1是否以
str2结尾,返回true或false
例如:
func('an apple','apple') //true
func('not an apple','le') //true
* */
function fun(str1,str2) {
    str1 = str1.split(" ").join("");
    return str1.substr(str1.length-str2.length) === str2;
}
console.log(fun('an apple','ple'));//true