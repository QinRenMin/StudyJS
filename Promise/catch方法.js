//catch方法指定reject的回调
function getNumber() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let num = Math.ceil(Math.random()*10);
            if(num < 9) {
                resolve(num);
            }else{
                reject("数据过大");
            }
        })
    });
    return p;
}

getNumber().then(function (data) {
    console.log("resolved");
    console.log(data);
    }).catch(function (data) {
    console.log("rejected");
    console.log(data);
});

//另一个作用，处理异常
getNumber().then(function (data) {
    console.log("resolved");
    console.log(data);
    // console.log(err);
    //rejected
    // ReferenceError: err is not defined
    // at /home/qrm/Practice/StudyJS/Promise/catch方法.js:19:17

}).catch(function (data) {
    console.log("rejected");
    console.log(data);
});