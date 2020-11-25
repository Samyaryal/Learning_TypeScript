const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//Type Alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const coke: Drink = ['black', true, 70];
const tea: Drink = ['Drink', false, 0];

const carSpecs: [number, number]= [400, 3445];

const carStats = {
  horsepower: 400,
  weight: 3445
};