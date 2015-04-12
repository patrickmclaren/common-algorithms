describe('complete-binary-tree', function () {
    var CompleteBinaryTree;

    beforeEach(function () {
        CompleteBinaryTree = require('../src/complete-binary-tree');
    });

    it('should create a tree', function () {
        var tree = new CompleteBinaryTree();
        expect(tree).not.toBe(null);
    });

    it('should have a value', function () {
        var testValue = 1;

        var tree = new CompleteBinaryTree(testValue);
        expect(tree.value).toBe(testValue);
    });

    it('should insert a value', function () {
        var tree = new CompleteBinaryTree(1);
        tree.insert(2);

        expect(tree.left.value).toBe(2);
    });

    it('should be complete', function () {
        var tree = new CompleteBinaryTree(1);

        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        tree.insert(5);
        tree.insert(6);

        expect(tree.flatten().length).toBe(6);

        expect(tree.left.value).toBe(2);
        expect(tree.right.value).toBe(3);

        expect(tree.left.left.value).toBe(4);
        expect(tree.left.right.value).toBe(5);

        expect(tree.right.left.value).toBe(6);
    });
});
