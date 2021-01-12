import { Mappable } from './CustomMap';
import faker from 'faker';

export class User implements Mappable { //instance of class user we create satisfies all the properties required by the Mappable interface
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor(){
    this.name= faker.name.firstName();
    this.location ={
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    };
  }
  markerContent (): string{
    return `User Name: ${this.name}`;
  }
}