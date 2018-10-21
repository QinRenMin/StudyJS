/*
检测replace回调函数的参数问题
* */
(function(){
    let str = 'aasdEeAefhghhhce';
    let re = /e+/ig;
    str.replace(re,function(){
        console.log(arguments);
    })
    //{ '0': 'Ee', '1': 4, '2': 'aasdEeAefhghhhce' }
    // { '0': 'e', '1': 7, '2': 'aasdEeAefhghhhce' }
    // { '0': 'e', '1': 15, '2': 'aasdEeAefhghhhce' }
    //参数对应：匹配到的字符(串)，下标，原串
    let str1 = 'aasdEeAefhghhhce';
    let re1 = /(e)\1*/ig;
    str1.replace(re1,function(){
        console.log(arguments);
    })
    // { '0': 'Ee', '1': 'Ee', '2': 4, '3': 'aasdEeAefhghhhce' }
    // { '0': 'e', '1': 'e', '2': 7, '3': 'aasdEeAefhghhhce' }
    // { '0': 'e', '1': 'e', '2': 15, '3': 'aasdEeAefhghhhce' }
    //参数对应：匹配到的字符(串)，匹配到的首字符，下标，原串
})()