// один интерфейс дополняет другой интерфейс

interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: 'Vitaliy',
  age: 20,
};

// преимущество type
type ID = string | number;

// интерфейсы позволяют работать с объектами, описанием класа, но не с простыми типами
// только внутри интерфейса могут лежать простые типы
interface IDI {
  ID: string | number;
}
