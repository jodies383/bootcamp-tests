describe('regCheck', function(){

    it('should check if a registration number is for GP, L, EC, MP registration plates', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it('should check if a registration number is for GP, L, EC, MP registration plates', function(){
        assert.equal(true, regCheck('DV 23 LP MP', 'MP'));
    });
});