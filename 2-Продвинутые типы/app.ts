let input: unknown;
//let input: any;

input = 3;
input = ['sf', 'sdf'];

// мы не можем тип unknow положить в переменную, передать функцию в качестве параметра в которйо задан тип
// пока мы не сделем приведение типов или определим, что это за тип
// let res: string = input;

// мы можем тип unknown записать в any
let res: any = input;

function run(i: unknown) {
  if (typeof i == 'number') {
    i++;
  } else {
    i;
  }
}

run(input);

async function getData() {
  try {
    await fetch('');
  } catch (error) {
    // error - unknown
    // console.log(error.message); // не можем обратится к message, так как error - unknown
    // для этого мы должны проверить, что error это именно ошибка
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

// так тоже можно, но  не рекомендуется
async function getDataForce() {
  try {
    await fetch('');
  } catch (error) {
    const e = error as Error; // явное приведение типа к Error
    console.log(e.message);
  }
}

// как unknown ведет себя с type Alias
// все, что с unknown всегда становится unknown
type U1 = unknown | null;

type I1 = unknown & string; // I1 будет string
