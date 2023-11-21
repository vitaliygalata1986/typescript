// функция генерит наш ошибку
function genereateError(message: string): never {
  // never - функция никогда не вернеться
  throw new Error(message);
}

function dumpError(): never {
  // return ''
  while (true) {}
}

function rec(): never {
  return rec();
}

// const a: never = null; // мы не можем never ничего присвоить

const a: void = undefined; // void можем присвоить undefined
// так как, когда мы возращаем  функцию, то фактически возвращается undefined

// реальное применение с пользой
type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      // ....
      break;
    case 'checkout':
      // ....
      break;
    default:
      // чтобы TypeScript не ругался на не использованную переменную
      // можно применять _
      const _: never = action; // здесь action сам never, и сюда проверка никогда не попадет
      throw new Error('Нет такого action');
  }
}

function isString(x: string | number): boolean {
  if (typeof x == 'string') {
    return true;
  } else if (typeof x == 'number') {
    return false;
  }
  genereateError('какой-то текст ошибки');
}
