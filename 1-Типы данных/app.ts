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
enum StatusCode {
  SUCCESS,
  IN_PROCESS,
  FAILED,
}
const res = {
  message: 'Платеж успешный',
  statusCode: StatusCode.SUCCESS, // типизируем statusCode
};

if (res.statusCode === StatusCode.SUCCESS) {
  // в итоге мы не можем опечататься, получить другие значения
}

// Enum может быть и строковым

enum StatusCodeString {
  SUCCESS = 's',
  IN_PROCESS = 'p',
  FAILED = 'f',
}

// Гетерогенные enum

enum StatusCodeGeter {
  SUCCESS = 10,
  IN_PROCESS = 'p',
  FAILED = 'f',
}

// хотим принимать енамы этого типа: StatusCodeGeter
function action(status: StatusCodeGeter) {
  console.log('success');
  console.log(status);
}
action(StatusCodeGeter.SUCCESS); // saccess 10
action(10); // тоже будет валидное значение, так как SUCCESS = 10 присутствует в StatusCodeGeter

// вот так будет проблема, там как енам гетерогенный, но продолжает быть числовым
// action('p');
action(StatusCodeGeter.IN_PROCESS); // лучше вот так

enum Roles {
  ADMIN,
  USER,
}

// Enum могут быть рассчетными:
enum RolesAll {
  ADMIN = 1,
  USER = ADMIN * 2,
}

// Даже функцию можно передать:
function compute() {
  return 3;
}

enum Role {
  ADMIN = 1,
  USER = compute(),
}

// Енамы похожи на объекты.
enum Roleses {
  ADMIN = 1,
  USER = compute(),
}

function test(x: { ADMIN: number }) {
  return x;
}

console.log(test(Roleses)); // { '1': 'ADMIN', '3': 'USER', ADMIN: 1, USER: 3 }

// Константные енамы
const enum RolesesConst {
  ADMIN = 1,
  USER = 2,
}

// Так как мы объявляем роли как константы, то компилятор ищет все места, где упоминается Roleses и заменяет его на константы.
// Так как таких мес нет, то ничего и не будет.

const res2 = RolesesConst.ADMIN;

// То после компиляции:
// const res2 = 1 /* RolesesConst.ADMIN */;
