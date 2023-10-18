"use strict";
// типизируем массив - указывем явно - массив строк
const skills = ['Dev', 'DevOps', 'Testing'];
// типизируем не однородный массив
const skillsAll = ['Dev', 'DevOps', 1];
// any не стоит использовать.
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
// Явно укажем входящий параметр для метода filter():
const filterArray = skills.filter((s) => s !== 'DevOps');
console.log(filterArray); // [ 'Dev', 'Testing' ]
// В итоге во всех фильтрах мы правильно использовали поведение типов:
const filterArrayMapReduce = skills
    .filter((s) => s !== 'DevOps')
    .map((s) => s + '! ')
    .reduce((a, b) => a + b);
console.log(filterArrayMapReduce); // Dev! Testing!
