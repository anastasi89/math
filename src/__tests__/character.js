import Character from '../character';

test.each([
  ['какая-то строка', 'строка', 123, 'Daemon'],
  ['символ', 'строка', 'a', 'Daemon'],
  ['символы', 'текст', 'бббббббб', 'Daemon'],
  ['строка', 'какой-то текст', 'ввввв', 'ГГГ'],
])('check class %s', (_, expected, paramName, paramType) => {
  expect(() => {
    const result = new Character(paramName, paramType);
    return result;
  }).toThrow(expected);
});
