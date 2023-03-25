import getset from './getset';

export default class Daemon extends getset {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.deffence = 40;
  }
}
