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

    it('should have a last element', function () {
        var tree = new CompleteBinaryTree(0);
        var tail = 10;
        for (var i = 1; i < tail + 1; i++) {
            tree.insert(i);
        }

        expect(tree.getTail().value).toBe(tail);
    });

    it('should remove the root element', function () {
        var tree = new CompleteBinaryTree(0);
        for (var i = 1; i < 10; i++) { tree.insert(i); }

        var length = tree.flatten().length;

        var root = tree.shift();
        expect(root).toEqual(0);

        expect(tree.depthFirstSearch(0)).toBe(null);
        expect(tree.flatten().length).not.toBe(length);
    });

    it('should apply predicate to tree', function () {
        var tree = new CompleteBinaryTree(0);
        for (var i = 1; i < 10; i++) { tree.insert(i); }

        var res = tree.some(function () {});
        expect(typeof res).toBe('undefined');
    });
});
