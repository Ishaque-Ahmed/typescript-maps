import { faker } from '@faker-js/faker';
import { Mapable } from './CustomMap';
export class User implements Mapable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>User name: ${this.name}</h1>
    </div>
    `;
  }
}
