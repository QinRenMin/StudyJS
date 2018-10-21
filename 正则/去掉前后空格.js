(function(){
    let str = ' as as d ';
    // let re = /^\s|\s/g; //去除全部空格
    let re = /^\s+|\s+$/g; //去除首尾空格
    console.log('('+str.trim()+')')
    console.log('('+str.replace(re,'')+')')
})()