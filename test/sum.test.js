
const sum = require('../modules/sum');

test("La suma de 4 y 5 debería dar 9", () => {
    const suma = sum(4,5);
    expect(suma).toBe(9);
});