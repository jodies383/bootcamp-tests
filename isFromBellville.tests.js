describe('is From Bellville', function(){

    it('should return true since the registration number is for Bellville', function(){
        assert.equal(true, isFromBellville('CY 123-456'));
    });
    it('should return true since the registration number is for Bellville', function(){
        assert.equal(true, isFromBellville('CY 567-890'));
    });
});