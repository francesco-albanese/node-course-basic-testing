const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

    //add describe block for specific method => #followedByMethodName Example: #add, #delete
    describe('#add', () => {
        it('should add two numbers', () => {
            const res = utils.add(33, 11);
            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}.`);
            // }
            expect(res).toBe(44).toBeAn('number')
        });
    });

    
    it('should square a number', () => {
        const res = utils.square(3);
        // if (res !== 9) {
        //     throw new Error(`Expected 9 but got ${res}.`);
        // }
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should async square two numbers', done => {
        utils.asyncSquare(5, square => {
            expect(square).toBe(25).toBeA('number');
            done();
        });
    });
});

it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({name: "Francesco"}).toEqual({name: "Francesco"})
    expect([2, 3, 4]).toExclude(1)
    expect({
        name: "Francesco",
        age: 31,
        location: "Malta"
    }).toNotContain({
        age: 25
    })
});


it('should verify first and last names are set', () => {
    const user = {location: "Malta", age: 31};
    const res = utils.setName(user, "Francesco Albanese");
    expect(res).toInclude({
        firstName: "Francesco",
        lastName: "Albanese"
    })
});
