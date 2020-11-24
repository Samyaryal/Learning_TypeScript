const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 50,
    lon: 15
  },
  setAge(age: number): void{
    this.age= age;
  }
};

const {age}:{age: number} = profile;
const {
  coords: {lat, lon}
}:{coords: {lat: number; lon: number}}  = profile;

