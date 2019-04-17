//源码
function co(gen) {
    let ctx = this;

    return new Promise(function (resolve, reject) {
        if(typeof gen === "function") gen = gen.call(ctx);
        if(!gen || typeof gen.next!=="function") return resolve(gen);

        onFulfilled();

        function onFulfilled(res) {
            let ret;
            try{
                ret = gen.next(res);
            }catch (e) {
                return reject(e);
            }
            next(ret);
        }
    });

    function next(ret) {
        if(ret.done) return resolve(ret.value);
        //省略
    }
}