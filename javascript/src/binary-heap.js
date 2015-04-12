var CompleteBinaryTree = require('./complete-binary-tree');

var BinaryHeap = function (value) {
    CompleteBinaryTree.call(this, value);

    var that = this;

    this.heapify = function () {
        var children = ['left', 'right'];
        var swapped = children.forEach(function (child) {
            if (that[child]) {
                that[child].heapify();

                if (that[child].value > that.value) {
                    var tmp = that.value;

                    that.value = that[child].value;
                    that[child].value = tmp;

                    return true;
                }
            }
        });

        if (swapped) {
            that.heapify();
        }
    };

    var _insert = this.insert;
    this.insert = function (key) {
        _insert.call(that, key, BinaryHeap);
        that.heapify();
    };
};

BinaryHeap.prototype = Object.create(CompleteBinaryTree.prototype);

module.exports = BinaryHeap;
