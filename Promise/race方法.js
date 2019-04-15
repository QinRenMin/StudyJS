//并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调
//谁跑得快，以谁为准执行回调

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
        },500)
    });
    return p3;
}

Promise.race([setAnsyc1(),setAnsyc2(),setAnsyc3()]).then(function (result) {
    console.log(result)
});
//3执行完成
// 输入数据3
// 1执行完成
// 2执行完成