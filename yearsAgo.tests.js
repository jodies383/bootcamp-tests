describe('yearsAgo', function(){

    it('should return true since 1999 was 22 years ago from 2021', function(){
        assert.equal(22, yearsAgo('1999'));
    });
    it('should return true since 1975 was 46 years ago from 2021', function(){
        assert.equal(46, yearsAgo('1975'));
    });
});