var BinaryTree = require('./binary-tree');

/**
 * Store a branch with context to it's parent. By providing getters and
 * setters, `NodeContext` allows both checking if a branch is present, and
 * setting (inserting) a new branch, without reference being lost as `null`.
 */
var BranchContext = function (parent, branch) {
    this.parent = parent;
    this.branch = branch;

    this.getBranch = function () {
        return parent[branch];
    };

    this.setBranch = function (node) {
        parent[branch] = node;
    };
}

/**
 * Get immediate children of given nodes, as `BranchContext`.
 */
var getChildren = function (nodes) {
    var children = []; var branches = ['left', 'right'];
    for (var i = 0; i < nodes.length; i++) {
        var tree = nodes[i];
        if (tree) {
            branches.forEach(function (branch) {
                children.push(new BranchContext(tree, branch));
            });
        }
    }

    return children;
};

/**
 * A binary tree that is complete, i.e.
 *   complete := full tree, except for perhaps rightmost sub-tree
 * Provides `insert` method, which preserves the complete property.
 */
var CompleteBinaryTree = function (value) {
    BinaryTree.call(this, value);

    var that = this;

    /**
     * Insert a new node with value `key` into the tree, such that
     * the complete property of the tree is preserved.
     * Takes `klass` parameter for class of new node, i.e. new node
     * will be instantiated as `new klass(key)`. Equivalently, `insert`
     * is a type parametrized function, allowing typesafe use of `insert` by
     * sub-classes of `CompleteBinaryTree`.
     */
    this.insert = function (key, klass) {
        klass = typeof klass !== 'undefined' ? klass : CompleteBinaryTree;

        var branches = [that]; var children = []; var inserted = false;
        while (!inserted) {
            children = getChildren(branches);

            inserted = children.some(function (child) {
                if (!child.getBranch()) {
                    child.setBranch(new klass(key));
                    return true;
                }
            });

            if (!inserted) {
                branches = [];
                children.forEach(function (child) {
                    var branch = child.getBranch();
                    if (branches.indexOf(branch) < 0) {
                        branches.push(branch);
                    }
                });
            }
        }
    };

    /**
     * Returns deepest element of the tree.
     */
    this.getTail = function (asContext) {
        asContext = typeof asContext !== 'undefined' ? asContext : false;

        var branches = [that]; var children = []; var tail = that; var end = false;
        while (!end) {
            children = getChildren(branches);

            end = children.some(function (child) {
                var branch = child.getBranch();
                if (!branch) {
                    return true;
                } else {
                    tail = asContext ? child : branch;
                }
            });

            if (!end) {
                branches = [];
                children.forEach(function (child) {
                    var branch = child.getBranch();
                    if (branches.indexOf(branch) < 0) {
                        branches.push(branch);
                    }
                });
            }
        }

        return tail;
    };

    /**
     * Returns true if the tree contains no elements.
     */
    this.isEmpty = function () {
        return (this.left === null && this.right === null && this.value === null);
    };

    /**
     * Removes the root element of the tree, and arranges the tree such that
     * the complete property is preserved.
     * @Return The value of the root of the tree
     */
    this.shift = function () {
        var res = this.value;

        var tail = this.getTail(true);

        if (tail !== this) {
            this.value = tail.getBranch().value;
            tail.setBranch(null);
        } else {
            // shifted last element of tree
            this.value = null;
        }

        return res;
    };
};

CompleteBinaryTree.prototype = Object.create(BinaryTree.prototype);

module.exports = CompleteBinaryTree;
