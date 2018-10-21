function fun(n,o) {
    // console.log(n,o);
    console.log(o);

    return {
        fun:function(m){
            // console.log(m+','+n);
            return fun(m,n);
        }
    };
}
let a = fun(0);a.fun(1);a.fun(2);  a.fun(3);//undefined,0,0,0
let b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
let c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1