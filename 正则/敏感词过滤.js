(function () {
    let str = '嘿嘿中国呵呵呵少年sp';
    let re = /嘿嘿|呵呵呵|sp/g;
    let result = str.replace(re,function (str0,str1,str2,str3) {
          // console.log(str0)
          // console.log(str1)
          // console.log(str2)
          // console.log(str3)
        console.log(arguments)

        let temp = '';
        if(str){
            for(let i = 0; i < str.length; i++){
                temp+='*'
            }
        }
        // console.log(temp)
        return temp;
    });
    console.log(result); //**中国***少年**
})();