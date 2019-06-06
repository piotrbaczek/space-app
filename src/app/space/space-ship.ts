export abstract class SpaceShip {
  modelName: string = 'Goose';
  imageUrl: string = '/assets/f16.png';
  health: number = 55;
  activeShields: boolean = true;
  activeWeapons: boolean = false;

  protected constructor(modelName: string, imageUrl: string) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
  }
}
