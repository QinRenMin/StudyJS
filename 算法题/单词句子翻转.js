(function(){
    let readLine =  require('readline');
    const r1 = readLine.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    r1.on('line',function(line){
        let input = line.split(' ');
        console.log(input.reverse().join(' '))
    })
})();
// hello xiao mi
// mi xiao hello