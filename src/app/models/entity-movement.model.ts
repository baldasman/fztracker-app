import * as uuidv4 from 'uuid/v4';  // random ids

export class EntityMovementModel {
  id: string;
  movementDate: Date;
  location: string;
  cardNumber: string;
  inOut: boolean;
  sensor: string;
  cardId: string;
  manual: boolean;
  plate: string;

  constructor() {
    this.id = uuidv4();
    this.movementDate = new Date();
  }
}