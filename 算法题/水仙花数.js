(function(){
   let readLine = require('readline');
   const r1 = readLine.createInterface({
       input:process.stdin,
       output:process.stdout
   })

    r1.on('line',function(line){
        let result = [];
        let input = line.split(' ').map((item) => {
            return item-0;
        });

        for(let i = input[0]; i <= input[1]; i++){
            if(test(i)) {
                result.push(i)
            }
        }
        function test(num){
            let sum = 0;
            let temp = num;

            while(num >0) {
                sum+=Math.pow(num%10,3);
                num = parseInt(num/10);
            }
            if(sum === temp){
                return 1
            }
            return 0
        }
        if(result.length !==0){
            console.log(result.join(' '));
        }else{
            console.log('no')
        }
    })

})()