interface User {
  login: string;
  password?: string; // ? - обозначает опциональность этого свойства
}

// пароль наш будет опцинальным

const user: User = {
  login: 'admin',
};

// тоже самое можем обзначить, что второе свойство является не обязательным
function multiply(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }

  return first * second;
}
console.log(multiply(5)); //25
console.log(multiply(5, 3)); //15

interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secondary';
  };
}

function testPass(user: UserPro) {
  const typePassword = user.password?.type; // ts добавил и сюда ?
  // это называется optional chaining
  // это обозначает, что мы можем обратится к свойству объекта, которого может не быть

  // ! - обозначает, что такое свойство точно есть
  // const typePasswordNew = user.password!.type;

  // или вариант сужжения типов
  // const newtypePassword = user.password ? user.password.type : undefined;

  return typePassword;
}

let User = {
  login: 'admin',
};
console.log(testPass(User)); // undefined

function test(param?: string) {
  const t = param ?? multiply(5); // если param null/undefined, то отработает multiply()
  return t;
}

console.log(test()); // 25
console.log(test('stroka')); // stroka
