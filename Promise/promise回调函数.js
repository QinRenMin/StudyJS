//Promise
function runAsync(){
    let promise = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log("执行完成");
            resolve("传入数据");
        },2000);
    });
    return promise;
}
runAsync().then(function (data) {
    console.log(data);//接收回调返回的结果
});

//使用回调函数改写
function setAsync(callback) {
    setTimeout(function () {
        console.log("２执行完成");
        callback("数据2传出");
    })
}
setAsync(function (data) {
    console.log(data);
});