(function(){
    function foo(){
        console.log(this.a);
    }
    let obj = {
        a:2,
        foo:foo
    }
    obj.foo() //2
})()