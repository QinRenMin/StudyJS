let thunk = function () {
  return 5;
};
function f(thunk) {
    console.log(thunk()*2)
}
f(thunk);