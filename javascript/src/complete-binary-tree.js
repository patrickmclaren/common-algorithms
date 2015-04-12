var BinaryTree = require('./binary-tree');

var NodeContext = function (tree, branch) {
    this.tree   = tree;
    this.branch = branch;

    this.getNode = function () {
        return tree[branch];
    };

    this.setNode = function (node) {
        tree[branch] = node;
    };
}

var getChildren = function (nodes) {
    var children = []; var branches = ['left', 'right'];
    for (var i = 0; i < nodes.length; i++) {
        var tree = nodes[i];
        if (tree) {
            branches.forEach(function (branch) {
                children.push(new NodeContext(tree, branch));
            });
        }
    }

    return children;
};

var CompleteBinaryTree = function (value) {
    BinaryTree.call(this, value);

    var that = this;

    this.insert = function (key, klass) {
        klass = typeof klass !== 'undefined' ? klass : CompleteBinaryTree;

        var nodes = [that]; var children = []; var inserted = false;
        while (!inserted) {
            children = getChildren(nodes);

            inserted = children.some(function (child) {
                if (!child.getNode()) {
                    child.setNode(new klass(key));
                    return true;
                }
            });

            if (!inserted) {
                nodes = [];
                children.forEach(function (child) {
                    var node = child.getNode();
                    if (nodes.indexOf(node) < 0) {
                        nodes.push(node);
                    }
                });
            }
        }
    }
};

CompleteBinaryTree.prototype = Object.create(BinaryTree.prototype);

module.exports = CompleteBinaryTree;
