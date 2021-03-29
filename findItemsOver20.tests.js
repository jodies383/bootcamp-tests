describe('Find Items Over 20 Function', function(){

    it('should print the names of the items that are more than 20', function(){
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));
    });
    it('should print the names of the items that are more than 20', function(){
        assert.deepEqual([{"name":"apples","qty":100},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":33}], findItemsOver20([{"name":"apples","qty":100},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":33}]));
    });
});