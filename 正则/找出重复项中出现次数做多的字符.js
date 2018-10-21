(function(){
    // let str = 'asdaaassseedddddaffgyDXCvSSS';
    let str = 'aSdv';
    let re = /(\w)\1*/ig;
    //将字符串进行排序，把相同的字符放在一起
    let arr = str.toLowerCase().split('');
    // console.log(arr)
    str = arr.sort().join('');
    // console.log(str)
    let MaxLen = 0;
    let MaxValue = '';

    str.replace(re,function($0,$1,$2,$3,$4){

         // console.log($0) //aaaaa
         // console.log($1)//a
         // console.log($2)//0
         // console.log($3)//aaaaacddddddeeffgsssssssvxy
         // console.log($4)//undefined
        console.log(arguments)
        if($0.length > MaxLen) {
            MaxLen = $0.length;
            MaxValue = $1;
        }else if($0.length === MaxLen){MaxValue += $1}
    })
    console.log(MaxValue+'.....'+MaxLen)
})();