// Есть проблема, пытаемся в масив добавить число.
// const a: string[] = ['str1', 'str2', 1];

const a1: [string, number] = ['str1', 1]; // typel это массив ограниченой длины, где каждый элемент типизированный
const id = a1[0];
const skillName = a1[1];

// При этом мы не можем обращаться к элементу в не описания:
// const q = a1[2];

// Но мы можем пушить:
a1.push('new');

// Но даже после этого мы не можем обратиться ко второму элементу массива.
// const q = a1[2];

// Также в typles работают теже деструктуризации, что и в массивах.
const ski: [number, string] = [1, 'Dev'];
const [idSkill, nameSkill] = ski;
console.log(idSkill, nameSkill); // 1 Dev
