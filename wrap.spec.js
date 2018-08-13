const { expect } = require('chai')
const wrap = require('./wrap');

describe('wrap', ()=> {
    it('Returns an empty string if empty string was passed in', () => {
        expect(wrap("", 12)).to.equal("");
    });

    it('Return an unchanged sting if the length of the string is less than the column', () => {
        expect(wrap("Short", 100)).to.equal("Short");
    });

    it('Returns a block of text with no lines longer than column length', () => {
        expect(wrap("The cat is a small, typically furry, carnivorous mammal.", 10)).to.equal("The cat is\n a small, \ntypically \nfurry, car\nnivorous m\nammal.")
    })
});
