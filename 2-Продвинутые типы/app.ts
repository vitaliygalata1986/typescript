function logId(id: string | number): void {
  // void обозначает, что функция ничего не возвращает
  console.log(id);
}

const a = logId(1);

// в таком случае функция будет возвращать alias между number/undefined
function multiply(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
}

// поэтому дотипизируем ее:
function multiplyOptimization(f: number, s?: number): number | void {
  if (!s) {
    return f * f;
  }
}

type voidFunc = () => void;

const f1: voidFunc = () => {};

const f2: voidFunc = () => {
  return true; // на этот возврат будет игнорироваться
};

const b = f2(); // void

const skills = ['Dev', 'DevOps'];

const user = {
  s: ['s'],
};

skills.forEach((skill) => user.s.push(skill));
console.log(user); // { s: [ 's', 'Dev', 'DevOps' ] }
