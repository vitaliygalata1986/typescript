// типизация объекта
function getInfoPeople(userEntity: {
  firstname: string;
  lastname: string;
}): string {
  return `${userEntity.firstname} ${userEntity.lastname}`;
}

const user = {
  firstname: 'Vitaliy',
  lastname: 'Galata',
  city: 'Nikolaev',
  age: 37,
  skills: {
    dev: true,
    devops: true,
  },
};

console.log(getInfoPeople(user)); // Vitaliy Galata

/*
Упражнение.
Нам приходит json:
{
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}
*/

// Нужно его типизировать.

let userInfo: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
};
