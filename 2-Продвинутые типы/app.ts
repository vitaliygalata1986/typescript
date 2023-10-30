interface User {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string; // функция получает id лога, и возращает инфу по логу
}

interface Role {
  roleId: number;
}

/*
interface UserWithRole extends User {
  // чтобы добавить другой интрефейс,
  // используем extends
  roleId: number;
}
*/

interface UserWithRole extends User, Role {
  // через запятаю можем объединять много интерфейсов
  createdAt: Date;
}

/*
let user: User = {
  // User уже будет интерфейсом
*/
let user: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 10,
  createdAt: new Date(),
  log(id) {
    return `Info log: ${id}`;
  },
};

// можем сделать type у которого будут все теже методы
// здесь нет никаких различий с интерфейсом
type User2 = {
  name: string;
  age: number;
  skills: string[];
  log: (id: number) => string;
};

let user2: User2 = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  log(id) {
    return `Info log: ${id}`;
  },
};

// Индексные свойства в интерфейсах
// чаще применяются в словарях.
// например хотим иметь некий id пользователя
// эта запись будет работать как в интерфейсах, так и в тайпах

interface UserDic {
  [index: number]: User; // у этого интерфейса может быть не огранич. число свойств
  // где ключем является число, а значением - пользователь
}

type UserDic2 = {
  [index: number]: User;
};
