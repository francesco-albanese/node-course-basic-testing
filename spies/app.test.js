const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Francesco', 31);
        expect(spy).toHaveBeenCalledWith('Francesco', 31);
    });

    it('should call saveUser with user object', () => {
        const email = 'albanesefrancesco@gmail.com';
        const password = '123abc';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});