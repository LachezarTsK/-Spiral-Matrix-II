
#include <array>
#include <vector>
using namespace std;

class Solution {
    
    /*
    The position of the subarrays in array 'directions' is very important
    so that consecutive changes of 'indexDirection' yields a spiral movement.
    */
    inline static const array<array<int, 2>, 4> directions {array<int, 2>{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    inline static const int EMPTY_POINT = 0;

public:

    vector<vector<int>> generateMatrix(int sideMatrix) {

        vector<vector<int>> matrix(sideMatrix, vector<int>(sideMatrix));
        int totalIntegersToFill = sideMatrix * sideMatrix;
        int row = 0, column = 0;
        int indexDirection = 0;
        int currentIntegerToFill = 1;

        while (currentIntegerToFill <= totalIntegersToFill) {
            matrix[row][column] = currentIntegerToFill++;

            int nextRow = next(row, sideMatrix, directions[indexDirection][0]);
            int nextColumn = next(column, sideMatrix, directions[indexDirection][1]);

            if (matrix[nextRow][nextColumn] != EMPTY_POINT) {
                indexDirection = changeDirection(indexDirection);
            }
            row = row + directions[indexDirection][0];
            column = column + directions[indexDirection][1];
        }
        return matrix;
    }

private:

    int next(int indexMatrix, int sideMatrix, int direction) {
        return abs((indexMatrix + direction) % sideMatrix);
    }

    int changeDirection(int indexDirection) {
        return (indexDirection + 1) % directions.size();
    }
};
