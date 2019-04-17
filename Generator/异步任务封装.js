let fetch = require("node-fetch");
function *gen() {
    let url = "https://github.com/QinRenMin";
    let result = yield fetch(url);
    console.log(result.bio);
}

let g = gen();
let result = g.next();

result.value.then(function (data) {
    return data.json();
}).then(function (data) {
    g.next(data)
});