import {PilotAttrs} from './pilot/pilot-attrs';

export class Pilot {

  public static defaultImageUrl = '/assets/pikachu.png';

  public firstName: string;
  public lastName: string;
  public imageUrl: string;
  public id: number;

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
