"use strict";
const arr = ['sdf', 1];
// функция, которая будет логировать переданный нами id
// принимает Union тип
function logId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// теперь можем функцию вызвать либо с number либо с string
logId(1);
logId('text');
logId(true);
// работа со cложными типами
// функция будет принимать либо одну ошибку либо массив ошибок
function logError(err) {
    if (Array.isArray(err)) {
        // если это массив
        console.log(err);
    }
    else {
        console.log(err);
    }
}
console.log(logError(['error1', 'error2'])); // [ 'error1', 'error2' ]
// принимаем объект, у которого есть либо свойство a/b
function logObject(obj) {
    // оператор in - проверяет, а есль ли тот или иной ключ в объекте
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
logObject({ a: 10, b: 1 }); // 10
// функция, которая принимает multiply dist
// в обоих случаях есть тип string
function logMultipleIds(a, b) {
    // чтобы сделать сужжение в таких случаях
    if (a === b) {
        // а по типу равно b ?
        // то мы можем обращаться к a/b обращаться как к строке
        return a.length;
    }
    else {
        return b;
    }
}
console.log(logMultipleIds('text', true)); // true
console.log(logMultipleIds('text', 'text')); // true
