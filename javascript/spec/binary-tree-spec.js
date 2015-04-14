describe('binary-tree', function () {
    var BinaryTree;

    beforeEach(function () {
        BinaryTree = require('../src/binary-tree');
    });

    it('should create a tree', function () {
        var tree = new BinaryTree();
        expect(tree).not.toBe(null);
    });

    it('should flatten a tree', function () {
        var tree = new BinaryTree(1);
        tree.left = new BinaryTree(2);
        tree.left.left = new BinaryTree(3);
        tree.right = new BinaryTree(4);

        expect(tree.flatten()).toEqual([1, 2, 3, 4]);
    });

    it('should have a value', function () {
        var testValue = 1;

        var tree = new BinaryTree(testValue);
        expect(tree.value).toBe(testValue);
    });

    it('should search depth first', function () {
        var tree = new BinaryTree(1);
        tree.left = new BinaryTree(2);
        tree.left.left = new BinaryTree(3);
        tree.right = new BinaryTree(4);

        expect(tree.depthFirstSearch(3)).toBe(
            tree.left.left);

        expect(tree.depthFirstSearch(5)).toBe(null);
    });
});
