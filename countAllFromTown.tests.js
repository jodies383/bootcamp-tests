describe('The Count All From Town', function(){

    it('should return 3 since there are 3 registration numbers for the town', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('should return 5 since there are 5 registration numbers for the town', function(){
        assert.equal(5, countAllFromTown('CL 124,CL 567,CL 345, CL 456,CL 341','CL'));
    });
});