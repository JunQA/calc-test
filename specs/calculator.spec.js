import calculator from '../src/calculator';

describe('Calculator 100% coverage', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });

  test('Operand A is not a number', () => {
    expect(() => calculator('?', '*', 2)).toThrow();
  });

  test('Operand B is not a number', () => {
    expect(() => calculator(2, '*', '?')).toThrow();
  });

  test('2 + 2 = 4', () => {
    expect(calculator(2, '+', 2)).toBe(4);
  });

  test('4 - 2 = 2', () => {
    expect(calculator(4, '-', 2)).toBe(2);
  });

  test('2 * 2 = 4', () => {
    expect(calculator(2, '*', 2)).toBe(4);
  });

  test('4 / 2 = 2', () => {
    expect(calculator(4, '/', 2)).toBe(2);
  });

  test('Unknown operation', () => {
    expect(() => calculator(2, "${operation}", 2)).toThrow();
  });
});