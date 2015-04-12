describe('binary-heap', function () {
    var BinaryHeap;

    beforeEach(function () {
        BinaryHeap = require('../src/binary-heap');
    });

    it('should create a heap', function () {
        var heap = new BinaryHeap(1);

        heap.insert(2);
        heap.insert(3);
        heap.insert(4);

        expect(heap.flatten().length).toBe(4);

        expect(heap.value).toBe(4);
        expect(heap.left.value).toBe(3);
    });
});
