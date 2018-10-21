(function(){
    let str = '2342124994b';
    //规定qq号不能0开头
    //位数5-11
    //全数字，没有特殊字符

    let re = /^[^0][0-9]{4,10}$/;
    if(re.test(str)){
        console.log('111');
    }else{console.log('000')}
})()