describe('The Count Registration Number Function', function(){

    it('should return four registration numbers in the string', function(){
        assert.equal(4, countRegNumber('CJ 123-456, CJ 567-890, CJ 756-874, CJ 848-595'));
    });
    it('should return five registration numbers in the string', function(){
        assert.equal(5, countRegNumber('CJ 123-456, CJ 567-890, CA 182736,CY 523519,CJ 812328'));
    });
});