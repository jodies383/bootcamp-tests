describe('Count All For Paarl', function(){

    it('should return four registration numbers for Paarl', function(){
        assert.equal(4, countAllPaarl('CJ 123-456, CJ 567-890, CJ 756-874, CJ 848-595'));
    });
    it('should return two registration numbers for Paarl', function(){
        assert.equal(2, countAllPaarl('CJ 123-456, CJ 567-890'));
    });
});