var BinaryNode = function (value) {
    var that = this;

    this.value = value;

    this.left  = null;
    this.right = null;

    this.flatten = function () {
        var nodes = [];
        nodes.push(that.value);

        var children = ['left', 'right'];
        children.forEach(function (child) {
            if (that[child]) {
                nodes = nodes.concat(that[child].flatten());
            }
        });

        return nodes;
    };

    this.depthFirstSearch = function (value) {
        function finder(val, tree) {
            if (tree === null) {
                return null;
            }

            if (tree.value === val) {
                return tree
            } else {
                return finder(val, tree.left) || finder(val, tree.right);
            }
        }

        return finder(value, that);
    };
};

module.exports = BinaryNode;
