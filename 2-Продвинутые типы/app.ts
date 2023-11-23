const n: null = null;

// мы не можем null присвоить undefined:
// const n1: null = undefined;

// null можем присвоить any:
const n1: any = null;

// а вот number будет ошибка, также string и boolean
const n2: number = null;
const n3: string = null;
const n4: boolean = null;

// функция получает пользователя с базы

interface User {
  name: string;
}

function getUser() {
  // чтобы сэмитировать, что мы можем найти или не найти пользователя с базы
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: 'Lena',
    } as User;
  }
}

const user = getUser();
if (user) {
  const findUser = user.name;
}
