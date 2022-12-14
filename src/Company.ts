import { faker } from '@faker-js/faker';
import { Mapable } from './CustomMap';

export class Company implements Mapable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';
  constructor() {
    this.companyName = faker.company.bsNoun();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
    <h1>Company name: ${this.companyName}<h1>
    <h3>Catchphrase: ${this.catchPhrase}<h3>
    </div>`;
  }
}
