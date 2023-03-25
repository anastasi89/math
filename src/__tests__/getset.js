import Daemon from '../Daemon';
import Magician from '../Magician';

test.each([
  ['spell', '2', true, 2, 4],
  ['spell', '1', true, 5, 0],
  ['no spell', '3', false, 3, 8],
])(
  'check attack Daemon %s from distance %s',
  (_, __, stoned, distance, expected) => {
    const personage = new Daemon('Oleg');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);

test.each([
  ['spell', '2', true, 2, 4],
  ['spell', '1', true, 5, 0],
  ['no spell', '3', false, 3, 8],
])(
  'check attack Magician %s from distance %s',
  (_, __, stoned, distance, expected) => {
    const personage = new Magician('Oleg');
    personage.stoned = stoned;
    personage.distance = distance;
    expect(personage.attack).toBe(expected);
  },
);
