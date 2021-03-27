describe('Transport Fee', function(){

    it('should return the cost of transport based on the shift you are working', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should return the cost of transport based on the shift you are working', function(){
        assert.equal('free', transportFee('nightshift'));
    });
});