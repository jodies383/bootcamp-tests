describe('The Total Phone Bill', function(){

    it('should return the bill amount of R7.45 based on the calls and sms made', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return the bill amount of R6.80 based on the calls and sms made', function(){
        assert.equal('R6.80', totalPhoneBill('call, sms, call, sms,'));
    });
});