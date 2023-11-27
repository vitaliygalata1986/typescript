var a = 5;
var b = a.toString();
var c = 'asdas';
var d = +c;
var d1 = parseInt(c);
// так не сможеш преобразовать, так как это конструктор String
// let e: string = new String(a);
// тогда нужно вытащить значение:
// возвращает примитивное значение объекта String в виде строкового типа данных
var e = new String(a).valueOf();
// тоже самое, если мы хотим преоразовать Boolean значение
var f = new Boolean(a).valueOf();
var user = {
    name: 'Вася',
    email: 'test@test.com',
    login: 'loginVasya',
};
// мы хотим user сделать админом
// но тогда у admin будут лишние поля: email/login
/*
const admin: Admin = {
  ...user, // spread оператор позволяет взять свойства объекта и записать в другой объект
  role: 1,
};
*/
// для правильного преоборазования лучше делать функции mappinga для приведение одного объекта к другому
// получаем пользователя на входе, который будет User, и возвращаем Admin
// это явное преобразование, которое сохраняет только необходимые объекты
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1,
    };
}
console.log(userToAdmin(user)); // { name: 'Вася', role: 1 }
