describe('Find Items Over Function', function(){

    it('should print the names of the items that are more than the input amount', function(){
        assert.deepEqual([{"name":"apples","qty":100}, {"name":"pears","qty":37}, {"name":"apples","qty":33}], findItemsOver([{"name":"apples","qty":100},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":33}], 30));
    });
    it('should print the names of the items that are more than the input amount', function(){
        assert.deepEqual([{"name":"apples","qty":100}], findItemsOver([{"name":"apples","qty":100},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":33}], 50));
    });
    it('should print nothing since there are no items that are more than the input amount', function(){
        assert.deepEqual([], findItemsOver([{"name":"apples","qty":100},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":33}], 500));
    });
});