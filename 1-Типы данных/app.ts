// Проблема модификаций кортежев и массивов.

// переопределим наш нулевой элемент кортежа двойкой:
const newSkillsNew: [number, string] = [1, 'Dev'];
newSkillsNew[0] = 2;
console.log(newSkillsNew); // [ 2, 'Dev' ]

// Воспользуемся модификатором в TS readonly:
const newSkillsNewAll: readonly [number, string] = [1, 'Dev'];
// newSkillsNewAll[0] = 2; // Данный кортеж не модифицированный.
// console.log(newSkillsNewAll);

// альтернатива : string[] - использование Generic
const skillsGeneric: Array<string> = ['Dev', 'DevOps']; // Array<string> - это всего лишь массив строк
console.log(skillsGeneric); // [ 'Dev', 'DevOps' ]

// также для readonly есть специальный тип ReadonlyArray
const skillsReadonlyArray: ReadonlyArray<string> = ['Dev', 'DevOps'];
// skillsReadonlyArray[0] = 'Testing';
// Пушить тоже не можем:
// skillsReadonlyArray.push('test');
// В JS мы не можем зафиксировать длину, модификацию массива.
