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

    /**
     * Insert element into the heap, preserving the heap property.
     */
    var _insert = this.insert;
    this.insert = function (key) {
        _insert.call(that, key, BinaryHeap);
        that.heapify();
    };

    /**
     * Insert elements of an array in to a binary heap.
     */
    this.put_array = function (arr) {
        while (arr.length > 0) {
            this.insert(arr.pop());
        }
    };

    var _shift = this.shift;
    this.shift = function () {
        var res = _shift.call(that);
        this.heapify();

        return res;
    };
};

BinaryHeap.prototype = Object.create(CompleteBinaryTree.prototype);

module.exports = BinaryHeap;
