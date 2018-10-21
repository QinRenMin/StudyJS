/*

找出字符串中的数字
* */

(function(){
    function num(str) {
        let arr = [];
        let temp = '';
        for(let i = 0; i < str.length; i++) {

            if(str.charAt(i) <= '9' && str.charAt(i) >= '0') {
                //arr.push(str.charAt(i))

                temp += str.charAt(i);
            }
            else {
                if(temp){
                    arr.push(temp);
                    temp = '';
                }
            }

        }
        if(temp){
            arr.push(temp);

        }
         console.log(arr)
    }
    let str = '123asf434sf43621wq345';
    num(str);
    let str1 = '123asf434sf43621wq345';

    let re = /\d+/g;
    console.log(str.match(re))

})();