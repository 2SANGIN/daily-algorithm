/*
 * Snail
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
 * Complexity: O(n)
 */
function snail(array) {
    const matrix = [...array];
    const result = [];

    while (matrix.length) {
        const firstRow = matrix.shift();
        const lastRow  = matrix.pop();

        result.push(...firstRow);
        for (const midRow of matrix) {
            result.push(midRow.pop());
        }
        if (lastRow) {
            result.push(...lastRow.reverse());
        }
        const climb = [];
        for (const midRow of matrix) {
            climb.push(midRow.shift());
        }
        result.push(...climb.reverse());
    }
    return result;
}

const {assert} = require("chai");

describe("Snail", function () {
    test([[]], []);
    test([[1]], [1]);
    test([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 3, 6, 9, 8, 7, 4, 5]);
    test([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]],
         [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
    test([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]],
         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);

});

function test(parameter, expected, title) {
    const actual = snail(parameter);
    it(title || `case [${parameter}] -> Expected ${expected}, got ${actual}`, () => {
        assert.deepStrictEqual(actual, expected);
    });
}
