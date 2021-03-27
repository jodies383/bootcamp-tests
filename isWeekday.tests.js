describe('Is Weekday', function(){

    it('should return true since Monday is a weekday', function(){
        assert.equal(true, isWeekday("Monday"));
    });
    it('should return false since Saturday is not a weekday', function(){
        assert.equal(false, isWeekday("Saturday"));
    });
});