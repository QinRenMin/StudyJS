// (function(){
//     let readline = require('readline');
//     const rl = readline.createInterface({
//         input:process.stdin,
//         output:process.stdout
//     })
//     var input = [];
//
//     rl.on('line',function(line) {
//         input.push(line.trim())
//         let n = input[0] - 0;
//         console.log(n)
//         console.log(input)
//     })
// })()
(function(){
   function getTreeHigh(input) {
       input = input.map((item) => {
           return item.split(' ')
       })
       // console.log(input.length)
        let arr = input.map((item) => {
            if(item.length === 2){
                return item[1] - 0;
            }
        })
       arr.shift();
       arr.sort(function(num1,num2){
           return num1 < num2
       });
       let count = 1;
       if(arr[0] %2 !== 0){
           arr[0] += 1;
           console.log(arr[0])
           while(arr[0] !==1){
               // console.log(111)
               arr[0] = parseInt(arr[0] /2);
               count++;
           }
       }else{
           while(arr[0]!==1){
               arr[0] = parseInt(arr[0] /2);
               count++;
           }
       }
       console.log(count)
   }
   let input = ['5','0 1','1 3','0 2','1 4','4 9'];
   getTreeHigh(input);
})()
