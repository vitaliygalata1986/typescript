"use strict";
// типизация объекта
function getInfoPeople(userEntity) {
    return `${userEntity.firstname} ${userEntity.lastname}`;
}
const user = {
    firstname: 'Vitaliy',
    lastname: 'Galata',
    city: 'Nikolaev',
    age: 37,
};
console.log(getInfoPeople(user));
