function logId(id) {
    // void обозначает, что функция ничего не возвращает
    console.log(id);
}
var a = logId(1);
// в таком случае функция будет возвращать alias между number/undefined
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
}
// поэтому дотипизируем ее:
function multiplyOptimization(f, s) {
    if (!s) {
        return f * f;
    }
}
var f1 = function () { };
var f2 = function () {
    return true; // на этот возврат будет игнорироваться
};
var b = f2(); // void
var skills = ['Dev', 'DevOps'];
var user = {
    s: ['s'],
};
skills.forEach(function (skill) { return user.s.push(skill); });
console.log(user); // { s: [ 'Dev', 'DevOps' ] }
