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

setAnsyc1().then(function (data) {
    console.log(data);
    return setAnsyc2();
}).then(function (data) {
    console.log(data);
    return setAnsyc3();
    // return '直接返回数据';
}).then(function (data) {
    console.log(data);
});
