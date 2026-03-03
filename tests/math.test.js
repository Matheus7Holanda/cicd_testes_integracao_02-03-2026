const math = require('../math.js');

test('soma: ', ()=> {
    expect(math.add(2,3)).toBe(5);
    expect(math.add(5,5)).toBe(10);
    expect(math.add(9,8)).toBe(17);
    expect(math.add(2,2)).toBe(4);
})

test('divisão: ', ()=> {
    expect(math.divide(8,4)).toBe(2);
    expect(math.divide(12,6)).toBe(2);
    expect(math.divide(24,12)).toBe(2);
    expect(math.divide(36,3)).toBe(12);
})

test('mutiplicação: ', ()=> {
     expect(math.multiply(4,4)).toBe(16);
     expect(math.multiply(2,8)).toBe(16);
     expect(math.multiply(4,5)).toBe(20);
     expect(math.multiply(6,6)).toBe(36);

})

test('subtração: ', ()=> {
    expect(math.subtract(2,1)).toBe(1);
    expect(math.subtract(12,6)).toBe(6);
    expect(math.subtract(15,7)).toBe(8);
    expect(math.subtract(11,1)).toBe(10);
})

