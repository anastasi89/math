import getset from './getset';

export default class Magician extends getset {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.deffence = 40;
  }
}
