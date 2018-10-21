(function(){
   let readLine = require('readline');
   const r1 = readLine.createInterface({
       input:process.stdin,
       output:process.stdout
   });
   r1.on('line',function(line){
       let input = line.split(' ').map((item) => item - 0);
       let sum = input[0];
       for(let i = 1; i < input[1]; i++){
           sum += Math.sqrt(input[0]);
           input[0] = Math.sqrt(input[0])
       }
       console.log(sum.toFixed(2))
   })
})()