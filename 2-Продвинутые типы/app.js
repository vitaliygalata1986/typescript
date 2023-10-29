"use strict";
// типизируем функцию для фетч запроса
// если запишем так, то сможем передать любое слово в method, которое и не является method
// метод должен быть get/post и т.д.
// поэтому создадим enum
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
/*
function fetchWithAuth(url: string, method: RequestType) {

}
*/
// сделаем через Literal Types
function fetchWithAuth(url, method) { }
fetchWithAuth('s', 'post');
// fetchWithAuth('s', 's'); // это будет неккоректно
// можем указать возвращаемый тип
// и тогда мы можем вернуть 1/-1
function fetchWithAuthAll(url, method) {
    return 1;
}
// так не получится
// идет проверка на типы
let method = 'post';
// сделаем константой
// const method = 'post';
// fetchWithAuthAll('s', method);
fetchWithAuthAll('s', method);
