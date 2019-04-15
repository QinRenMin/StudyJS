function getNumber() {
    let p = new Promise(function (resolve,reject) {
        setTimeout(function () {
            let  num = Math.ceil(Math.random()*10); //生成1-10随机数
            if(num <= 5){
                resolve(num);
            }else{
                reject("数字过大");//传给then中的function
            }
        },1000)
    });
    return p;
}
getNumber().then(function (data) {
    console.log("resolved");
    console.log(data);
},function (data) {
    console.log("rejected");
    console.log(data);
});
