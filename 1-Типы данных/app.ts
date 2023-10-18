function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameAll = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};

function getFullNameAny(firstname: string, surname: string): string {
  // if (typeof firstname !== 'string') {
  //   throw new Error('!!!');
  // }
  return `${firstname} ${surname}`;
}

console.log(getFullName('Vitaliy', 'Galata')); // Vitaliy Galata
console.log(getFullNameAll('Vitaliy', 'Galata')); // Vitaliy Galata

console.log(getFullNameAny(true, 'false'));
console.log(getFullNameAny('Виталий', 'Галата'));
