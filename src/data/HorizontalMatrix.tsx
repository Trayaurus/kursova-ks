import _ from 'lodash';
//horizontal matrix data
//row 1
const horizonalMatrix1x1 = 1;
const horizonalMatrix1x2 = 1;
const horizonalMatrix1x3 = 1;
const horizonalMatrix1x4 = 0;
const horizonalMatrix1x5 = 0;
const horizonalMatrix1x6 = 0;
const horizonalMatrix1x7 = 1;
const horizonalMatrix1x8 = 0;
const horizonalMatrix1x9 = 0;
const horizonalMatrix1x10 = 0;

const horizontalRow1Arr = [
    horizonalMatrix1x1,
    horizonalMatrix1x2,
    horizonalMatrix1x3,
    horizonalMatrix1x4,
    horizonalMatrix1x5,
    horizonalMatrix1x6,
    horizonalMatrix1x7,
    horizonalMatrix1x8,
    horizonalMatrix1x9,
    horizonalMatrix1x10
];

//row 2
const horizonalMatrix2x1 = 1;
const horizonalMatrix2x2 = 0;
const horizonalMatrix2x3 = 0;
const horizonalMatrix2x4 = 1;
const horizonalMatrix2x5 = 1;
const horizonalMatrix2x6 = 0;
const horizonalMatrix2x7 = 0;
const horizonalMatrix2x8 = 1;
const horizonalMatrix2x9 = 0;
const horizonalMatrix2x10 = 0;

const horizontalRow2Arr = [
    horizonalMatrix2x1,
    horizonalMatrix2x2,
    horizonalMatrix2x3,
    horizonalMatrix2x4,
    horizonalMatrix2x5,
    horizonalMatrix2x6,
    horizonalMatrix2x7,
    horizonalMatrix2x8,
    horizonalMatrix2x9,
    horizonalMatrix2x10
];

//row 3
const horizonalMatrix3x1 = 0;
const horizonalMatrix3x2 = 1;
const horizonalMatrix3x3 = 0;
const horizonalMatrix3x4 = 1;
const horizonalMatrix3x5 = 0;
const horizonalMatrix3x6 = 1;
const horizonalMatrix3x7 = 0;
const horizonalMatrix3x8 = 0;
const horizonalMatrix3x9 = 1;
const horizonalMatrix3x10 = 0;

const horizontalRow3Arr = [
    horizonalMatrix3x1,
    horizonalMatrix3x2,
    horizonalMatrix3x3,
    horizonalMatrix3x4,
    horizonalMatrix3x5,
    horizonalMatrix3x6,
    horizonalMatrix3x7,
    horizonalMatrix3x8,
    horizonalMatrix3x9,
    horizonalMatrix3x10
];

//row 4
const horizonalMatrix4x1 = 0;
const horizonalMatrix4x2 = 0;
const horizonalMatrix4x3 = 1;
const horizonalMatrix4x4 = 0;
const horizonalMatrix4x5 = 1;
const horizonalMatrix4x6 = 1;
const horizonalMatrix4x7 = 0;
const horizonalMatrix4x8 = 0;
const horizonalMatrix4x9 = 0;
const horizonalMatrix4x10 = 1;

const horizontalRow4Arr = [
    horizonalMatrix4x1,
    horizonalMatrix4x2,
    horizonalMatrix4x3,
    horizonalMatrix4x4,
    horizonalMatrix4x5,
    horizonalMatrix4x6,
    horizonalMatrix4x7,
    horizonalMatrix4x8,
    horizonalMatrix4x9,
    horizonalMatrix4x10
];

//vertical matrix data
//row 1
const verticalMatrix1x1 = 1;
const verticalMatrix1x2 = 1;
const verticalMatrix1x3 = 1;
const verticalMatrix1x4 = 0;
const verticalMatrix1x5 = 0;
const verticalMatrix1x6 = 0;
const verticalMatrix1x7 = 1;
const verticalMatrix1x8 = 1;
const verticalMatrix1x9 = 1;
const verticalMatrix1x10 = 1;
const verticalMatrix1x11 = 0;
const verticalMatrix1x12 = 0;
const verticalMatrix1x13 = 0;

const verticalRow1Arr = [
    verticalMatrix1x1,
    verticalMatrix1x2,
    verticalMatrix1x3,
    verticalMatrix1x4,
    verticalMatrix1x5,
    verticalMatrix1x6,
    verticalMatrix1x7,
    verticalMatrix1x8,
    verticalMatrix1x9,
    verticalMatrix1x10,
    verticalMatrix1x11,
    verticalMatrix1x12,
    verticalMatrix1x13
];

//row 2
const verticalMatrix2x1 = 1;
const verticalMatrix2x2 = 0;
const verticalMatrix2x3 = 0;
const verticalMatrix2x4 = 1;
const verticalMatrix2x5 = 1;
const verticalMatrix2x6 = 0;
const verticalMatrix2x7 = 1;
const verticalMatrix2x8 = 1;
const verticalMatrix2x9 = 0;
const verticalMatrix2x10 = 0;
const verticalMatrix2x11 = 1;
const verticalMatrix2x12 = 0;
const verticalMatrix2x13 = 0;

const verticalRow2Arr = [
    verticalMatrix2x1,
    verticalMatrix2x2,
    verticalMatrix2x3,
    verticalMatrix2x4,
    verticalMatrix2x5,
    verticalMatrix2x6,
    verticalMatrix2x7,
    verticalMatrix2x8,
    verticalMatrix2x9,
    verticalMatrix2x10,
    verticalMatrix2x11,
    verticalMatrix2x12,
    verticalMatrix2x13
];

//row 3
const verticalMatrix3x1 = 0;
const verticalMatrix3x2 = 1;
const verticalMatrix3x3 = 0;
const verticalMatrix3x4 = 1;
const verticalMatrix3x5 = 0;
const verticalMatrix3x6 = 1;
const verticalMatrix3x7 = 1;
const verticalMatrix3x8 = 0;
const verticalMatrix3x9 = 1;
const verticalMatrix3x10 = 0;
const verticalMatrix3x11 = 0;
const verticalMatrix3x12 = 1;
const verticalMatrix3x13 = 0;

const verticalRow3Arr = [
    verticalMatrix3x1,
    verticalMatrix3x2,
    verticalMatrix3x3,
    verticalMatrix3x4,
    verticalMatrix3x5,
    verticalMatrix3x6,
    verticalMatrix3x7,
    verticalMatrix3x8,
    verticalMatrix3x9,
    verticalMatrix3x10,
    verticalMatrix3x11,
    verticalMatrix3x12,
    verticalMatrix3x13
];

//row 4
const verticalMatrix4x1 = 0;
const verticalMatrix4x2 = 0;
const verticalMatrix4x3 = 1;
const verticalMatrix4x4 = 0;
const verticalMatrix4x5 = 1;
const verticalMatrix4x6 = 1;
const verticalMatrix4x7 = 0;
const verticalMatrix4x8 = 1;
const verticalMatrix4x9 = 1;
const verticalMatrix4x10 = 0;
const verticalMatrix4x11 = 0;
const verticalMatrix4x12 = 0;
const verticalMatrix4x13 = 1;

const verticalRow4Arr = [
    verticalMatrix4x1,
    verticalMatrix4x2,
    verticalMatrix4x3,
    verticalMatrix4x4,
    verticalMatrix4x5,
    verticalMatrix4x6,
    verticalMatrix4x7,
    verticalMatrix4x8,
    verticalMatrix4x9,
    verticalMatrix4x10,
    verticalMatrix4x11,
    verticalMatrix4x12,
    verticalMatrix4x13
];

export const verticalMatrix: number[][] = [verticalRow1Arr, verticalRow2Arr, verticalRow3Arr, verticalRow4Arr];

export const horizontalMatrix: number[][] = [horizontalRow1Arr, horizontalRow2Arr, horizontalRow3Arr, horizontalRow4Arr];

const horizontalMatrixTransposedFunc = (horizontalMatrix: number[][]): number[][] => {
    const result: any = _.zip.apply(_, horizontalMatrix);
    return result;
};

const verticalMatrixTransposedFunc = (verticalMatrix: number[][]): number[][] => {
    const result: any = _.zip.apply(_, verticalMatrix);
    return result;
};

export const horizontalMatrixTransposed: number[][] = horizontalMatrixTransposedFunc(horizontalMatrix);

export const verticalMatrixTransposed: number[][] = verticalMatrixTransposedFunc(verticalMatrix);
