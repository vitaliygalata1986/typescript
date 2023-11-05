// пароль наш будет опцинальным
var user = {
    login: 'admin',
};
// тоже самое можем обзначить, что второе свойство является не обязательным
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
console.log(multiply(5)); //25
console.log(multiply(5, 3)); //15
function testPass(user) {
    var _a;
    var typePassword = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type; // ts добавил и сюда ?
    // это называется optional chaining
    // это обозначает, что мы можем обратится к свойству объекта, которого может не быть
    // ! - обозначает, что такое свойство точно есть
    // const typePasswordNew = user.password!.type;
    // или вариант сужжения типов
    // const newtypePassword = user.password ? user.password.type : undefined;
    return typePassword;
}
var User = {
    login: 'admin',
};
console.log(testPass(User)); // undefined
function test(param) {
    var t = param !== null && param !== void 0 ? param : multiply(5); // если param null/undefined, то отработает multiply()
    return t;
}
console.log(test()); // 25
console.log(test('stroka')); // stroka
