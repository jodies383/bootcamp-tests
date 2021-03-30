describe('The From Where Function', function(){

    it('should return Bellville since the registration number starts with CY', function(){
        assert.equal('Bellville', fromWhere('CY 478-446'));
    });
    it('should return Paarl since the registration number starts with CJ', function(){
        assert.equal('Paarl', fromWhere('CJ 721-693'));
    });
});
