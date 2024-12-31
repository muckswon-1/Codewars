const  { describe, expect, test } =  require("@jest/globals");
const { score } = require("../greed_dice");


// Testing Greed dice challenge


describe("Scorer function", function(){
    test('Greed function should value this as worthless', function() {
        expect(score([2,3,4,6,2])).toBe(0)
    });

    test('Greed function should value this triplet successfully',() => {
        expect(score([4,4,4,3,3])).toBe(400)
    })

    test('Greed function should value this mixed set correctly',() => {
        expect(score([2,4,4,5,4])).toBe(450)
    })
    test('Greed function should value this correctly',() => {
        expect(score([5,5,2,3,6])).toBe(100)
    })

    test('Greed function should value this array correctly',() => {
        expect(score([1,1,1,3,3])).toBe(1000)
    })
    test('Greed function should value [6,6,6,3,3] correctly', () => {
        expect(score([6,6,6,3,3])).toBe(600)
    })

    test('Greed function should value [5,5,5,5,6] correctly',() => {
        expect(score([5,5,5,5,6])).toBe(550)
    })
})

