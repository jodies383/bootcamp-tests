describe('The Transport Fee Function', function(){

    it('should return R20 since that is the cost of transport based on the morning shift you are working', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should return free since that is cost of transport based on the nightshift you are working', function(){
        assert.equal('free', transportFee('nightshift'));
    });
    it('should return R10 since that is cost of transport based on the afternoon shift you are working', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
});