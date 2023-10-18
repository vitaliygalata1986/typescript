"use strict";
/*
const res = {
  message: 'Платеж успешный',
  statusCode: 1,
};
*/
// 1 - успех
// 2 - в процессе
// 3 - отклонен
// Если мы будем модифицировать объект, то этому статусу можем присвоить другое значение.
// Или мы можем:
/*
if (res.statusCode === 'succes') {
  // спец. сделали опечатку
}
*/
// создадим наборы констант для каждого статуса.
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 1] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешный',
    statusCode: StatusCode.SUCCESS, // типизируем statusCode
};
if (res.statusCode === StatusCode.SUCCESS) {
    // в итоге мы не можем опечататься, получить другие значения
}
// Enum может быть и строковым
var StatusCodeString;
(function (StatusCodeString) {
    StatusCodeString["SUCCESS"] = "s";
    StatusCodeString["IN_PROCESS"] = "p";
    StatusCodeString["FAILED"] = "f";
})(StatusCodeString || (StatusCodeString = {}));
// Гетерогенные enum
var StatusCodeGeter;
(function (StatusCodeGeter) {
    StatusCodeGeter[StatusCodeGeter["SUCCESS"] = 10] = "SUCCESS";
    StatusCodeGeter["IN_PROCESS"] = "p";
    StatusCodeGeter["FAILED"] = "f";
})(StatusCodeGeter || (StatusCodeGeter = {}));
// хотим принимать енамы этого типа: StatusCodeGeter
function action(status) {
    console.log('success');
    console.log(status);
}
action(StatusCodeGeter.SUCCESS); // saccess 10
action(10); // тоже будет валидное значение, так как SUCCESS = 10 присутствует в StatusCodeGeter
// вот так будет проблема, там как енам гетерогенный, но продолжает быть числовым
// action('p');
action(StatusCodeGeter.IN_PROCESS); // лучше вот так
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
// Enum могут быть рассчетными:
var RolesAll;
(function (RolesAll) {
    RolesAll[RolesAll["ADMIN"] = 1] = "ADMIN";
    RolesAll[RolesAll["USER"] = 2] = "USER";
})(RolesAll || (RolesAll = {}));
// Даже функцию можно передать:
function compute() {
    return 3;
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = compute()] = "USER";
})(Role || (Role = {}));
// Енамы похожи на объекты.
var Roleses;
(function (Roleses) {
    Roleses[Roleses["ADMIN"] = 1] = "ADMIN";
    Roleses[Roleses["USER"] = compute()] = "USER";
})(Roleses || (Roleses = {}));
function test(x) {
    return x;
}
console.log(test(Roleses)); // { '1': 'ADMIN', '3': 'USER', ADMIN: 1, USER: 3 }
// Так как мы объявляем роли как константы, то компилятор ищет все места, где упоминается Roleses и заменяет его на константы.
// Так как таких мес нет, то ничего и не будет.
const res2 = 1 /* RolesesConst.ADMIN */;
