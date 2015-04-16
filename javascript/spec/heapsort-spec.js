describe('heapsort', function () {
    var heapsort;

    beforeEach(function () {
        heapsort = require('../src/heapsort');
    });

    it('should sort an array numerically', function () {
        // Array size > 1
        var length = Math.ceil(Math.random() * 100) + 1;

        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(Math.round(Math.random() * 100));
        }

        // Sort array numerically
        var sorted = arr.slice().sort(function (a, b) {
            return a - b;
        }).reverse();

        expect(heapsort(arr)).toEqual(sorted);
    });
});
