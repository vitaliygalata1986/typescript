let a = 5;
let b: string = a.toString();

let c = 'asdas';
let d: number = +c;
let d1: number = parseInt(c);

// так не сможеш преобразовать, так как это конструктор String
// let e: string = new String(a);

// тогда нужно вытащить значение:
// возвращает примитивное значение объекта String в виде строкового типа данных
let e: string = new String(a).valueOf();

// тоже самое, если мы хотим преоразовать Boolean значение
let f: boolean = new Boolean(a).valueOf();
//console.log(f); // true

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Вася',
  email: 'test@test.com',
  login: 'loginVasya',
};

/*
// равносильна запись:
const user = {
  name: 'Вася',
  email: 'test@test.com',
  login: 'loginVasya',
} as User;
*/

// преобразование одного объекта к другому

interface Admin {
  name: string;
  role: number;
}

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
function userToAdmin(user: User): Admin {
  return {
    name: user.name,
    role: 1,
  };
}

console.log(userToAdmin(user)); // { name: 'Вася', role: 1 }
