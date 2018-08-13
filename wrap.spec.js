const { expect } = require('chai')
const wrap = require('./wrap');

describe('wrap', ()=> {
    it('Returns an empty string if empty string was passed in', () => {
        expect(wrap("", 12)).to.equal("");
    });

    it('Return an unchanged sting if the length of the string is less than the column', () => {
        expect(wrap("Short", 100)).to.equal("Short");
    })
});