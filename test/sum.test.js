const calculadora = require('./server');

test('El cuadrado de 4 debería dar 16', () => {
    expect(calculadora.sum(4,5)).toBe(9);
});