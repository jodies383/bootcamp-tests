describe('The Greet Function', function(){

    it('should greet Jodie', function(){
        assert.equal('Hello, Jodie', greet('Jodie'));
    });
    it('should greet Lyle', function(){
        assert.equal('Hello, Lyle', greet('Lyle'));
    });
});