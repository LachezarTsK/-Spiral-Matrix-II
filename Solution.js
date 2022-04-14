
/**
 * @param {number} sideMatrix
 * @return {number[][]}
 */
var generateMatrix = function (sideMatrix) {

    /*
     The position of the subarrays in array 'directions' is very important
     so that consecutive changes of 'indexDirection' yields a spiral movement.
     */
    this.directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const EMPTY_POINT = 0;
    const matrix = Array.from(new Array(sideMatrix), () => new Array(sideMatrix).fill(EMPTY_POINT));
    const totalIntegersToFill = sideMatrix * sideMatrix;

    let row = 0, column = 0;
    let indexDirection = 0;
    let currentIntegerToFill = 1;

    while (currentIntegerToFill <= totalIntegersToFill) {
        matrix[row][column] = currentIntegerToFill++;

        let nextRow = next(row, sideMatrix, this.directions[indexDirection][0]);
        let nextColumn = next(column, sideMatrix, this.directions[indexDirection][1]);

        if (matrix[nextRow][nextColumn] !== EMPTY_POINT) {
            indexDirection = changeDirection(indexDirection);
        }
        row = row + this.directions[indexDirection][0];
        column = column + this.directions[indexDirection][1];

    }
    return matrix;
};

/**
 * @param {number} indexMatrix
 * @param {number} sideMatrix
 * @param {number} direction
 * @return {number}
 */
function next(indexMatrix, sideMatrix, direction) {
    return Math.abs((indexMatrix + direction) % sideMatrix);
}

/**
 * @param {number} indexDirection
 * @return {number}
 */
function changeDirection(indexDirection) {
    return (indexDirection + 1) % this.directions.length;
}
