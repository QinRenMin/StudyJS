// var readline = require('readline')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on('line', function(line) {
//     var tokens = line.split(' ');
//     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
// })


(function(){
    let readline = require('readline');
    const r1 = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    let countLine = 1;
    r1.on('line',function(line){{

        if(countLine === 2){
            //将第二行输入转化为字符数组
            let input = line.split(' ');
            //从大到小排序
            input.sort(function(num1,num2){
                console.log(num1,num2)
                if(num1 + num2 < num2 + num1)return 1;
                else return -1
            });

            // console.log(input)3

            // console.log(input.join('')-0)
            let result ='';
            for(let i = 0 ; i < input.length; i++) {
                result+=input[i]
            }
            console.log(result)
        }
        countLine++;
    }})

})();
// 4
// 7 13 4 246
// 7424613