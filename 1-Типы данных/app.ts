// типизируем массив - указывем явно - массив строк
const skills: string[] = ['Dev', 'DevOps', 'Testing'];

// типизируем не однородный массив
const skillsAll: any[] = ['Dev', 'DevOps', 1];

// any не стоит использовать.

for (const skill of skills) {
  console.log(skill.toLowerCase());
}

// Явно укажем входящий параметр для метода filter():
const filterArray = skills.filter((s: string) => s !== 'DevOps');
console.log(filterArray); // [ 'Dev', 'Testing' ]

// В итоге во всех фильтрах мы правильно использовали поведение типов:
const filterArrayMapReduce = skills
  .filter((s: string) => s !== 'DevOps')
  .map((s) => s + '! ')
  .reduce((a, b) => a + b);

console.log(filterArrayMapReduce); // Dev! Testing!
