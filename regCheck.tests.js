describe('The Registration Check Function', function(){

    it('should return true since the registration number includes either GP, L, EC, MP', function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
    it('should return false since the registration number does not include either GP, L, EC, MP', function(){
        assert.equal(false, regCheck('DV 23 LP CY', 'MP'));
    });
});