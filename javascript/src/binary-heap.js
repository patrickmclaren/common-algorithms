var BinaryTree = require('./binary-tree');

var BinaryHeap = function (value) {
    BinaryTree.call(this, value);

    this.insert = function (key) {
        if (this.left) {
            if (this.left.value < key) {
                if (this.right) {
                    if (this.right.value > key) {
                        this.right.insert(key);
                    } else {
                        var tmp = this.right;
                        this.right = new BinaryHeap(key);
                        this.right.left = tmp;
                    }
                } else {
                    this.right = new BinaryHeap(key);
                }
            } else {
                this.left.insert(key);
            }
        } else {
            this.left = new BinaryHeap(key);
        }
    };
};

BinaryHeap.prototype = Object.create(BinaryTree.prototype);

module.exports = BinaryHeap;
