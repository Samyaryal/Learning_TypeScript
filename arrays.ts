const carMakers = ['ford', 'Toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Inference with extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

//Help with map
carMakers.map((car: string): string=> {
  return car.toUpperCase();
})

//Flexible types
const importantDates : (Date | string)[] = [new Date(), '2020-11-25'];

importantDates.push('2020-22-11');
importantDates.push(new Date());