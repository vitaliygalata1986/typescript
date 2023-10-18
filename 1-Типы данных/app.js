"use strict";
// Проблема модификаций кортежев и массивов.
// переопределим наш нулевой элемент кортежа двойкой:
const newSkillsNew = [1, 'Dev'];
newSkillsNew[0] = 2;
console.log(newSkillsNew); // [ 2, 'Dev' ]
// Воспользуемся модификатором в TS readonly:
const newSkillsNewAll = [1, 'Dev'];
// newSkillsNewAll[0] = 2; // Данный кортеж не модифицированный.
// console.log(newSkillsNewAll);
// альтернатива : string[] - использование Generic
const skillsGeneric = ['Dev', 'DevOps']; // Array<string> - это всего лишь массив строк
console.log(skillsGeneric); // [ 'Dev', 'DevOps' ]
