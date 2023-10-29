type httpMethod = 'post' | 'get';
type coolString = string;

function fetchWithAuthAll(url: string, method: httpMethod): 1 | -1 {
  return 1;
}

fetchWithAuthAll('s', 'post');

// как мы раньше типизировали объект
let user: {
  name: string;
  age: number;
  skills: string[];
} = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
};

// типизацию объекта тоже можем вынести в type alies

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  id: number;
};

let newUser: User = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
};

// intersection целых тайпов
// на базе двух type Role и User сделаем один intersection type
type UserWithRole = User & Role;

let userAll: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 1,
};
