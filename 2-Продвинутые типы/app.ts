interface User {
  name: string;
}

/*
const a: User = {
  name: 'Вася',
};
*/
const a = {};
assertUser(a);
a.name = 'Вася'; // a приобрел значение User

// проверим - является ли объект пользователем
function assertUser(obj: unknown): asserts obj is User {
  // изначально мы не знаем, что это за объект
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }
  throw new Error('Не пользователь');
}
