describe('binary-tree', function () {
    var BinaryTree;

    beforeEach(function () {
        BinaryTree = require('../src/binary-tree');
    });

    it('should create a tree', function () {
        var tree = new BinaryTree();
        expect(tree).not.toBe(null);
    });

    it('should have a value', function () {
        var testValue = 1;

        var tree = new BinaryTree(testValue);
        expect(tree.value).toBe(testValue);
    });
});
