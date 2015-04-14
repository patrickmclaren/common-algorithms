var BinaryHeap = require('./binary-heap');

var heapsort = function (arr) {
    if (arr.length === 0) {
        return arr;
    }

    var heap = new BinaryHeap(arr.pop());
    heap.put_array(arr);

    var res = [];
    while (!heap.isEmpty()) {
        res.push(heap.shift());
    }

    return res;
};

module.exports = heapsort;
