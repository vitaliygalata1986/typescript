"use strict";
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameAll = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
function getFullNameAny(firstname, surname) {
    if (typeof firstname !== 'string') {
        throw new Error('!!!');
    }
    return `${firstname} ${surname}`;
}
console.log(getFullName('Vitaliy', 'Galata')); // Vitaliy Galata
console.log(getFullNameAll('Vitaliy', 'Galata')); // Vitaliy Galata
console.log(getFullNameAny(true, 'false'));
console.log(getFullNameAny('Виталий', 'Галата'));
