//并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调
function setAnsyc1() {
    let p1 = new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log("1执行完成");
            resolve("输入数据1")
        },1000)
    });
    return p1;
}
function setAnsyc2() {
    let p2 = new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log("2执行完成");
            resolve("输入数据2")
        },2000)
    });
    return p2;
}
function setAnsyc3() {
    let p3 = new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log("3执行完成");
            resolve("输入数据3")
        },2000)
    });
    return p3;
}

Promise.all([setAnsyc1(),setAnsyc2(),setAnsyc3()]).then(function (results) {
    console.log(results)
});
//1执行完成
// 2执行完成
// 3执行完成
// [ '输入数据1', '输入数据2', '输入数据3' ]