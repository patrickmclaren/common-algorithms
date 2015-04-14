describe('heapsort', function () {
    var heapsort;

    beforeEach(function () {
        heapsort = require('../src/heapsort');
    });

    it('should sort an array', function () {
        var arr = [2, 3, 5, 4, 1, 6, 7, 8, 9, 10];
        expect(heapsort(arr)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});
