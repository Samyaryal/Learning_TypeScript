class Vehicle {
  constructor( public color: string){}

  protected honk(): void {
    console.log('beep beep');
  }

};


//before passing any arguments 'orange' we need to define constructor function
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// accessing all the properties of class Vehicle by
//child class
//super in the class is a reference of constructor of the parent class
class Car extends Vehicle {
  constructor(public wheels:number, color: string){
    super(color);
  }
  private drive(): void{
    console.log('vroom');
  } 

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
  
}

//instance of a car
const car = new Car(4,'red');
car.startDrivingProcess();
