import {PilotAttrs} from "./pilot/pilot-attrs";

export class Pilot {
  firstName: string;
  lastName: string;
  imageUrl: string;
  id: number;

  static defaultImageUrl = '/assets/pikachu.png';

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
    this.fullName = attrs.firstName + ' ' + attrs.lastName;
  }

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }
}
