var user = {
    name: 'Вася',
    email: 'test@test.com',
    login: 'loginVasya',
};
var admin = {
    name: 'admin',
    role: 1,
};
//  функция будет логировать наш id в какую-то внешнюю систему,
// где ему явно нужна строка
/*
function logId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id); // id будет string
  } else if (typeof id === 'number') {
    console.log(id); // id будет number
  }
}
*/
// функция, которая будет являться type gard
// так записывается простая функция type gard с его возвратом
function isString(x) {
    // из этих двух типов: string | number - x - является строкой
    return typeof x === 'string';
}
function logId(id) {
    if (isString(id)) {
        console.log(id); // id будет string
    }
    else if (typeof id === 'number') {
        console.log(id); // id будет number
    }
}
// более сложный type guard на сложных объектах и интерфейсах
function isAdmin(user) {
    // user должен быть админом
    return 'role' in user; // ключ role есть только у user
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
// функция, которая меняет роли
function setRole(user) {
    // if (isAdmin(user)) {
    if (isAdminAlternative(user)) {
        user.role = 0;
    }
    else {
        throw new Error('Пользователь не админ');
    }
}
setRole(admin);
console.log(admin); // { name: 'admin', role: 0 }
