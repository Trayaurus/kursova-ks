import React, { useState } from 'react';
import './NoiseStyle.css';

const Noise = () => {
    //get matrix data from localstorage
    const getMatrixData = () => {
        //matrix rows
        const matrix1Str = localStorage.getItem('matrix1Arr');
        const matrix2Str = localStorage.getItem('matrix2Arr');
        const matrix3Str = localStorage.getItem('matrix3Arr');
        const matrix4Str = localStorage.getItem('matrix4Arr');
        const matrix5Str = localStorage.getItem('matrix5Arr');
        const matrix6Str = localStorage.getItem('matrix6Arr');
        const matrix7Str = localStorage.getItem('matrix7Arr');
        const matrix8Str = localStorage.getItem('matrix8Arr');
        const matrix9Str = localStorage.getItem('matrix9Arr');

        //horizontal check results
        const horizontalResultRow1Str = localStorage.getItem('horizontalResultRow1');
        const horizontalResultRow2Str = localStorage.getItem('horizontalResultRow2');
        const horizontalResultRow3Str = localStorage.getItem('horizontalResultRow3');
        const horizontalResultRow4Str = localStorage.getItem('horizontalResultRow4');
        const horizontalResultRow5Str = localStorage.getItem('horizontalResultRow5');
        const horizontalResultRow6Str = localStorage.getItem('horizontalResultRow6');
        const horizontalResultRow7Str = localStorage.getItem('horizontalResultRow7');
        const horizontalResultRow8Str = localStorage.getItem('horizontalResultRow8');
        const horizontalResultRow9Str = localStorage.getItem('horizontalResultRow9');

        //vertical check results
        const verticalResultRow10Str = localStorage.getItem('verticalResultRow10');
        const verticalResultRow11Str = localStorage.getItem('verticalResultRow11');
        const verticalResultRow12Str = localStorage.getItem('verticalResultRow12');
        const verticalResultRow13Str = localStorage.getItem('verticalResultRow13');

        if (
            matrix1Str !== null &&
            matrix2Str !== null &&
            matrix3Str !== null &&
            matrix4Str !== null &&
            matrix5Str !== null &&
            matrix6Str !== null &&
            matrix7Str !== null &&
            matrix8Str !== null &&
            matrix9Str !== null &&
            horizontalResultRow1Str !== null &&
            horizontalResultRow2Str !== null &&
            horizontalResultRow3Str !== null &&
            horizontalResultRow4Str !== null &&
            horizontalResultRow5Str !== null &&
            horizontalResultRow6Str !== null &&
            horizontalResultRow7Str !== null &&
            horizontalResultRow8Str !== null &&
            horizontalResultRow9Str !== null &&
            verticalResultRow10Str !== null &&
            verticalResultRow11Str !== null &&
            verticalResultRow12Str !== null &&
            verticalResultRow13Str !== null
        ) {
            //convert matrix rows to array of digits
            const matrixRow1 = Array.from(matrix1Str.replaceAll(',', ''), Number);
            const matrixRow2 = Array.from(matrix2Str.replaceAll(',', ''), Number);
            const matrixRow3 = Array.from(matrix3Str.replaceAll(',', ''), Number);
            const matrixRow4 = Array.from(matrix4Str.replaceAll(',', ''), Number);
            const matrixRow5 = Array.from(matrix5Str.replaceAll(',', ''), Number);
            const matrixRow6 = Array.from(matrix6Str.replaceAll(',', ''), Number);
            const matrixRow7 = Array.from(matrix7Str.replaceAll(',', ''), Number);
            const matrixRow8 = Array.from(matrix8Str.replaceAll(',', ''), Number);
            const matrixRow9 = Array.from(matrix9Str.replaceAll(',', ''), Number);

            //convert hroizontal checks rows to array of digits
            const horizontalResultRow1 = Array.from(horizontalResultRow1Str.replaceAll(',', ''), Number);
            const horizontalResultRow2 = Array.from(horizontalResultRow2Str.replaceAll(',', ''), Number);
            const horizontalResultRow3 = Array.from(horizontalResultRow3Str.replaceAll(',', ''), Number);
            const horizontalResultRow4 = Array.from(horizontalResultRow4Str.replaceAll(',', ''), Number);
            const horizontalResultRow5 = Array.from(horizontalResultRow5Str.replaceAll(',', ''), Number);
            const horizontalResultRow6 = Array.from(horizontalResultRow6Str.replaceAll(',', ''), Number);
            const horizontalResultRow7 = Array.from(horizontalResultRow7Str.replaceAll(',', ''), Number);
            const horizontalResultRow8 = Array.from(horizontalResultRow8Str.replaceAll(',', ''), Number);
            const horizontalResultRow9 = Array.from(horizontalResultRow9Str.replaceAll(',', ''), Number);

            //convert vertical checks rows to array of digits
            const verticalResultRow10 = Array.from(verticalResultRow10Str.replaceAll(',', ''), Number);
            const verticalResultRow11 = Array.from(verticalResultRow11Str.replaceAll(',', ''), Number);
            const verticalResultRow12 = Array.from(verticalResultRow12Str.replaceAll(',', ''), Number);
            const verticalResultRow13 = Array.from(verticalResultRow13Str.replaceAll(',', ''), Number);

            const matrix1x1 = matrixRow1[0];
            const matrix1x2 = matrixRow1[1];
            const matrix1x3 = matrixRow1[2];
            const matrix1x4 = matrixRow1[3];
            const matrix1x5 = matrixRow1[4];
            const matrix1x6 = matrixRow1[5];

            const matrix2x1 = matrixRow2[0];
            const matrix2x2 = matrixRow2[1];
            const matrix2x3 = matrixRow2[2];
            const matrix2x4 = matrixRow2[3];
            const matrix2x5 = matrixRow2[4];
            const matrix2x6 = matrixRow2[5];

            const matrix3x1 = matrixRow3[0];
            const matrix3x2 = matrixRow3[1];
            const matrix3x3 = matrixRow3[2];
            const matrix3x4 = matrixRow3[3];
            const matrix3x5 = matrixRow3[4];
            const matrix3x6 = matrixRow3[5];

            const matrix4x1 = matrixRow4[0];
            const matrix4x2 = matrixRow4[1];
            const matrix4x3 = matrixRow4[2];
            const matrix4x4 = matrixRow4[3];
            const matrix4x5 = matrixRow4[4];
            const matrix4x6 = matrixRow4[5];

            const matrix5x1 = matrixRow5[0];
            const matrix5x2 = matrixRow5[1];
            const matrix5x3 = matrixRow5[2];
            const matrix5x4 = matrixRow5[3];
            const matrix5x5 = matrixRow5[4];
            const matrix5x6 = matrixRow5[5];

            const matrix6x1 = matrixRow6[0];
            const matrix6x2 = matrixRow6[1];
            const matrix6x3 = matrixRow6[2];
            const matrix6x4 = matrixRow6[3];
            const matrix6x5 = matrixRow6[4];
            const matrix6x6 = matrixRow6[5];

            const matrix7x1 = matrixRow7[0];
            const matrix7x2 = matrixRow7[1];
            const matrix7x3 = matrixRow7[2];
            const matrix7x4 = matrixRow7[3];
            const matrix7x5 = matrixRow7[4];
            const matrix7x6 = matrixRow7[5];

            const matrix8x1 = matrixRow8[0];
            const matrix8x2 = matrixRow8[1];
            const matrix8x3 = matrixRow8[2];
            const matrix8x4 = matrixRow8[3];
            const matrix8x5 = matrixRow8[4];
            const matrix8x6 = matrixRow8[5];

            const matrix9x1 = matrixRow9[0];
            const matrix9x2 = matrixRow9[1];
            const matrix9x3 = matrixRow9[2];
            const matrix9x4 = matrixRow9[3];
            const matrix9x5 = matrixRow9[4];
            const matrix9x6 = matrixRow9[5];

            const horizontalResult1x16 = horizontalResultRow1[0];
            const horizontalResult1x17 = horizontalResultRow1[1];
            const horizontalResult1x18 = horizontalResultRow1[2];
            const horizontalResult1x19 = horizontalResultRow1[3];

            const horizontalResult2x16 = horizontalResultRow2[0];
            const horizontalResult2x17 = horizontalResultRow2[1];
            const horizontalResult2x18 = horizontalResultRow2[2];
            const horizontalResult2x19 = horizontalResultRow2[3];

            const horizontalResult3x16 = horizontalResultRow3[0];
            const horizontalResult3x17 = horizontalResultRow3[1];
            const horizontalResult3x18 = horizontalResultRow3[2];
            const horizontalResult3x19 = horizontalResultRow3[3];

            const horizontalResult4x16 = horizontalResultRow4[0];
            const horizontalResult4x17 = horizontalResultRow4[1];
            const horizontalResult4x18 = horizontalResultRow4[2];
            const horizontalResult4x19 = horizontalResultRow4[3];

            const horizontalResult5x16 = horizontalResultRow5[0];
            const horizontalResult5x17 = horizontalResultRow5[1];
            const horizontalResult5x18 = horizontalResultRow5[2];
            const horizontalResult5x19 = horizontalResultRow5[3];

            const horizontalResult6x16 = horizontalResultRow6[0];
            const horizontalResult6x17 = horizontalResultRow6[1];
            const horizontalResult6x18 = horizontalResultRow6[2];
            const horizontalResult6x19 = horizontalResultRow6[3];

            const horizontalResult7x16 = horizontalResultRow7[0];
            const horizontalResult7x17 = horizontalResultRow7[1];
            const horizontalResult7x18 = horizontalResultRow7[2];
            const horizontalResult7x19 = horizontalResultRow7[3];

            const horizontalResult8x16 = horizontalResultRow8[0];
            const horizontalResult8x17 = horizontalResultRow8[1];
            const horizontalResult8x18 = horizontalResultRow8[2];
            const horizontalResult8x19 = horizontalResultRow8[3];

            const horizontalResult9x16 = horizontalResultRow9[0];
            const horizontalResult9x17 = horizontalResultRow9[1];
            const horizontalResult9x18 = horizontalResultRow9[2];
            const horizontalResult9x19 = horizontalResultRow9[3];

            const verticalResultRow10x1 = verticalResultRow10[0];
            const verticalResultRow10x2 = verticalResultRow10[1];
            const verticalResultRow10x3 = verticalResultRow10[2];
            const verticalResultRow10x4 = verticalResultRow10[3];
            const verticalResultRow10x5 = verticalResultRow10[4];
            const verticalResultRow10x6 = verticalResultRow10[5];
            const verticalResultRow10x7 = verticalResultRow10[6];
            const verticalResultRow10x8 = verticalResultRow10[7];
            const verticalResultRow10x9 = verticalResultRow10[8];
            const verticalResultRow10x10 = verticalResultRow10[9];

            const verticalResultRow11x1 = verticalResultRow11[0];
            const verticalResultRow11x2 = verticalResultRow11[1];
            const verticalResultRow11x3 = verticalResultRow11[2];
            const verticalResultRow11x4 = verticalResultRow11[3];
            const verticalResultRow11x5 = verticalResultRow11[4];
            const verticalResultRow11x6 = verticalResultRow11[5];
            const verticalResultRow11x7 = verticalResultRow11[6];
            const verticalResultRow11x8 = verticalResultRow11[7];
            const verticalResultRow11x9 = verticalResultRow11[8];
            const verticalResultRow11x10 = verticalResultRow11[9];

            const verticalResultRow12x1 = verticalResultRow12[0];
            const verticalResultRow12x2 = verticalResultRow12[1];
            const verticalResultRow12x3 = verticalResultRow12[2];
            const verticalResultRow12x4 = verticalResultRow12[3];
            const verticalResultRow12x5 = verticalResultRow12[4];
            const verticalResultRow12x6 = verticalResultRow12[5];
            const verticalResultRow12x7 = verticalResultRow12[6];
            const verticalResultRow12x8 = verticalResultRow12[7];
            const verticalResultRow12x9 = verticalResultRow12[8];
            const verticalResultRow12x10 = verticalResultRow12[9];

            const verticalResultRow13x1 = verticalResultRow13[0];
            const verticalResultRow13x2 = verticalResultRow13[1];
            const verticalResultRow13x3 = verticalResultRow13[2];
            const verticalResultRow13x4 = verticalResultRow13[3];
            const verticalResultRow13x5 = verticalResultRow13[4];
            const verticalResultRow13x6 = verticalResultRow13[5];
            const verticalResultRow13x7 = verticalResultRow13[6];
            const verticalResultRow13x8 = verticalResultRow13[7];
            const verticalResultRow13x9 = verticalResultRow13[8];
            const verticalResultRow13x10 = verticalResultRow13[9];

            const matrixColumns = {
                column1Arr: [
                    matrix1x1,
                    matrix2x1,
                    matrix3x1,
                    matrix4x1,
                    matrix5x1,
                    matrix6x1,
                    matrix7x1,
                    matrix8x1,
                    matrix9x1,
                    verticalResultRow10x1,
                    verticalResultRow11x1,
                    verticalResultRow12x1,
                    verticalResultRow13x1
                ],
                column2Arr: [
                    matrix1x2,
                    matrix2x2,
                    matrix3x2,
                    matrix4x2,
                    matrix5x2,
                    matrix6x2,
                    matrix7x2,
                    matrix8x2,
                    matrix9x2,
                    verticalResultRow10x2,
                    verticalResultRow11x2,
                    verticalResultRow12x2,
                    verticalResultRow13x2
                ],
                column3Arr: [
                    matrix1x3,
                    matrix2x3,
                    matrix3x3,
                    matrix4x3,
                    matrix5x3,
                    matrix6x3,
                    matrix7x3,
                    matrix8x3,
                    matrix9x3,
                    verticalResultRow10x3,
                    verticalResultRow11x3,
                    verticalResultRow12x3,
                    verticalResultRow13x3
                ],
                column4Arr: [
                    matrix1x4,
                    matrix2x4,
                    matrix3x4,
                    matrix4x4,
                    matrix5x4,
                    matrix6x4,
                    matrix7x4,
                    matrix8x4,
                    matrix9x4,
                    verticalResultRow10x4,
                    verticalResultRow11x4,
                    verticalResultRow12x4,
                    verticalResultRow13x4
                ],
                column5Arr: [
                    matrix1x5,
                    matrix2x5,
                    matrix3x5,
                    matrix4x5,
                    matrix5x5,
                    matrix6x5,
                    matrix7x5,
                    matrix8x5,
                    matrix9x5,
                    verticalResultRow10x5,
                    verticalResultRow11x5,
                    verticalResultRow12x5,
                    verticalResultRow13x5
                ],
                column6Arr: [
                    matrix1x6,
                    matrix2x6,
                    matrix3x6,
                    matrix4x6,
                    matrix5x6,
                    matrix6x6,
                    matrix7x6,
                    matrix8x6,
                    matrix9x6,
                    verticalResultRow10x6,
                    verticalResultRow11x6,
                    verticalResultRow12x6,
                    verticalResultRow13x6
                ],
                column7Arr: [
                    horizontalResult1x16,
                    horizontalResult2x16,
                    horizontalResult3x16,
                    horizontalResult4x16,
                    horizontalResult5x16,
                    horizontalResult6x16,
                    horizontalResult7x16,
                    horizontalResult8x16,
                    horizontalResult9x16,
                    verticalResultRow10x7,
                    verticalResultRow11x7,
                    verticalResultRow12x7,
                    verticalResultRow13x7
                ],
                column8Arr: [
                    horizontalResult1x17,
                    horizontalResult2x17,
                    horizontalResult3x17,
                    horizontalResult4x17,
                    horizontalResult5x17,
                    horizontalResult6x17,
                    horizontalResult7x17,
                    horizontalResult8x17,
                    horizontalResult9x17,
                    verticalResultRow10x8,
                    verticalResultRow11x8,
                    verticalResultRow12x8,
                    verticalResultRow13x8
                ],
                column9Arr: [
                    horizontalResult1x18,
                    horizontalResult2x18,
                    horizontalResult3x18,
                    horizontalResult4x18,
                    horizontalResult5x18,
                    horizontalResult6x18,
                    horizontalResult7x18,
                    horizontalResult8x18,
                    horizontalResult9x18,
                    verticalResultRow10x9,
                    verticalResultRow11x9,
                    verticalResultRow12x9,
                    verticalResultRow13x9
                ],
                column10Arr: [
                    horizontalResult1x19,
                    horizontalResult2x19,
                    horizontalResult3x19,
                    horizontalResult4x19,
                    horizontalResult5x19,
                    horizontalResult6x19,
                    horizontalResult7x19,
                    horizontalResult8x19,
                    horizontalResult9x19,
                    verticalResultRow10x10,
                    verticalResultRow11x10,
                    verticalResultRow12x10,
                    verticalResultRow13x10
                ]
            };
            return matrixColumns;
        }
    };

    const [random1x1, setRandom1x1] = useState<number>(0);
    const [random1x2, setRandom1x2] = useState<number>(0);
    const [random1x3, setRandom1x3] = useState<number>(0);
    const [random1x4, setRandom1x4] = useState<number>(0);
    const [random1x5, setRandom1x5] = useState<number>(0);
    const [random1x6, setRandom1x6] = useState<number>(0);
    const [random1x7, setRandom1x7] = useState<number>(0);
    const [random1x8, setRandom1x8] = useState<number>(0);
    const [random1x9, setRandom1x9] = useState<number>(0);
    const [random1x10, setRandom1x10] = useState<number>(0);

    const [random2x1, setRandom2x1] = useState<number>(0);
    const [random2x2, setRandom2x2] = useState<number>(0);
    const [random2x3, setRandom2x3] = useState<number>(0);
    const [random2x4, setRandom2x4] = useState<number>(0);
    const [random2x5, setRandom2x5] = useState<number>(0);
    const [random2x6, setRandom2x6] = useState<number>(0);
    const [random2x7, setRandom2x7] = useState<number>(0);
    const [random2x8, setRandom2x8] = useState<number>(0);
    const [random2x9, setRandom2x9] = useState<number>(0);
    const [random2x10, setRandom2x10] = useState<number>(0);

    const [random3x1, setRandom3x1] = useState<number>(0);
    const [random3x2, setRandom3x2] = useState<number>(0);
    const [random3x3, setRandom3x3] = useState<number>(0);
    const [random3x4, setRandom3x4] = useState<number>(0);
    const [random3x5, setRandom3x5] = useState<number>(0);
    const [random3x6, setRandom3x6] = useState<number>(0);
    const [random3x7, setRandom3x7] = useState<number>(0);
    const [random3x8, setRandom3x8] = useState<number>(0);
    const [random3x9, setRandom3x9] = useState<number>(0);
    const [random3x10, setRandom3x10] = useState<number>(0);

    const [random4x1, setRandom4x1] = useState<number>(0);
    const [random4x2, setRandom4x2] = useState<number>(0);
    const [random4x3, setRandom4x3] = useState<number>(0);
    const [random4x4, setRandom4x4] = useState<number>(0);
    const [random4x5, setRandom4x5] = useState<number>(0);
    const [random4x6, setRandom4x6] = useState<number>(0);
    const [random4x7, setRandom4x7] = useState<number>(0);
    const [random4x8, setRandom4x8] = useState<number>(0);
    const [random4x9, setRandom4x9] = useState<number>(0);
    const [random4x10, setRandom4x10] = useState<number>(0);

    const [random5x1, setRandom5x1] = useState<number>(0);
    const [random5x2, setRandom5x2] = useState<number>(0);
    const [random5x3, setRandom5x3] = useState<number>(0);
    const [random5x4, setRandom5x4] = useState<number>(0);
    const [random5x5, setRandom5x5] = useState<number>(0);
    const [random5x6, setRandom5x6] = useState<number>(0);
    const [random5x7, setRandom5x7] = useState<number>(0);
    const [random5x8, setRandom5x8] = useState<number>(0);
    const [random5x9, setRandom5x9] = useState<number>(0);
    const [random5x10, setRandom5x10] = useState<number>(0);

    const [random6x1, setRandom6x1] = useState<number>(0);
    const [random6x2, setRandom6x2] = useState<number>(0);
    const [random6x3, setRandom6x3] = useState<number>(0);
    const [random6x4, setRandom6x4] = useState<number>(0);
    const [random6x5, setRandom6x5] = useState<number>(0);
    const [random6x6, setRandom6x6] = useState<number>(0);
    const [random6x7, setRandom6x7] = useState<number>(0);
    const [random6x8, setRandom6x8] = useState<number>(0);
    const [random6x9, setRandom6x9] = useState<number>(0);
    const [random6x10, setRandom6x10] = useState<number>(0);

    const [random7x1, setRandom7x1] = useState<number>(0);
    const [random7x2, setRandom7x2] = useState<number>(0);
    const [random7x3, setRandom7x3] = useState<number>(0);
    const [random7x4, setRandom7x4] = useState<number>(0);
    const [random7x5, setRandom7x5] = useState<number>(0);
    const [random7x6, setRandom7x6] = useState<number>(0);
    const [random7x7, setRandom7x7] = useState<number>(0);
    const [random7x8, setRandom7x8] = useState<number>(0);
    const [random7x9, setRandom7x9] = useState<number>(0);
    const [random7x10, setRandom7x10] = useState<number>(0);

    const [random8x1, setRandom8x1] = useState<number>(0);
    const [random8x2, setRandom8x2] = useState<number>(0);
    const [random8x3, setRandom8x3] = useState<number>(0);
    const [random8x4, setRandom8x4] = useState<number>(0);
    const [random8x5, setRandom8x5] = useState<number>(0);
    const [random8x6, setRandom8x6] = useState<number>(0);
    const [random8x7, setRandom8x7] = useState<number>(0);
    const [random8x8, setRandom8x8] = useState<number>(0);
    const [random8x9, setRandom8x9] = useState<number>(0);
    const [random8x10, setRandom8x10] = useState<number>(0);

    const [random9x1, setRandom9x1] = useState<number>(0);
    const [random9x2, setRandom9x2] = useState<number>(0);
    const [random9x3, setRandom9x3] = useState<number>(0);
    const [random9x4, setRandom9x4] = useState<number>(0);
    const [random9x5, setRandom9x5] = useState<number>(0);
    const [random9x6, setRandom9x6] = useState<number>(0);
    const [random9x7, setRandom9x7] = useState<number>(0);
    const [random9x8, setRandom9x8] = useState<number>(0);
    const [random9x9, setRandom9x9] = useState<number>(0);
    const [random9x10, setRandom9x10] = useState<number>(0);

    const [random10x1, setRandom10x1] = useState<number>(0);
    const [random10x2, setRandom10x2] = useState<number>(0);
    const [random10x3, setRandom10x3] = useState<number>(0);
    const [random10x4, setRandom10x4] = useState<number>(0);
    const [random10x5, setRandom10x5] = useState<number>(0);
    const [random10x6, setRandom10x6] = useState<number>(0);
    const [random10x7, setRandom10x7] = useState<number>(0);
    const [random10x8, setRandom10x8] = useState<number>(0);
    const [random10x9, setRandom10x9] = useState<number>(0);
    const [random10x10, setRandom10x10] = useState<number>(0);

    const [random11x1, setRandom11x1] = useState<number>(0);
    const [random11x2, setRandom11x2] = useState<number>(0);
    const [random11x3, setRandom11x3] = useState<number>(0);
    const [random11x4, setRandom11x4] = useState<number>(0);
    const [random11x5, setRandom11x5] = useState<number>(0);
    const [random11x6, setRandom11x6] = useState<number>(0);
    const [random11x7, setRandom11x7] = useState<number>(0);
    const [random11x8, setRandom11x8] = useState<number>(0);
    const [random11x9, setRandom11x9] = useState<number>(0);
    const [random11x10, setRandom11x10] = useState<number>(0);

    const [random12x1, setRandom12x1] = useState<number>(0);
    const [random12x2, setRandom12x2] = useState<number>(0);
    const [random12x3, setRandom12x3] = useState<number>(0);
    const [random12x4, setRandom12x4] = useState<number>(0);
    const [random12x5, setRandom12x5] = useState<number>(0);
    const [random12x6, setRandom12x6] = useState<number>(0);
    const [random12x7, setRandom12x7] = useState<number>(0);
    const [random12x8, setRandom12x8] = useState<number>(0);
    const [random12x9, setRandom12x9] = useState<number>(0);
    const [random12x10, setRandom12x10] = useState<number>(0);

    const [random13x1, setRandom13x1] = useState<number>(0);
    const [random13x2, setRandom13x2] = useState<number>(0);
    const [random13x3, setRandom13x3] = useState<number>(0);
    const [random13x4, setRandom13x4] = useState<number>(0);
    const [random13x5, setRandom13x5] = useState<number>(0);
    const [random13x6, setRandom13x6] = useState<number>(0);
    const [random13x7, setRandom13x7] = useState<number>(0);
    const [random13x8, setRandom13x8] = useState<number>(0);
    const [random13x9, setRandom13x9] = useState<number>(0);
    const [random13x10, setRandom13x10] = useState<number>(0);

    const createRandoms = () => {
        // random row 1
        setRandom1x1(parseFloat(Math.random().toFixed(3)));
        setRandom1x2(parseFloat(Math.random().toFixed(3)));
        setRandom1x3(parseFloat(Math.random().toFixed(3)));
        setRandom1x4(parseFloat(Math.random().toFixed(3)));
        setRandom1x5(parseFloat(Math.random().toFixed(3)));
        setRandom1x6(parseFloat(Math.random().toFixed(3)));
        setRandom1x7(parseFloat(Math.random().toFixed(3)));
        setRandom1x8(parseFloat(Math.random().toFixed(3)));
        setRandom1x9(parseFloat(Math.random().toFixed(3)));
        setRandom1x10(parseFloat(Math.random().toFixed(3)));

        // random row 2
        setRandom2x1(parseFloat(Math.random().toFixed(3)));
        setRandom2x2(parseFloat(Math.random().toFixed(3)));
        setRandom2x3(parseFloat(Math.random().toFixed(3)));
        setRandom2x4(parseFloat(Math.random().toFixed(3)));
        setRandom2x5(parseFloat(Math.random().toFixed(3)));
        setRandom2x6(parseFloat(Math.random().toFixed(3)));
        setRandom2x7(parseFloat(Math.random().toFixed(3)));
        setRandom2x8(parseFloat(Math.random().toFixed(3)));
        setRandom2x9(parseFloat(Math.random().toFixed(3)));
        setRandom2x10(parseFloat(Math.random().toFixed(3)));

        // random row 3
        setRandom3x1(parseFloat(Math.random().toFixed(3)));
        setRandom3x2(parseFloat(Math.random().toFixed(3)));
        setRandom3x3(parseFloat(Math.random().toFixed(3)));
        setRandom3x4(parseFloat(Math.random().toFixed(3)));
        setRandom3x5(parseFloat(Math.random().toFixed(3)));
        setRandom3x6(parseFloat(Math.random().toFixed(3)));
        setRandom3x7(parseFloat(Math.random().toFixed(3)));
        setRandom3x8(parseFloat(Math.random().toFixed(3)));
        setRandom3x9(parseFloat(Math.random().toFixed(3)));
        setRandom3x10(parseFloat(Math.random().toFixed(3)));

        // random row 4
        setRandom4x1(parseFloat(Math.random().toFixed(3)));
        setRandom4x2(parseFloat(Math.random().toFixed(3)));
        setRandom4x3(parseFloat(Math.random().toFixed(3)));
        setRandom4x4(parseFloat(Math.random().toFixed(3)));
        setRandom4x5(parseFloat(Math.random().toFixed(3)));
        setRandom4x6(parseFloat(Math.random().toFixed(3)));
        setRandom4x7(parseFloat(Math.random().toFixed(3)));
        setRandom4x8(parseFloat(Math.random().toFixed(3)));
        setRandom4x9(parseFloat(Math.random().toFixed(3)));
        setRandom4x10(parseFloat(Math.random().toFixed(3)));

        // random row 5
        setRandom5x1(parseFloat(Math.random().toFixed(3)));
        setRandom5x2(parseFloat(Math.random().toFixed(3)));
        setRandom5x3(parseFloat(Math.random().toFixed(3)));
        setRandom5x4(parseFloat(Math.random().toFixed(3)));
        setRandom5x5(parseFloat(Math.random().toFixed(3)));
        setRandom5x6(parseFloat(Math.random().toFixed(3)));
        setRandom5x7(parseFloat(Math.random().toFixed(3)));
        setRandom5x8(parseFloat(Math.random().toFixed(3)));
        setRandom5x9(parseFloat(Math.random().toFixed(3)));
        setRandom5x10(parseFloat(Math.random().toFixed(3)));

        // random row 6
        setRandom6x1(parseFloat(Math.random().toFixed(3)));
        setRandom6x2(parseFloat(Math.random().toFixed(3)));
        setRandom6x3(parseFloat(Math.random().toFixed(3)));
        setRandom6x4(parseFloat(Math.random().toFixed(3)));
        setRandom6x5(parseFloat(Math.random().toFixed(3)));
        setRandom6x6(parseFloat(Math.random().toFixed(3)));
        setRandom6x7(parseFloat(Math.random().toFixed(3)));
        setRandom6x8(parseFloat(Math.random().toFixed(3)));
        setRandom6x9(parseFloat(Math.random().toFixed(3)));
        setRandom6x10(parseFloat(Math.random().toFixed(3)));

        // random row 7
        setRandom7x1(parseFloat(Math.random().toFixed(3)));
        setRandom7x2(parseFloat(Math.random().toFixed(3)));
        setRandom7x3(parseFloat(Math.random().toFixed(3)));
        setRandom7x4(parseFloat(Math.random().toFixed(3)));
        setRandom7x5(parseFloat(Math.random().toFixed(3)));
        setRandom7x6(parseFloat(Math.random().toFixed(3)));
        setRandom7x7(parseFloat(Math.random().toFixed(3)));
        setRandom7x8(parseFloat(Math.random().toFixed(3)));
        setRandom7x9(parseFloat(Math.random().toFixed(3)));
        setRandom7x10(parseFloat(Math.random().toFixed(3)));

        // random row 8
        setRandom8x1(parseFloat(Math.random().toFixed(3)));
        setRandom8x2(parseFloat(Math.random().toFixed(3)));
        setRandom8x3(parseFloat(Math.random().toFixed(3)));
        setRandom8x4(parseFloat(Math.random().toFixed(3)));
        setRandom8x5(parseFloat(Math.random().toFixed(3)));
        setRandom8x6(parseFloat(Math.random().toFixed(3)));
        setRandom8x7(parseFloat(Math.random().toFixed(3)));
        setRandom8x8(parseFloat(Math.random().toFixed(3)));
        setRandom8x9(parseFloat(Math.random().toFixed(3)));
        setRandom8x10(parseFloat(Math.random().toFixed(3)));

        // random row 9
        setRandom9x1(parseFloat(Math.random().toFixed(3)));
        setRandom9x2(parseFloat(Math.random().toFixed(3)));
        setRandom9x3(parseFloat(Math.random().toFixed(3)));
        setRandom9x4(parseFloat(Math.random().toFixed(3)));
        setRandom9x5(parseFloat(Math.random().toFixed(3)));
        setRandom9x6(parseFloat(Math.random().toFixed(3)));
        setRandom9x7(parseFloat(Math.random().toFixed(3)));
        setRandom9x8(parseFloat(Math.random().toFixed(3)));
        setRandom9x9(parseFloat(Math.random().toFixed(3)));
        setRandom9x10(parseFloat(Math.random().toFixed(3)));

        // random row 10
        setRandom10x1(parseFloat(Math.random().toFixed(3)));
        setRandom10x2(parseFloat(Math.random().toFixed(3)));
        setRandom10x3(parseFloat(Math.random().toFixed(3)));
        setRandom10x4(parseFloat(Math.random().toFixed(3)));
        setRandom10x5(parseFloat(Math.random().toFixed(3)));
        setRandom10x6(parseFloat(Math.random().toFixed(3)));
        setRandom10x7(parseFloat(Math.random().toFixed(3)));
        setRandom10x8(parseFloat(Math.random().toFixed(3)));
        setRandom10x9(parseFloat(Math.random().toFixed(3)));
        setRandom10x10(parseFloat(Math.random().toFixed(3)));

        // random row 11
        setRandom11x1(parseFloat(Math.random().toFixed(3)));
        setRandom11x2(parseFloat(Math.random().toFixed(3)));
        setRandom11x3(parseFloat(Math.random().toFixed(3)));
        setRandom11x4(parseFloat(Math.random().toFixed(3)));
        setRandom11x5(parseFloat(Math.random().toFixed(3)));
        setRandom11x6(parseFloat(Math.random().toFixed(3)));
        setRandom11x7(parseFloat(Math.random().toFixed(3)));
        setRandom11x8(parseFloat(Math.random().toFixed(3)));
        setRandom11x9(parseFloat(Math.random().toFixed(3)));
        setRandom11x10(parseFloat(Math.random().toFixed(3)));

        // random row 12
        setRandom12x1(parseFloat(Math.random().toFixed(3)));
        setRandom12x2(parseFloat(Math.random().toFixed(3)));
        setRandom12x3(parseFloat(Math.random().toFixed(3)));
        setRandom12x4(parseFloat(Math.random().toFixed(3)));
        setRandom12x5(parseFloat(Math.random().toFixed(3)));
        setRandom12x6(parseFloat(Math.random().toFixed(3)));
        setRandom12x7(parseFloat(Math.random().toFixed(3)));
        setRandom12x8(parseFloat(Math.random().toFixed(3)));
        setRandom12x9(parseFloat(Math.random().toFixed(3)));
        setRandom12x10(parseFloat(Math.random().toFixed(3)));

        // random row 13
        setRandom13x1(parseFloat(Math.random().toFixed(3)));
        setRandom13x2(parseFloat(Math.random().toFixed(3)));
        setRandom13x3(parseFloat(Math.random().toFixed(3)));
        setRandom13x4(parseFloat(Math.random().toFixed(3)));
        setRandom13x5(parseFloat(Math.random().toFixed(3)));
        setRandom13x6(parseFloat(Math.random().toFixed(3)));
        setRandom13x7(parseFloat(Math.random().toFixed(3)));
        setRandom13x8(parseFloat(Math.random().toFixed(3)));
        setRandom13x9(parseFloat(Math.random().toFixed(3)));
        setRandom13x10(parseFloat(Math.random().toFixed(3)));
    };

    // noise level const
    const noiseLevel = 0.052;

    //noise row 1
    const [noise1x1, setNoise1x1] = useState<number>();
    const [noise1x2, setNoise1x2] = useState<number>();
    const [noise1x3, setNoise1x3] = useState<number>();
    const [noise1x4, setNoise1x4] = useState<number>();
    const [noise1x5, setNoise1x5] = useState<number>();
    const [noise1x6, setNoise1x6] = useState<number>();
    const [noise1x7, setNoise1x7] = useState<number>();
    const [noise1x8, setNoise1x8] = useState<number>();
    const [noise1x9, setNoise1x9] = useState<number>();
    const [noise1x10, setNoise1x10] = useState<number>();

    //noise row 2
    const [noise2x1, setNoise2x1] = useState<number>();
    const [noise2x2, setNoise2x2] = useState<number>();
    const [noise2x3, setNoise2x3] = useState<number>();
    const [noise2x4, setNoise2x4] = useState<number>();
    const [noise2x5, setNoise2x5] = useState<number>();
    const [noise2x6, setNoise2x6] = useState<number>();
    const [noise2x7, setNoise2x7] = useState<number>();
    const [noise2x8, setNoise2x8] = useState<number>();
    const [noise2x9, setNoise2x9] = useState<number>();
    const [noise2x10, setNoise2x10] = useState<number>();

    //noise row 3
    const [noise3x1, setNoise3x1] = useState<number>();
    const [noise3x2, setNoise3x2] = useState<number>();
    const [noise3x3, setNoise3x3] = useState<number>();
    const [noise3x4, setNoise3x4] = useState<number>();
    const [noise3x5, setNoise3x5] = useState<number>();
    const [noise3x6, setNoise3x6] = useState<number>();
    const [noise3x7, setNoise3x7] = useState<number>();
    const [noise3x8, setNoise3x8] = useState<number>();
    const [noise3x9, setNoise3x9] = useState<number>();
    const [noise3x10, setNoise3x10] = useState<number>();

    //noise row 4
    const [noise4x1, setNoise4x1] = useState<number>();
    const [noise4x2, setNoise4x2] = useState<number>();
    const [noise4x3, setNoise4x3] = useState<number>();
    const [noise4x4, setNoise4x4] = useState<number>();
    const [noise4x5, setNoise4x5] = useState<number>();
    const [noise4x6, setNoise4x6] = useState<number>();
    const [noise4x7, setNoise4x7] = useState<number>();
    const [noise4x8, setNoise4x8] = useState<number>();
    const [noise4x9, setNoise4x9] = useState<number>();
    const [noise4x10, setNoise4x10] = useState<number>();

    //noise row 5
    const [noise5x1, setNoise5x1] = useState<number>();
    const [noise5x2, setNoise5x2] = useState<number>();
    const [noise5x3, setNoise5x3] = useState<number>();
    const [noise5x4, setNoise5x4] = useState<number>();
    const [noise5x5, setNoise5x5] = useState<number>();
    const [noise5x6, setNoise5x6] = useState<number>();
    const [noise5x7, setNoise5x7] = useState<number>();
    const [noise5x8, setNoise5x8] = useState<number>();
    const [noise5x9, setNoise5x9] = useState<number>();
    const [noise5x10, setNoise5x10] = useState<number>();

    //noise row 6
    const [noise6x1, setNoise6x1] = useState<number>();
    const [noise6x2, setNoise6x2] = useState<number>();
    const [noise6x3, setNoise6x3] = useState<number>();
    const [noise6x4, setNoise6x4] = useState<number>();
    const [noise6x5, setNoise6x5] = useState<number>();
    const [noise6x6, setNoise6x6] = useState<number>();
    const [noise6x7, setNoise6x7] = useState<number>();
    const [noise6x8, setNoise6x8] = useState<number>();
    const [noise6x9, setNoise6x9] = useState<number>();
    const [noise6x10, setNoise6x10] = useState<number>();

    //noise row 7
    const [noise7x1, setNoise7x1] = useState<number>();
    const [noise7x2, setNoise7x2] = useState<number>();
    const [noise7x3, setNoise7x3] = useState<number>();
    const [noise7x4, setNoise7x4] = useState<number>();
    const [noise7x5, setNoise7x5] = useState<number>();
    const [noise7x6, setNoise7x6] = useState<number>();
    const [noise7x7, setNoise7x7] = useState<number>();
    const [noise7x8, setNoise7x8] = useState<number>();
    const [noise7x9, setNoise7x9] = useState<number>();
    const [noise7x10, setNoise7x10] = useState<number>();

    //noise row 8
    const [noise8x1, setNoise8x1] = useState<number>();
    const [noise8x2, setNoise8x2] = useState<number>();
    const [noise8x3, setNoise8x3] = useState<number>();
    const [noise8x4, setNoise8x4] = useState<number>();
    const [noise8x5, setNoise8x5] = useState<number>();
    const [noise8x6, setNoise8x6] = useState<number>();
    const [noise8x7, setNoise8x7] = useState<number>();
    const [noise8x8, setNoise8x8] = useState<number>();
    const [noise8x9, setNoise8x9] = useState<number>();
    const [noise8x10, setNoise8x10] = useState<number>();

    //noise row 9
    const [noise9x1, setNoise9x1] = useState<number>();
    const [noise9x2, setNoise9x2] = useState<number>();
    const [noise9x3, setNoise9x3] = useState<number>();
    const [noise9x4, setNoise9x4] = useState<number>();
    const [noise9x5, setNoise9x5] = useState<number>();
    const [noise9x6, setNoise9x6] = useState<number>();
    const [noise9x7, setNoise9x7] = useState<number>();
    const [noise9x8, setNoise9x8] = useState<number>();
    const [noise9x9, setNoise9x9] = useState<number>();
    const [noise9x10, setNoise9x10] = useState<number>();

    //noise row 10
    const [noise10x1, setNoise10x1] = useState<number>();
    const [noise10x2, setNoise10x2] = useState<number>();
    const [noise10x3, setNoise10x3] = useState<number>();
    const [noise10x4, setNoise10x4] = useState<number>();
    const [noise10x5, setNoise10x5] = useState<number>();
    const [noise10x6, setNoise10x6] = useState<number>();
    const [noise10x7, setNoise10x7] = useState<number>();
    const [noise10x8, setNoise10x8] = useState<number>();
    const [noise10x9, setNoise10x9] = useState<number>();
    const [noise10x10, setNoise10x10] = useState<number>();

    //noise row 11
    const [noise11x1, setNoise11x1] = useState<number>();
    const [noise11x2, setNoise11x2] = useState<number>();
    const [noise11x3, setNoise11x3] = useState<number>();
    const [noise11x4, setNoise11x4] = useState<number>();
    const [noise11x5, setNoise11x5] = useState<number>();
    const [noise11x6, setNoise11x6] = useState<number>();
    const [noise11x7, setNoise11x7] = useState<number>();
    const [noise11x8, setNoise11x8] = useState<number>();
    const [noise11x9, setNoise11x9] = useState<number>();
    const [noise11x10, setNoise11x10] = useState<number>();

    //noise row 12
    const [noise12x1, setNoise12x1] = useState<number>();
    const [noise12x2, setNoise12x2] = useState<number>();
    const [noise12x3, setNoise12x3] = useState<number>();
    const [noise12x4, setNoise12x4] = useState<number>();
    const [noise12x5, setNoise12x5] = useState<number>();
    const [noise12x6, setNoise12x6] = useState<number>();
    const [noise12x7, setNoise12x7] = useState<number>();
    const [noise12x8, setNoise12x8] = useState<number>();
    const [noise12x9, setNoise12x9] = useState<number>();
    const [noise12x10, setNoise12x10] = useState<number>();

    //noise row 13
    const [noise13x1, setNoise13x1] = useState<number>();
    const [noise13x2, setNoise13x2] = useState<number>();
    const [noise13x3, setNoise13x3] = useState<number>();
    const [noise13x4, setNoise13x4] = useState<number>();
    const [noise13x5, setNoise13x5] = useState<number>();
    const [noise13x6, setNoise13x6] = useState<number>();
    const [noise13x7, setNoise13x7] = useState<number>();
    const [noise13x8, setNoise13x8] = useState<number>();
    const [noise13x9, setNoise13x9] = useState<number>();
    const [noise13x10, setNoise13x10] = useState<number>();

    const passNoiseToLocal = () => {
        const noiseRow1 = [noise1x1, noise1x2, noise1x3, noise1x4, noise1x5, noise1x6, noise1x7, noise1x8, noise1x9, noise1x10];
        const noiseRow2 = [noise2x1, noise2x2, noise2x3, noise2x4, noise2x5, noise2x6, noise2x7, noise2x8, noise2x9, noise2x10];
        const noiseRow3 = [noise3x1, noise3x2, noise3x3, noise3x4, noise3x5, noise3x6, noise3x7, noise3x8, noise3x9, noise3x10];
        const noiseRow4 = [noise4x1, noise4x2, noise4x3, noise4x4, noise4x5, noise4x6, noise4x7, noise4x8, noise4x9, noise4x10];
        const noiseRow5 = [noise5x1, noise5x2, noise5x3, noise5x4, noise5x5, noise5x6, noise5x7, noise5x8, noise5x9, noise5x10];
        const noiseRow6 = [noise6x1, noise6x2, noise6x3, noise6x4, noise6x5, noise6x6, noise6x7, noise6x8, noise6x9, noise6x10];
        const noiseRow7 = [noise7x1, noise7x2, noise7x3, noise7x4, noise7x5, noise7x6, noise7x7, noise7x8, noise7x9, noise7x10];
        const noiseRow8 = [noise8x1, noise8x2, noise8x3, noise8x4, noise8x5, noise8x6, noise8x7, noise8x8, noise8x9, noise8x10];
        const noiseRow9 = [noise9x1, noise9x2, noise9x3, noise9x4, noise9x5, noise9x6, noise9x7, noise9x8, noise9x9, noise9x10];
        const noiseRow10 = [noise10x1, noise10x2, noise10x3, noise10x4, noise10x5, noise10x6, noise10x7, noise10x8, noise10x9, noise10x10];
        const noiseRow11 = [noise11x1, noise11x2, noise11x3, noise11x4, noise11x5, noise11x6, noise11x7, noise11x8, noise11x9, noise11x10];
        const noiseRow12 = [noise12x1, noise12x2, noise12x3, noise12x4, noise12x5, noise12x6, noise12x7, noise12x8, noise12x9, noise12x10];
        const noiseRow13 = [noise13x1, noise13x2, noise13x3, noise13x4, noise13x5, noise13x6, noise13x7, noise13x8, noise13x9, noise13x10];

        localStorage.setItem('noiseRow1', noiseRow1.join());
        localStorage.setItem('noiseRow2', noiseRow2.join());
        localStorage.setItem('noiseRow3', noiseRow3.join());
        localStorage.setItem('noiseRow4', noiseRow4.join());
        localStorage.setItem('noiseRow5', noiseRow5.join());
        localStorage.setItem('noiseRow6', noiseRow6.join());
        localStorage.setItem('noiseRow7', noiseRow7.join());
        localStorage.setItem('noiseRow8', noiseRow8.join());
        localStorage.setItem('noiseRow9', noiseRow9.join());
        localStorage.setItem('noiseRow10', noiseRow10.join());
        localStorage.setItem('noiseRow11', noiseRow11.join());
        localStorage.setItem('noiseRow12', noiseRow12.join());
        localStorage.setItem('noiseRow13', noiseRow13.join());
    };

    const simulateNoisePart1 = () => {
        const matrixData = getMatrixData();

        //noise 1x1
        if (matrixData?.column1Arr[0] !== undefined && noiseLevel > random1x1) {
            if (matrixData?.column1Arr[0] === 0) {
                setNoise1x1(1);
            } else {
                setNoise1x1(0);
            }
        } else {
            setNoise1x1(matrixData?.column1Arr[0]);
        }

        //noise 1x2
        if (matrixData?.column2Arr[0] !== undefined && noiseLevel > random1x2) {
            if (matrixData?.column2Arr[0] === 0) {
                setNoise1x2(1);
            } else {
                setNoise1x2(0);
            }
        } else {
            setNoise1x2(matrixData?.column2Arr[0]);
        }
        //noise 1x3
        if (matrixData?.column3Arr[0] !== undefined && noiseLevel > random1x3) {
            if (matrixData?.column3Arr[0] === 0) {
                setNoise1x3(1);
            } else {
                setNoise1x3(0);
            }
        } else {
            setNoise1x3(matrixData?.column3Arr[0]);
        }
        //noise 1x4
        if (matrixData?.column4Arr[0] !== undefined && noiseLevel > random1x4) {
            if (matrixData?.column4Arr[0] === 0) {
                setNoise1x4(1);
            } else {
                setNoise1x4(0);
            }
        } else {
            setNoise1x4(matrixData?.column4Arr[0]);
        }
        //noise 1x5
        if (matrixData?.column5Arr[0] !== undefined && noiseLevel > random1x5) {
            if (matrixData?.column5Arr[0] === 0) {
                setNoise1x5(1);
            } else {
                setNoise1x5(0);
            }
        } else {
            setNoise1x5(matrixData?.column5Arr[0]);
        }
        //noise 1x6
        if (matrixData?.column6Arr[0] !== undefined && noiseLevel > random1x6) {
            if (matrixData?.column6Arr[0] === 0) {
                setNoise1x6(1);
            } else {
                setNoise1x6(0);
            }
        } else {
            setNoise1x6(matrixData?.column6Arr[0]);
        }
        //noise 1x7
        if (matrixData?.column7Arr[0] !== undefined && noiseLevel > random1x7) {
            if (matrixData?.column7Arr[0] === 0) {
                setNoise1x7(1);
            } else {
                setNoise1x7(0);
            }
        } else {
            setNoise1x7(matrixData?.column7Arr[0]);
        }
        //noise 1x8
        if (matrixData?.column8Arr[0] !== undefined && noiseLevel > random1x8) {
            if (matrixData?.column8Arr[0] === 0) {
                setNoise1x8(1);
            } else {
                setNoise1x8(0);
            }
        } else {
            setNoise1x8(matrixData?.column8Arr[0]);
        }
        //noise 1x9
        if (matrixData?.column9Arr[0] !== undefined && noiseLevel > random1x9) {
            if (matrixData?.column9Arr[0] === 0) {
                setNoise1x9(1);
            } else {
                setNoise1x9(0);
            }
        } else {
            setNoise1x9(matrixData?.column9Arr[0]);
        }
        //noise 1x10
        if (matrixData?.column10Arr[0] !== undefined && noiseLevel > random1x10) {
            if (matrixData?.column10Arr[0] === 0) {
                setNoise1x10(1);
            } else {
                setNoise1x10(0);
            }
        } else {
            setNoise1x10(matrixData?.column10Arr[0]);
        }

        //noise 2x1
        if (matrixData?.column1Arr[1] !== undefined && noiseLevel > random2x1) {
            if (matrixData?.column1Arr[1] === 0) {
                setNoise2x1(1);
            } else {
                setNoise2x1(0);
            }
        } else {
            setNoise2x1(matrixData?.column1Arr[1]);
        }

        //noise 2x2
        if (matrixData?.column2Arr[1] !== undefined && noiseLevel > random2x2) {
            if (matrixData?.column2Arr[1] === 0) {
                setNoise2x2(1);
            } else {
                setNoise2x2(0);
            }
        } else {
            setNoise2x2(matrixData?.column2Arr[1]);
        }

        //noise 2x3
        if (matrixData?.column3Arr[1] !== undefined && noiseLevel > random2x3) {
            if (matrixData?.column3Arr[1] === 0) {
                setNoise2x3(1);
            } else {
                setNoise2x3(0);
            }
        } else {
            setNoise2x3(matrixData?.column3Arr[1]);
        }

        //noise 2x4
        if (matrixData?.column4Arr[1] !== undefined && noiseLevel > random2x4) {
            if (matrixData?.column4Arr[1] === 0) {
                setNoise2x4(1);
            } else {
                setNoise2x4(0);
            }
        } else {
            setNoise2x4(matrixData?.column4Arr[1]);
        }

        //noise 2x5
        if (matrixData?.column5Arr[1] !== undefined && noiseLevel > random2x5) {
            if (matrixData?.column5Arr[1] === 0) {
                setNoise2x5(1);
            } else {
                setNoise2x5(0);
            }
        } else {
            setNoise2x5(matrixData?.column5Arr[1]);
        }

        //noise 2x6
        if (matrixData?.column6Arr[1] !== undefined && noiseLevel > random2x6) {
            if (matrixData?.column6Arr[1] === 0) {
                setNoise2x6(1);
            } else {
                setNoise2x6(0);
            }
        } else {
            setNoise2x6(matrixData?.column6Arr[1]);
        }

        //noise 2x7
        if (matrixData?.column7Arr[1] !== undefined && noiseLevel > random2x7) {
            if (matrixData?.column7Arr[1] === 0) {
                setNoise2x7(1);
            } else {
                setNoise2x7(0);
            }
        } else {
            setNoise2x7(matrixData?.column7Arr[1]);
        }

        //noise 2x8
        if (matrixData?.column8Arr[1] !== undefined && noiseLevel > random2x8) {
            if (matrixData?.column8Arr[1] === 0) {
                setNoise2x8(1);
            } else {
                setNoise2x8(0);
            }
        } else {
            setNoise2x8(matrixData?.column8Arr[1]);
        }

        //noise 2x9
        if (matrixData?.column9Arr[1] !== undefined && noiseLevel > random2x9) {
            if (matrixData?.column9Arr[1] === 0) {
                setNoise2x9(1);
            } else {
                setNoise2x9(0);
            }
        } else {
            setNoise2x9(matrixData?.column9Arr[1]);
        }

        //noise 2x10
        if (matrixData?.column10Arr[1] !== undefined && noiseLevel > random2x10) {
            if (matrixData?.column10Arr[1] === 0) {
                setNoise2x10(1);
            } else {
                setNoise2x10(0);
            }
        } else {
            setNoise2x10(matrixData?.column10Arr[1]);
        }

        //noise 3x1
        if (matrixData?.column1Arr[2] !== undefined && noiseLevel > random3x1) {
            if (matrixData?.column1Arr[2] === 0) {
                setNoise3x1(1);
            } else {
                setNoise3x1(0);
            }
        } else {
            setNoise3x1(matrixData?.column1Arr[2]);
        }

        //noise 3x2
        if (matrixData?.column2Arr[2] !== undefined && noiseLevel > random3x2) {
            if (matrixData?.column2Arr[2] === 0) {
                setNoise3x2(1);
            } else {
                setNoise3x2(0);
            }
        } else {
            setNoise3x2(matrixData?.column2Arr[2]);
        }

        //noise 3x3
        if (matrixData?.column3Arr[2] !== undefined && noiseLevel > random3x3) {
            if (matrixData?.column3Arr[2] === 0) {
                setNoise3x3(1);
            } else {
                setNoise3x3(0);
            }
        } else {
            setNoise3x3(matrixData?.column3Arr[2]);
        }

        //noise 3x4
        if (matrixData?.column4Arr[2] !== undefined && noiseLevel > random3x4) {
            if (matrixData?.column4Arr[2] === 0) {
                setNoise3x4(1);
            } else {
                setNoise3x4(0);
            }
        } else {
            setNoise3x4(matrixData?.column4Arr[2]);
        }

        //noise 3x5
        if (matrixData?.column5Arr[2] !== undefined && noiseLevel > random3x5) {
            if (matrixData?.column5Arr[2] === 0) {
                setNoise3x5(1);
            } else {
                setNoise3x5(0);
            }
        } else {
            setNoise3x5(matrixData?.column5Arr[2]);
        }

        //noise 3x6
        if (matrixData?.column6Arr[2] !== undefined && noiseLevel > random3x6) {
            if (matrixData?.column6Arr[2] === 0) {
                setNoise3x6(1);
            } else {
                setNoise3x6(0);
            }
        } else {
            setNoise3x6(matrixData?.column6Arr[2]);
        }

        //noise 3x7
        if (matrixData?.column7Arr[2] !== undefined && noiseLevel > random3x7) {
            if (matrixData?.column7Arr[2] === 0) {
                setNoise3x7(1);
            } else {
                setNoise3x7(0);
            }
        } else {
            setNoise3x7(matrixData?.column7Arr[2]);
        }

        //noise 3x8
        if (matrixData?.column8Arr[2] !== undefined && noiseLevel > random3x8) {
            if (matrixData?.column8Arr[2] === 0) {
                setNoise3x8(1);
            } else {
                setNoise3x8(0);
            }
        } else {
            setNoise3x8(matrixData?.column8Arr[2]);
        }

        //noise 3x8
        if (matrixData?.column8Arr[2] !== undefined && noiseLevel > random3x8) {
            if (matrixData?.column8Arr[2] === 0) {
                setNoise3x8(1);
            } else {
                setNoise3x8(0);
            }
        } else {
            setNoise3x8(matrixData?.column8Arr[2]);
        }

        //noise 3x9
        if (matrixData?.column9Arr[2] !== undefined && noiseLevel > random3x9) {
            if (matrixData?.column9Arr[2] === 0) {
                setNoise3x9(1);
            } else {
                setNoise3x9(0);
            }
        } else {
            setNoise3x9(matrixData?.column9Arr[2]);
        }

        //noise 3x10
        if (matrixData?.column10Arr[2] !== undefined && noiseLevel > random3x10) {
            if (matrixData?.column10Arr[2] === 0) {
                setNoise3x10(1);
            } else {
                setNoise3x10(0);
            }
        } else {
            setNoise3x10(matrixData?.column10Arr[2]);
        }

        //noise 4x1
        if (matrixData?.column1Arr[3] !== undefined && noiseLevel > random4x1) {
            if (matrixData?.column1Arr[3] === 0) {
                setNoise4x1(1);
            } else {
                setNoise4x1(0);
            }
        } else {
            setNoise4x1(matrixData?.column1Arr[3]);
        }

        //noise 4x2
        if (matrixData?.column2Arr[3] !== undefined && noiseLevel > random4x2) {
            if (matrixData?.column2Arr[3] === 0) {
                setNoise4x2(1);
            } else {
                setNoise4x2(0);
            }
        } else {
            setNoise4x2(matrixData?.column2Arr[3]);
        }

        //noise 4x3
        if (matrixData?.column3Arr[3] !== undefined && noiseLevel > random4x3) {
            if (matrixData?.column3Arr[3] === 0) {
                setNoise4x3(1);
            } else {
                setNoise4x3(0);
            }
        } else {
            setNoise4x3(matrixData?.column3Arr[3]);
        }

        //noise 4x4
        if (matrixData?.column4Arr[3] !== undefined && noiseLevel > random4x4) {
            if (matrixData?.column4Arr[3] === 0) {
                setNoise4x4(1);
            } else {
                setNoise4x4(0);
            }
        } else {
            setNoise4x4(matrixData?.column4Arr[3]);
        }

        //noise 4x5
        if (matrixData?.column5Arr[3] !== undefined && noiseLevel > random4x5) {
            if (matrixData?.column5Arr[3] === 0) {
                setNoise4x5(1);
            } else {
                setNoise4x5(0);
            }
        } else {
            setNoise4x5(matrixData?.column5Arr[3]);
        }

        //noise 4x6
        if (matrixData?.column6Arr[3] !== undefined && noiseLevel > random4x6) {
            if (matrixData?.column6Arr[3] === 0) {
                setNoise4x6(1);
            } else {
                setNoise4x6(0);
            }
        } else {
            setNoise4x6(matrixData?.column6Arr[3]);
        }

        //noise 4x7
        if (matrixData?.column7Arr[3] !== undefined && noiseLevel > random4x7) {
            if (matrixData?.column7Arr[3] === 0) {
                setNoise4x7(1);
            } else {
                setNoise4x7(0);
            }
        } else {
            setNoise4x7(matrixData?.column7Arr[3]);
        }

        //noise 4x8
        if (matrixData?.column8Arr[3] !== undefined && noiseLevel > random4x8) {
            if (matrixData?.column8Arr[3] === 0) {
                setNoise4x8(1);
            } else {
                setNoise4x8(0);
            }
        } else {
            setNoise4x8(matrixData?.column8Arr[3]);
        }

        //noise 4x9
        if (matrixData?.column9Arr[3] !== undefined && noiseLevel > random4x9) {
            if (matrixData?.column9Arr[3] === 0) {
                setNoise4x9(1);
            } else {
                setNoise4x9(0);
            }
        } else {
            setNoise4x9(matrixData?.column9Arr[3]);
        }

        //noise 4x10
        if (matrixData?.column10Arr[3] !== undefined && noiseLevel > random4x10) {
            if (matrixData?.column10Arr[3] === 0) {
                setNoise4x10(1);
            } else {
                setNoise4x10(0);
            }
        } else {
            setNoise4x10(matrixData?.column10Arr[3]);
        }

        //noise 5x1
        if (matrixData?.column1Arr[4] !== undefined && noiseLevel > random5x1) {
            if (matrixData?.column1Arr[4] === 0) {
                setNoise5x1(1);
            } else {
                setNoise5x1(0);
            }
        } else {
            setNoise5x1(matrixData?.column1Arr[4]);
        }

        //noise 5x2
        if (matrixData?.column2Arr[4] !== undefined && noiseLevel > random5x2) {
            if (matrixData?.column2Arr[4] === 0) {
                setNoise5x2(1);
            } else {
                setNoise5x2(0);
            }
        } else {
            setNoise5x2(matrixData?.column2Arr[4]);
        }

        //noise 5x3
        if (matrixData?.column3Arr[4] !== undefined && noiseLevel > random5x3) {
            if (matrixData?.column3Arr[4] === 0) {
                setNoise5x3(1);
            } else {
                setNoise5x3(0);
            }
        } else {
            setNoise5x3(matrixData?.column3Arr[4]);
        }

        //noise 5x4
        if (matrixData?.column4Arr[4] !== undefined && noiseLevel > random5x4) {
            if (matrixData?.column4Arr[4] === 0) {
                setNoise5x4(1);
            } else {
                setNoise5x4(0);
            }
        } else {
            setNoise5x4(matrixData?.column4Arr[4]);
        }

        //noise 5x5
        if (matrixData?.column5Arr[4] !== undefined && noiseLevel > random5x5) {
            if (matrixData?.column5Arr[4] === 0) {
                setNoise5x5(1);
            } else {
                setNoise5x5(0);
            }
        } else {
            setNoise5x5(matrixData?.column5Arr[4]);
        }

        //noise 5x6
        if (matrixData?.column6Arr[4] !== undefined && noiseLevel > random5x6) {
            if (matrixData?.column6Arr[4] === 0) {
                setNoise5x6(1);
            } else {
                setNoise5x6(0);
            }
        } else {
            setNoise5x6(matrixData?.column6Arr[4]);
        }

        //noise 5x7
        if (matrixData?.column7Arr[4] !== undefined && noiseLevel > random5x7) {
            if (matrixData?.column7Arr[4] === 0) {
                setNoise5x7(1);
            } else {
                setNoise5x7(0);
            }
        } else {
            setNoise5x7(matrixData?.column7Arr[4]);
        }

        //noise 5x8
        if (matrixData?.column8Arr[4] !== undefined && noiseLevel > random5x8) {
            if (matrixData?.column8Arr[4] === 0) {
                setNoise5x8(1);
            } else {
                setNoise5x8(0);
            }
        } else {
            setNoise5x8(matrixData?.column8Arr[4]);
        }

        //noise 5x9
        if (matrixData?.column9Arr[4] !== undefined && noiseLevel > random5x9) {
            if (matrixData?.column9Arr[4] === 0) {
                setNoise5x9(1);
            } else {
                setNoise5x9(0);
            }
        } else {
            setNoise5x9(matrixData?.column9Arr[4]);
        }

        //noise 5x10
        if (matrixData?.column10Arr[4] !== undefined && noiseLevel > random5x10) {
            if (matrixData?.column10Arr[4] === 0) {
                setNoise5x10(1);
            } else {
                setNoise5x10(0);
            }
        } else {
            setNoise5x10(matrixData?.column10Arr[4]);
        }

        //noise 6x1
        if (matrixData?.column1Arr[5] !== undefined && noiseLevel > random6x1) {
            if (matrixData?.column1Arr[5] === 0) {
                setNoise6x1(1);
            } else {
                setNoise6x1(0);
            }
        } else {
            setNoise6x1(matrixData?.column1Arr[5]);
        }

        //noise 6x2
        if (matrixData?.column2Arr[5] !== undefined && noiseLevel > random6x2) {
            if (matrixData?.column2Arr[5] === 0) {
                setNoise6x2(1);
            } else {
                setNoise6x2(0);
            }
        } else {
            setNoise6x2(matrixData?.column2Arr[5]);
        }

        //noise 6x3
        if (matrixData?.column3Arr[5] !== undefined && noiseLevel > random6x3) {
            if (matrixData?.column3Arr[5] === 0) {
                setNoise6x3(1);
            } else {
                setNoise6x3(0);
            }
        } else {
            setNoise6x3(matrixData?.column3Arr[5]);
        }

        //noise 6x4
        if (matrixData?.column4Arr[5] !== undefined && noiseLevel > random6x4) {
            if (matrixData?.column4Arr[5] === 0) {
                setNoise6x4(1);
            } else {
                setNoise6x4(0);
            }
        } else {
            setNoise6x4(matrixData?.column4Arr[5]);
        }

        //noise 6x5
        if (matrixData?.column5Arr[5] !== undefined && noiseLevel > random6x5) {
            if (matrixData?.column5Arr[5] === 0) {
                setNoise6x5(1);
            } else {
                setNoise6x5(0);
            }
        } else {
            setNoise6x5(matrixData?.column5Arr[5]);
        }

        //noise 6x6
        if (matrixData?.column6Arr[5] !== undefined && noiseLevel > random6x6) {
            if (matrixData?.column6Arr[5] === 0) {
                setNoise6x6(1);
            } else {
                setNoise6x6(0);
            }
        } else {
            setNoise6x6(matrixData?.column6Arr[5]);
        }

        //noise 6x7
        if (matrixData?.column7Arr[5] !== undefined && noiseLevel > random6x7) {
            if (matrixData?.column7Arr[5] === 0) {
                setNoise6x7(1);
            } else {
                setNoise6x7(0);
            }
        } else {
            setNoise6x7(matrixData?.column7Arr[5]);
        }

        //noise 6x8
        if (matrixData?.column8Arr[5] !== undefined && noiseLevel > random6x8) {
            if (matrixData?.column8Arr[5] === 0) {
                setNoise6x8(1);
            } else {
                setNoise6x8(0);
            }
        } else {
            setNoise6x8(matrixData?.column8Arr[5]);
        }

        //noise 6x9
        if (matrixData?.column9Arr[5] !== undefined && noiseLevel > random6x9) {
            if (matrixData?.column9Arr[5] === 0) {
                setNoise6x9(1);
            } else {
                setNoise6x9(0);
            }
        } else {
            setNoise6x9(matrixData?.column9Arr[5]);
        }

        //noise 6x10
        if (matrixData?.column10Arr[5] !== undefined && noiseLevel > random6x10) {
            if (matrixData?.column10Arr[5] === 0) {
                setNoise6x10(1);
            } else {
                setNoise6x10(0);
            }
        } else {
            setNoise6x10(matrixData?.column10Arr[5]);
        }
    };

    const simulateNoisePart2 = () => {
        const matrixData = getMatrixData();

        //noise 7x1
        if (matrixData?.column1Arr[6] !== undefined && noiseLevel > random7x1) {
            if (matrixData?.column1Arr[6] === 0) {
                setNoise7x1(1);
            } else {
                setNoise7x1(0);
            }
        } else {
            setNoise7x1(matrixData?.column1Arr[6]);
        }

        //noise 7x2
        if (matrixData?.column2Arr[6] !== undefined && noiseLevel > random7x2) {
            if (matrixData?.column2Arr[6] === 0) {
                setNoise7x2(1);
            } else {
                setNoise7x2(0);
            }
        } else {
            setNoise7x2(matrixData?.column2Arr[6]);
        }

        //noise 7x3
        if (matrixData?.column3Arr[6] !== undefined && noiseLevel > random7x3) {
            if (matrixData?.column3Arr[6] === 0) {
                setNoise7x3(1);
            } else {
                setNoise7x3(0);
            }
        } else {
            setNoise7x3(matrixData?.column3Arr[6]);
        }

        //noise 7x4
        if (matrixData?.column4Arr[6] !== undefined && noiseLevel > random7x4) {
            if (matrixData?.column4Arr[6] === 0) {
                setNoise7x4(1);
            } else {
                setNoise7x4(0);
            }
        } else {
            setNoise7x4(matrixData?.column4Arr[6]);
        }

        //noise 7x5
        if (matrixData?.column5Arr[6] !== undefined && noiseLevel > random7x5) {
            if (matrixData?.column5Arr[6] === 0) {
                setNoise7x5(1);
            } else {
                setNoise7x5(0);
            }
        } else {
            setNoise7x5(matrixData?.column5Arr[6]);
        }

        //noise 7x6
        if (matrixData?.column6Arr[6] !== undefined && noiseLevel > random7x6) {
            if (matrixData?.column6Arr[6] === 0) {
                setNoise7x6(1);
            } else {
                setNoise7x6(0);
            }
        } else {
            setNoise7x6(matrixData?.column6Arr[6]);
        }

        //noise 7x7
        if (matrixData?.column7Arr[6] !== undefined && noiseLevel > random7x7) {
            if (matrixData?.column7Arr[6] === 0) {
                setNoise7x7(1);
            } else {
                setNoise7x7(0);
            }
        } else {
            setNoise7x7(matrixData?.column7Arr[6]);
        }

        //noise 7x8
        if (matrixData?.column8Arr[6] !== undefined && noiseLevel > random7x8) {
            if (matrixData?.column8Arr[6] === 0) {
                setNoise7x8(1);
            } else {
                setNoise7x8(0);
            }
        } else {
            setNoise7x8(matrixData?.column8Arr[6]);
        }

        //noise 7x9
        if (matrixData?.column9Arr[6] !== undefined && noiseLevel > random7x9) {
            if (matrixData?.column9Arr[6] === 0) {
                setNoise7x9(1);
            } else {
                setNoise7x9(0);
            }
        } else {
            setNoise7x9(matrixData?.column9Arr[6]);
        }

        //noise 7x10
        if (matrixData?.column10Arr[6] !== undefined && noiseLevel > random7x10) {
            if (matrixData?.column10Arr[6] === 0) {
                setNoise7x10(1);
            } else {
                setNoise7x10(0);
            }
        } else {
            setNoise7x10(matrixData?.column10Arr[6]);
        }

        //noise 8x1
        if (matrixData?.column1Arr[7] !== undefined && noiseLevel > random8x1) {
            if (matrixData?.column1Arr[7] === 0) {
                setNoise8x1(1);
            } else {
                setNoise8x1(0);
            }
        } else {
            setNoise8x1(matrixData?.column1Arr[7]);
        }

        //noise 8x2
        if (matrixData?.column2Arr[7] !== undefined && noiseLevel > random8x2) {
            if (matrixData?.column2Arr[7] === 0) {
                setNoise8x2(1);
            } else {
                setNoise8x2(0);
            }
        } else {
            setNoise8x2(matrixData?.column2Arr[7]);
        }

        //noise 8x3
        if (matrixData?.column3Arr[7] !== undefined && noiseLevel > random8x3) {
            if (matrixData?.column3Arr[7] === 0) {
                setNoise8x3(1);
            } else {
                setNoise8x3(0);
            }
        } else {
            setNoise8x3(matrixData?.column3Arr[7]);
        }

        //noise 8x4
        if (matrixData?.column4Arr[7] !== undefined && noiseLevel > random8x4) {
            if (matrixData?.column4Arr[7] === 0) {
                setNoise8x4(1);
            } else {
                setNoise8x4(0);
            }
        } else {
            setNoise8x4(matrixData?.column4Arr[7]);
        }

        //noise 8x5
        if (matrixData?.column5Arr[7] !== undefined && noiseLevel > random8x5) {
            if (matrixData?.column5Arr[7] === 0) {
                setNoise8x5(1);
            } else {
                setNoise8x5(0);
            }
        } else {
            setNoise8x5(matrixData?.column5Arr[7]);
        }

        //noise 8x6
        if (matrixData?.column6Arr[7] !== undefined && noiseLevel > random8x6) {
            if (matrixData?.column6Arr[7] === 0) {
                setNoise8x6(1);
            } else {
                setNoise8x6(0);
            }
        } else {
            setNoise8x6(matrixData?.column6Arr[7]);
        }

        //noise 8x7
        if (matrixData?.column7Arr[7] !== undefined && noiseLevel > random8x7) {
            if (matrixData?.column7Arr[7] === 0) {
                setNoise8x7(1);
            } else {
                setNoise8x7(0);
            }
        } else {
            setNoise8x7(matrixData?.column7Arr[7]);
        }

        //noise 8x8
        if (matrixData?.column8Arr[7] !== undefined && noiseLevel > random8x8) {
            if (matrixData?.column8Arr[7] === 0) {
                setNoise8x8(1);
            } else {
                setNoise8x8(0);
            }
        } else {
            setNoise8x8(matrixData?.column8Arr[7]);
        }

        //noise 8x9
        if (matrixData?.column9Arr[7] !== undefined && noiseLevel > random8x9) {
            if (matrixData?.column9Arr[7] === 0) {
                setNoise8x9(1);
            } else {
                setNoise8x9(0);
            }
        } else {
            setNoise8x9(matrixData?.column9Arr[7]);
        }

        //noise 8x10
        if (matrixData?.column10Arr[7] !== undefined && noiseLevel > random8x10) {
            if (matrixData?.column10Arr[7] === 0) {
                setNoise8x10(1);
            } else {
                setNoise8x10(0);
            }
        } else {
            setNoise8x10(matrixData?.column10Arr[7]);
        }

        //noise 9x1
        if (matrixData?.column1Arr[8] !== undefined && noiseLevel > random9x1) {
            if (matrixData?.column1Arr[8] === 0) {
                setNoise9x1(1);
            } else {
                setNoise9x1(0);
            }
        } else {
            setNoise9x1(matrixData?.column1Arr[8]);
        }

        //noise 9x2
        if (matrixData?.column2Arr[8] !== undefined && noiseLevel > random9x2) {
            if (matrixData?.column2Arr[8] === 0) {
                setNoise9x2(1);
            } else {
                setNoise9x2(0);
            }
        } else {
            setNoise9x2(matrixData?.column2Arr[8]);
        }

        //noise 9x3
        if (matrixData?.column3Arr[8] !== undefined && noiseLevel > random9x3) {
            if (matrixData?.column3Arr[8] === 0) {
                setNoise9x3(1);
            } else {
                setNoise9x3(0);
            }
        } else {
            setNoise9x3(matrixData?.column3Arr[8]);
        }

        //noise 9x4
        if (matrixData?.column4Arr[8] !== undefined && noiseLevel > random9x4) {
            if (matrixData?.column4Arr[8] === 0) {
                setNoise9x4(1);
            } else {
                setNoise9x4(0);
            }
        } else {
            setNoise9x4(matrixData?.column4Arr[8]);
        }

        //noise 9x5
        if (matrixData?.column5Arr[8] !== undefined && noiseLevel > random9x5) {
            if (matrixData?.column5Arr[8] === 0) {
                setNoise9x5(1);
            } else {
                setNoise9x5(0);
            }
        } else {
            setNoise9x5(matrixData?.column5Arr[8]);
        }

        //noise 9x6
        if (matrixData?.column6Arr[8] !== undefined && noiseLevel > random9x6) {
            if (matrixData?.column6Arr[8] === 0) {
                setNoise9x6(1);
            } else {
                setNoise9x6(0);
            }
        } else {
            setNoise9x6(matrixData?.column6Arr[8]);
        }

        //noise 9x7
        if (matrixData?.column7Arr[8] !== undefined && noiseLevel > random9x7) {
            if (matrixData?.column7Arr[8] === 0) {
                setNoise9x7(1);
            } else {
                setNoise9x7(0);
            }
        } else {
            setNoise9x7(matrixData?.column7Arr[8]);
        }

        //noise 9x8
        if (matrixData?.column8Arr[8] !== undefined && noiseLevel > random9x8) {
            if (matrixData?.column8Arr[8] === 0) {
                setNoise9x8(1);
            } else {
                setNoise9x8(0);
            }
        } else {
            setNoise9x8(matrixData?.column8Arr[8]);
        }

        //noise 9x9
        if (matrixData?.column9Arr[8] !== undefined && noiseLevel > random9x9) {
            if (matrixData?.column9Arr[8] === 0) {
                setNoise9x9(1);
            } else {
                setNoise9x9(0);
            }
        } else {
            setNoise9x9(matrixData?.column9Arr[8]);
        }

        //noise 9x10
        if (matrixData?.column10Arr[8] !== undefined && noiseLevel > random9x10) {
            if (matrixData?.column10Arr[8] === 0) {
                setNoise9x10(1);
            } else {
                setNoise9x10(0);
            }
        } else {
            setNoise9x10(matrixData?.column10Arr[8]);
        }

        //noise 10x1
        if (matrixData?.column1Arr[9] !== undefined && noiseLevel > random10x1) {
            if (matrixData?.column1Arr[9] === 0) {
                setNoise10x1(1);
            } else {
                setNoise10x1(0);
            }
        } else {
            setNoise10x1(matrixData?.column1Arr[9]);
        }

        //noise 10x2
        if (matrixData?.column2Arr[9] !== undefined && noiseLevel > random10x2) {
            if (matrixData?.column2Arr[9] === 0) {
                setNoise10x2(1);
            } else {
                setNoise10x2(0);
            }
        } else {
            setNoise10x2(matrixData?.column2Arr[9]);
        }

        //noise 10x3
        if (matrixData?.column3Arr[9] !== undefined && noiseLevel > random10x3) {
            if (matrixData?.column3Arr[9] === 0) {
                setNoise10x3(1);
            } else {
                setNoise10x3(0);
            }
        } else {
            setNoise10x3(matrixData?.column3Arr[9]);
        }

        //noise 10x4
        if (matrixData?.column4Arr[9] !== undefined && noiseLevel > random10x4) {
            if (matrixData?.column4Arr[9] === 0) {
                setNoise10x4(1);
            } else {
                setNoise10x4(0);
            }
        } else {
            setNoise10x4(matrixData?.column4Arr[9]);
        }

        //noise 10x5
        if (matrixData?.column5Arr[9] !== undefined && noiseLevel > random10x5) {
            if (matrixData?.column5Arr[9] === 0) {
                setNoise10x5(1);
            } else {
                setNoise10x5(0);
            }
        } else {
            setNoise10x5(matrixData?.column5Arr[9]);
        }

        //noise 10x6
        if (matrixData?.column6Arr[9] !== undefined && noiseLevel > random10x6) {
            if (matrixData?.column6Arr[9] === 0) {
                setNoise10x6(1);
            } else {
                setNoise10x6(0);
            }
        } else {
            setNoise10x6(matrixData?.column6Arr[9]);
        }

        //noise 10x7
        if (matrixData?.column7Arr[9] !== undefined && noiseLevel > random10x7) {
            if (matrixData?.column7Arr[9] === 0) {
                setNoise10x7(1);
            } else {
                setNoise10x7(0);
            }
        } else {
            setNoise10x7(matrixData?.column7Arr[9]);
        }

        //noise 10x8
        if (matrixData?.column8Arr[9] !== undefined && noiseLevel > random10x8) {
            if (matrixData?.column8Arr[9] === 0) {
                setNoise10x8(1);
            } else {
                setNoise10x8(0);
            }
        } else {
            setNoise10x8(matrixData?.column8Arr[9]);
        }

        //noise 10x9
        if (matrixData?.column9Arr[9] !== undefined && noiseLevel > random10x9) {
            if (matrixData?.column9Arr[9] === 0) {
                setNoise10x9(1);
            } else {
                setNoise10x9(0);
            }
        } else {
            setNoise10x9(matrixData?.column9Arr[9]);
        }

        //noise 10x10
        if (matrixData?.column10Arr[9] !== undefined && noiseLevel > random10x10) {
            if (matrixData?.column10Arr[9] === 0) {
                setNoise10x10(1);
            } else {
                setNoise10x10(0);
            }
        } else {
            setNoise10x10(matrixData?.column10Arr[9]);
        }

        //noise 11x1
        if (matrixData?.column1Arr[10] !== undefined && noiseLevel > random11x1) {
            if (matrixData?.column1Arr[10] === 0) {
                setNoise11x1(1);
            } else {
                setNoise11x1(0);
            }
        } else {
            setNoise11x1(matrixData?.column1Arr[10]);
        }

        //noise 11x2
        if (matrixData?.column2Arr[10] !== undefined && noiseLevel > random11x2) {
            if (matrixData?.column2Arr[10] === 0) {
                setNoise11x2(1);
            } else {
                setNoise11x2(0);
            }
        } else {
            setNoise11x2(matrixData?.column2Arr[10]);
        }

        //noise 11x3
        if (matrixData?.column3Arr[10] !== undefined && noiseLevel > random11x3) {
            if (matrixData?.column3Arr[10] === 0) {
                setNoise11x3(1);
            } else {
                setNoise11x3(0);
            }
        } else {
            setNoise11x3(matrixData?.column3Arr[10]);
        }

        //noise 11x4
        if (matrixData?.column4Arr[10] !== undefined && noiseLevel > random11x4) {
            if (matrixData?.column4Arr[10] === 0) {
                setNoise11x4(1);
            } else {
                setNoise11x4(0);
            }
        } else {
            setNoise11x4(matrixData?.column4Arr[10]);
        }

        //noise 11x5
        if (matrixData?.column5Arr[10] !== undefined && noiseLevel > random11x5) {
            if (matrixData?.column5Arr[10] === 0) {
                setNoise11x5(1);
            } else {
                setNoise11x5(0);
            }
        } else {
            setNoise11x5(matrixData?.column5Arr[10]);
        }

        //noise 11x6
        if (matrixData?.column6Arr[10] !== undefined && noiseLevel > random11x6) {
            if (matrixData?.column6Arr[10] === 0) {
                setNoise11x6(1);
            } else {
                setNoise11x6(0);
            }
        } else {
            setNoise11x6(matrixData?.column6Arr[10]);
        }

        //noise 11x7
        if (matrixData?.column7Arr[10] !== undefined && noiseLevel > random11x7) {
            if (matrixData?.column7Arr[10] === 0) {
                setNoise11x7(1);
            } else {
                setNoise11x7(0);
            }
        } else {
            setNoise11x7(matrixData?.column7Arr[10]);
        }

        //noise 11x8
        if (matrixData?.column8Arr[10] !== undefined && noiseLevel > random11x8) {
            if (matrixData?.column8Arr[10] === 0) {
                setNoise11x8(1);
            } else {
                setNoise11x8(0);
            }
        } else {
            setNoise11x8(matrixData?.column8Arr[10]);
        }

        //noise 11x9
        if (matrixData?.column9Arr[10] !== undefined && noiseLevel > random11x9) {
            if (matrixData?.column9Arr[10] === 0) {
                setNoise11x9(1);
            } else {
                setNoise11x9(0);
            }
        } else {
            setNoise11x9(matrixData?.column9Arr[10]);
        }

        //noise 11x10
        if (matrixData?.column10Arr[10] !== undefined && noiseLevel > random11x10) {
            if (matrixData?.column10Arr[10] === 0) {
                setNoise11x10(1);
            } else {
                setNoise11x10(0);
            }
        } else {
            setNoise11x10(matrixData?.column10Arr[10]);
        }

        //noise 12x1
        if (matrixData?.column1Arr[11] !== undefined && noiseLevel > random12x1) {
            if (matrixData?.column1Arr[11] === 0) {
                setNoise12x1(1);
            } else {
                setNoise12x1(0);
            }
        } else {
            setNoise12x1(matrixData?.column1Arr[11]);
        }

        //noise 12x2
        if (matrixData?.column2Arr[11] !== undefined && noiseLevel > random12x2) {
            if (matrixData?.column2Arr[11] === 0) {
                setNoise12x2(1);
            } else {
                setNoise12x2(0);
            }
        } else {
            setNoise12x2(matrixData?.column2Arr[11]);
        }

        //noise 12x3
        if (matrixData?.column3Arr[11] !== undefined && noiseLevel > random12x3) {
            if (matrixData?.column3Arr[11] === 0) {
                setNoise12x3(1);
            } else {
                setNoise12x3(0);
            }
        } else {
            setNoise12x3(matrixData?.column3Arr[11]);
        }

        //noise 12x4
        if (matrixData?.column4Arr[11] !== undefined && noiseLevel > random12x4) {
            if (matrixData?.column4Arr[11] === 0) {
                setNoise12x4(1);
            } else {
                setNoise12x4(0);
            }
        } else {
            setNoise12x4(matrixData?.column4Arr[11]);
        }

        //noise 12x5
        if (matrixData?.column5Arr[11] !== undefined && noiseLevel > random12x5) {
            if (matrixData?.column5Arr[11] === 0) {
                setNoise12x5(1);
            } else {
                setNoise12x5(0);
            }
        } else {
            setNoise12x5(matrixData?.column5Arr[11]);
        }

        //noise 12x6
        if (matrixData?.column6Arr[11] !== undefined && noiseLevel > random12x6) {
            if (matrixData?.column6Arr[11] === 0) {
                setNoise12x6(1);
            } else {
                setNoise12x6(0);
            }
        } else {
            setNoise12x6(matrixData?.column6Arr[11]);
        }

        //noise 12x7
        if (matrixData?.column7Arr[11] !== undefined && noiseLevel > random12x7) {
            if (matrixData?.column7Arr[11] === 0) {
                setNoise12x7(1);
            } else {
                setNoise12x7(0);
            }
        } else {
            setNoise12x7(matrixData?.column7Arr[11]);
        }

        //noise 12x8
        if (matrixData?.column8Arr[11] !== undefined && noiseLevel > random12x8) {
            if (matrixData?.column8Arr[11] === 0) {
                setNoise12x8(1);
            } else {
                setNoise12x8(0);
            }
        } else {
            setNoise12x8(matrixData?.column8Arr[11]);
        }

        //noise 12x9
        if (matrixData?.column9Arr[11] !== undefined && noiseLevel > random12x9) {
            if (matrixData?.column9Arr[11] === 0) {
                setNoise12x9(1);
            } else {
                setNoise12x9(0);
            }
        } else {
            setNoise12x9(matrixData?.column9Arr[11]);
        }

        //noise 12x10
        if (matrixData?.column10Arr[11] !== undefined && noiseLevel > random12x10) {
            if (matrixData?.column10Arr[11] === 0) {
                setNoise12x10(1);
            } else {
                setNoise12x10(0);
            }
        } else {
            setNoise12x10(matrixData?.column10Arr[11]);
        }

        //noise 13x1
        if (matrixData?.column1Arr[12] !== undefined && noiseLevel > random13x1) {
            if (matrixData?.column1Arr[12] === 0) {
                setNoise13x1(1);
            } else {
                setNoise13x1(0);
            }
        } else {
            setNoise13x1(matrixData?.column1Arr[12]);
        }

        //noise 13x2
        if (matrixData?.column2Arr[12] !== undefined && noiseLevel > random13x2) {
            if (matrixData?.column2Arr[12] === 0) {
                setNoise13x2(1);
            } else {
                setNoise13x2(0);
            }
        } else {
            setNoise13x2(matrixData?.column2Arr[12]);
        }

        //noise 13x3
        if (matrixData?.column3Arr[12] !== undefined && noiseLevel > random13x3) {
            if (matrixData?.column3Arr[12] === 0) {
                setNoise13x3(1);
            } else {
                setNoise13x3(0);
            }
        } else {
            setNoise13x3(matrixData?.column3Arr[12]);
        }

        //noise 13x4
        if (matrixData?.column4Arr[12] !== undefined && noiseLevel > random13x4) {
            if (matrixData?.column4Arr[12] === 0) {
                setNoise13x4(1);
            } else {
                setNoise13x4(0);
            }
        } else {
            setNoise13x4(matrixData?.column4Arr[12]);
        }

        //noise 13x5
        if (matrixData?.column5Arr[12] !== undefined && noiseLevel > random13x5) {
            if (matrixData?.column5Arr[12] === 0) {
                setNoise13x5(1);
            } else {
                setNoise13x5(0);
            }
        } else {
            setNoise13x5(matrixData?.column5Arr[12]);
        }

        //noise 13x6
        if (matrixData?.column6Arr[12] !== undefined && noiseLevel > random13x6) {
            if (matrixData?.column6Arr[12] === 0) {
                setNoise13x6(1);
            } else {
                setNoise13x6(0);
            }
        } else {
            setNoise13x6(matrixData?.column6Arr[12]);
        }

        //noise 13x7
        if (matrixData?.column7Arr[12] !== undefined && noiseLevel > random13x7) {
            if (matrixData?.column7Arr[12] === 0) {
                setNoise13x7(1);
            } else {
                setNoise13x7(0);
            }
        } else {
            setNoise13x7(matrixData?.column7Arr[12]);
        }

        //noise 13x8
        if (matrixData?.column8Arr[12] !== undefined && noiseLevel > random13x8) {
            if (matrixData?.column8Arr[12] === 0) {
                setNoise13x8(1);
            } else {
                setNoise13x8(0);
            }
        } else {
            setNoise13x8(matrixData?.column8Arr[12]);
        }

        //noise 13x9
        if (matrixData?.column9Arr[12] !== undefined && noiseLevel > random13x9) {
            if (matrixData?.column9Arr[12] === 0) {
                setNoise13x9(1);
            } else {
                setNoise13x9(0);
            }
        } else {
            setNoise13x9(matrixData?.column9Arr[12]);
        }

        //noise 13x10
        if (matrixData?.column10Arr[12] !== undefined && noiseLevel > random13x10) {
            if (matrixData?.column10Arr[12] === 0) {
                setNoise13x10(1);
            } else {
                setNoise13x10(0);
            }
        } else {
            setNoise13x10(matrixData?.column10Arr[12]);
        }
    };

    const simulateNoise = () => {
        simulateNoisePart1();
        simulateNoisePart2();
    };

    // row 1 classNames
    const [className1x1, setClassName1x1] = useState<string>('flip-number');
    const [className1x2, setClassName1x2] = useState<string>('flip-number');
    const [className1x3, setClassName1x3] = useState<string>('flip-number');
    const [className1x4, setClassName1x4] = useState<string>('flip-number');
    const [className1x5, setClassName1x5] = useState<string>('flip-number');
    const [className1x6, setClassName1x6] = useState<string>('flip-number');
    const [className1x7, setClassName1x7] = useState<string>('flip-number flip-external');
    const [className1x8, setClassName1x8] = useState<string>('flip-number flip-external');
    const [className1x9, setClassName1x9] = useState<string>('flip-number flip-external');
    const [className1x10, setClassName1x10] = useState<string>('flip-number flip-external');

    // row 2 classNames
    const [className2x1, setClassName2x1] = useState<string>('flip-number');
    const [className2x2, setClassName2x2] = useState<string>('flip-number');
    const [className2x3, setClassName2x3] = useState<string>('flip-number');
    const [className2x4, setClassName2x4] = useState<string>('flip-number');
    const [className2x5, setClassName2x5] = useState<string>('flip-number');
    const [className2x6, setClassName2x6] = useState<string>('flip-number');
    const [className2x7, setClassName2x7] = useState<string>('flip-number flip-external');
    const [className2x8, setClassName2x8] = useState<string>('flip-number flip-external');
    const [className2x9, setClassName2x9] = useState<string>('flip-number flip-external');
    const [className2x10, setClassName2x10] = useState<string>('flip-number flip-external');

    // row 3 classNames
    const [className3x1, setClassName3x1] = useState<string>('flip-number');
    const [className3x2, setClassName3x2] = useState<string>('flip-number');
    const [className3x3, setClassName3x3] = useState<string>('flip-number');
    const [className3x4, setClassName3x4] = useState<string>('flip-number');
    const [className3x5, setClassName3x5] = useState<string>('flip-number');
    const [className3x6, setClassName3x6] = useState<string>('flip-number');
    const [className3x7, setClassName3x7] = useState<string>('flip-number flip-external');
    const [className3x8, setClassName3x8] = useState<string>('flip-number flip-external');
    const [className3x9, setClassName3x9] = useState<string>('flip-number flip-external');
    const [className3x10, setClassName3x10] = useState<string>('flip-number flip-external');

    // row 4 classNames
    const [className4x1, setClassName4x1] = useState<string>('flip-number');
    const [className4x2, setClassName4x2] = useState<string>('flip-number');
    const [className4x3, setClassName4x3] = useState<string>('flip-number');
    const [className4x4, setClassName4x4] = useState<string>('flip-number');
    const [className4x5, setClassName4x5] = useState<string>('flip-number');
    const [className4x6, setClassName4x6] = useState<string>('flip-number');
    const [className4x7, setClassName4x7] = useState<string>('flip-number flip-external');
    const [className4x8, setClassName4x8] = useState<string>('flip-number flip-external');
    const [className4x9, setClassName4x9] = useState<string>('flip-number flip-external');
    const [className4x10, setClassName4x10] = useState<string>('flip-number flip-external');

    // row 5 classNames
    const [className5x1, setClassName5x1] = useState<string>('flip-number');
    const [className5x2, setClassName5x2] = useState<string>('flip-number');
    const [className5x3, setClassName5x3] = useState<string>('flip-number');
    const [className5x4, setClassName5x4] = useState<string>('flip-number');
    const [className5x5, setClassName5x5] = useState<string>('flip-number');
    const [className5x6, setClassName5x6] = useState<string>('flip-number');
    const [className5x7, setClassName5x7] = useState<string>('flip-number flip-external');
    const [className5x8, setClassName5x8] = useState<string>('flip-number flip-external');
    const [className5x9, setClassName5x9] = useState<string>('flip-number flip-external');
    const [className5x10, setClassName5x10] = useState<string>('flip-number flip-external');

    // row 6 classNames
    const [className6x1, setClassName6x1] = useState<string>('flip-number');
    const [className6x2, setClassName6x2] = useState<string>('flip-number');
    const [className6x3, setClassName6x3] = useState<string>('flip-number');
    const [className6x4, setClassName6x4] = useState<string>('flip-number');
    const [className6x5, setClassName6x5] = useState<string>('flip-number');
    const [className6x6, setClassName6x6] = useState<string>('flip-number');
    const [className6x7, setClassName6x7] = useState<string>('flip-number flip-external');
    const [className6x8, setClassName6x8] = useState<string>('flip-number flip-external');
    const [className6x9, setClassName6x9] = useState<string>('flip-number flip-external');
    const [className6x10, setClassName6x10] = useState<string>('flip-number flip-external');

    // row 7 classNames
    const [className7x1, setClassName7x1] = useState<string>('flip-number');
    const [className7x2, setClassName7x2] = useState<string>('flip-number');
    const [className7x3, setClassName7x3] = useState<string>('flip-number');
    const [className7x4, setClassName7x4] = useState<string>('flip-number');
    const [className7x5, setClassName7x5] = useState<string>('flip-number');
    const [className7x6, setClassName7x6] = useState<string>('flip-number');
    const [className7x7, setClassName7x7] = useState<string>('flip-number flip-external');
    const [className7x8, setClassName7x8] = useState<string>('flip-number flip-external');
    const [className7x9, setClassName7x9] = useState<string>('flip-number flip-external');
    const [className7x10, setClassName7x10] = useState<string>('flip-number flip-external');

    // row 8 classNames
    const [className8x1, setClassName8x1] = useState<string>('flip-number');
    const [className8x2, setClassName8x2] = useState<string>('flip-number');
    const [className8x3, setClassName8x3] = useState<string>('flip-number');
    const [className8x4, setClassName8x4] = useState<string>('flip-number');
    const [className8x5, setClassName8x5] = useState<string>('flip-number');
    const [className8x6, setClassName8x6] = useState<string>('flip-number');
    const [className8x7, setClassName8x7] = useState<string>('flip-number flip-external');
    const [className8x8, setClassName8x8] = useState<string>('flip-number flip-external');
    const [className8x9, setClassName8x9] = useState<string>('flip-number flip-external');
    const [className8x10, setClassName8x10] = useState<string>('flip-number flip-external');

    // row 9 classNames
    const [className9x1, setClassName9x1] = useState<string>('flip-number');
    const [className9x2, setClassName9x2] = useState<string>('flip-number');
    const [className9x3, setClassName9x3] = useState<string>('flip-number');
    const [className9x4, setClassName9x4] = useState<string>('flip-number');
    const [className9x5, setClassName9x5] = useState<string>('flip-number');
    const [className9x6, setClassName9x6] = useState<string>('flip-number');
    const [className9x7, setClassName9x7] = useState<string>('flip-number flip-external');
    const [className9x8, setClassName9x8] = useState<string>('flip-number flip-external');
    const [className9x9, setClassName9x9] = useState<string>('flip-number flip-external');
    const [className9x10, setClassName9x10] = useState<string>('flip-number flip-external');

    // row 10 classNames
    const [className10x1, setClassName10x1] = useState<string>('flip-number flip-v');
    const [className10x2, setClassName10x2] = useState<string>('flip-number flip-v');
    const [className10x3, setClassName10x3] = useState<string>('flip-number flip-v');
    const [className10x4, setClassName10x4] = useState<string>('flip-number flip-v');
    const [className10x5, setClassName10x5] = useState<string>('flip-number flip-v');
    const [className10x6, setClassName10x6] = useState<string>('flip-number flip-v');
    const [className10x7, setClassName10x7] = useState<string>('flip-number flip-v');
    const [className10x8, setClassName10x8] = useState<string>('flip-number flip-v');
    const [className10x9, setClassName10x9] = useState<string>('flip-number flip-v');
    const [className10x10, setClassName10x10] = useState<string>('flip-number flip-v');

    // row 11 classNames
    const [className11x1, setClassName11x1] = useState<string>('flip-number flip-v');
    const [className11x2, setClassName11x2] = useState<string>('flip-number flip-v');
    const [className11x3, setClassName11x3] = useState<string>('flip-number flip-v');
    const [className11x4, setClassName11x4] = useState<string>('flip-number flip-v');
    const [className11x5, setClassName11x5] = useState<string>('flip-number flip-v');
    const [className11x6, setClassName11x6] = useState<string>('flip-number flip-v');
    const [className11x7, setClassName11x7] = useState<string>('flip-number flip-v');
    const [className11x8, setClassName11x8] = useState<string>('flip-number flip-v');
    const [className11x9, setClassName11x9] = useState<string>('flip-number flip-v');
    const [className11x10, setClassName11x10] = useState<string>('flip-number flip-v');

    // row 12 classNames
    const [className12x1, setClassName12x1] = useState<string>('flip-number flip-v');
    const [className12x2, setClassName12x2] = useState<string>('flip-number flip-v');
    const [className12x3, setClassName12x3] = useState<string>('flip-number flip-v');
    const [className12x4, setClassName12x4] = useState<string>('flip-number flip-v');
    const [className12x5, setClassName12x5] = useState<string>('flip-number flip-v');
    const [className12x6, setClassName12x6] = useState<string>('flip-number flip-v');
    const [className12x7, setClassName12x7] = useState<string>('flip-number flip-v');
    const [className12x8, setClassName12x8] = useState<string>('flip-number flip-v');
    const [className12x9, setClassName12x9] = useState<string>('flip-number flip-v');
    const [className12x10, setClassName12x10] = useState<string>('flip-number flip-v');

    // row 13 classNames
    const [className13x1, setClassName13x1] = useState<string>('flip-number flip-v');
    const [className13x2, setClassName13x2] = useState<string>('flip-number flip-v');
    const [className13x3, setClassName13x3] = useState<string>('flip-number flip-v');
    const [className13x4, setClassName13x4] = useState<string>('flip-number flip-v');
    const [className13x5, setClassName13x5] = useState<string>('flip-number flip-v');
    const [className13x6, setClassName13x6] = useState<string>('flip-number flip-v');
    const [className13x7, setClassName13x7] = useState<string>('flip-number flip-v');
    const [className13x8, setClassName13x8] = useState<string>('flip-number flip-v');
    const [className13x9, setClassName13x9] = useState<string>('flip-number flip-v');
    const [className13x10, setClassName13x10] = useState<string>('flip-number flip-v');

    const [numberOfWrongBits, setNumberOfWrongBits] = useState<number>(0);

    const showFliped = () => {
        setNumberOfWrongBits(0);
        //row 1 show fliped
        if (noiseLevel > random1x1) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x1('flip-number fliped');
        } else {
            setClassName1x1('flip-number');
        }

        if (noiseLevel > random1x2) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x2('flip-number fliped');
        } else {
            setClassName1x2('flip-number');
        }

        if (noiseLevel > random1x3) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x3('flip-number fliped');
        } else {
            setClassName1x3('flip-number');
        }

        if (noiseLevel > random1x4) {
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
            setClassName1x4('flip-number fliped');
        } else {
            setClassName1x4('flip-number');
        }

        if (noiseLevel > random1x5) {
            setClassName1x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x5('flip-number');
        }

        if (noiseLevel > random1x6) {
            setClassName1x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x6('flip-number');
        }

        if (noiseLevel > random1x7) {
            setClassName1x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x7('flip-number flip-external');
        }

        if (noiseLevel > random1x8) {
            setClassName1x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x8('flip-number flip-external');
        }

        if (noiseLevel > random1x9) {
            setClassName1x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x9('flip-number flip-external');
        }

        if (noiseLevel > random1x10) {
            setClassName1x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName1x10('flip-number flip-external');
        }

        //row 2 show fliped
        if (noiseLevel > random2x1) {
            setClassName2x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x1('flip-number');
        }

        if (noiseLevel > random2x2) {
            setClassName2x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x2('flip-number');
        }

        if (noiseLevel > random2x3) {
            setClassName2x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x3('flip-number');
        }

        if (noiseLevel > random2x4) {
            setClassName2x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x4('flip-number');
        }

        if (noiseLevel > random2x5) {
            setClassName2x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x5('flip-number');
        }

        if (noiseLevel > random2x6) {
            setClassName2x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x6('flip-number');
        }

        if (noiseLevel > random2x7) {
            setClassName2x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x7('flip-number flip-external');
        }

        if (noiseLevel > random2x8) {
            setClassName2x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x8('flip-number flip-external');
        }

        if (noiseLevel > random2x9) {
            setClassName2x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x9('flip-number flip-external');
        }

        if (noiseLevel > random2x10) {
            setClassName2x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName2x10('flip-number flip-external');
        }

        //row 3 show fliped
        if (noiseLevel > random3x1) {
            setClassName3x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x1('flip-number');
        }

        if (noiseLevel > random3x2) {
            setClassName3x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x2('flip-number');
        }

        if (noiseLevel > random3x3) {
            setClassName3x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x3('flip-number');
        }

        if (noiseLevel > random3x4) {
            setClassName3x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x4('flip-number');
        }

        if (noiseLevel > random3x5) {
            setClassName3x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x5('flip-number');
        }

        if (noiseLevel > random3x6) {
            setClassName3x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x6('flip-number');
        }

        if (noiseLevel > random3x7) {
            setClassName3x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x7('flip-number flip-external');
        }

        if (noiseLevel > random3x8) {
            setClassName3x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x8('flip-number flip-external');
        }

        if (noiseLevel > random3x9) {
            setClassName3x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x9('flip-number flip-external');
        }

        if (noiseLevel > random3x10) {
            setClassName3x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName3x10('flip-number flip-external');
        }

        //row 4 show fliped
        if (noiseLevel > random4x1) {
            setClassName4x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x1('flip-number');
        }

        if (noiseLevel > random4x2) {
            setClassName4x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x2('flip-number');
        }

        if (noiseLevel > random4x3) {
            setClassName4x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x3('flip-number');
        }

        if (noiseLevel > random4x4) {
            setClassName4x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x4('flip-number');
        }

        if (noiseLevel > random4x5) {
            setClassName4x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x5('flip-number');
        }

        if (noiseLevel > random4x6) {
            setClassName4x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x6('flip-number');
        }

        if (noiseLevel > random4x7) {
            setClassName4x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x7('flip-number flip-external');
        }

        if (noiseLevel > random4x8) {
            setClassName4x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x8('flip-number flip-external');
        }

        if (noiseLevel > random4x9) {
            setClassName4x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x9('flip-number flip-external');
        }

        if (noiseLevel > random4x10) {
            setClassName4x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName4x10('flip-number flip-external');
        }

        //row 5 show fliped
        if (noiseLevel > random5x1) {
            setClassName5x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x1('flip-number');
        }

        if (noiseLevel > random5x2) {
            setClassName5x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x2('flip-number');
        }

        if (noiseLevel > random5x3) {
            setClassName5x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x3('flip-number');
        }

        if (noiseLevel > random5x4) {
            setClassName5x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x4('flip-number');
        }

        if (noiseLevel > random5x5) {
            setClassName5x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x5('flip-number');
        }

        if (noiseLevel > random5x6) {
            setClassName5x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x6('flip-number');
        }

        if (noiseLevel > random5x7) {
            setClassName5x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x7('flip-number flip-external');
        }

        if (noiseLevel > random5x8) {
            setClassName5x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x8('flip-number flip-external');
        }

        if (noiseLevel > random5x9) {
            setClassName5x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x9('flip-number flip-external');
        }

        if (noiseLevel > random5x10) {
            setClassName5x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName5x10('flip-number flip-external');
        }

        //row 6 show fliped
        if (noiseLevel > random6x1) {
            setClassName6x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x1('flip-number');
        }

        if (noiseLevel > random6x2) {
            setClassName6x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x2('flip-number');
        }

        if (noiseLevel > random6x3) {
            setClassName6x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x3('flip-number');
        }

        if (noiseLevel > random6x4) {
            setClassName6x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x4('flip-number');
        }

        if (noiseLevel > random6x5) {
            setClassName6x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x5('flip-number');
        }

        if (noiseLevel > random6x6) {
            setClassName6x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x6('flip-number');
        }

        if (noiseLevel > random6x7) {
            setClassName6x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x7('flip-number flip-external');
        }

        if (noiseLevel > random6x8) {
            setClassName6x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x8('flip-number flip-external');
        }

        if (noiseLevel > random6x9) {
            setClassName6x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x9('flip-number flip-external');
        }

        if (noiseLevel > random6x10) {
            setClassName6x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName6x10('flip-number flip-external');
        }

        //row 7 show fliped
        if (noiseLevel > random7x1) {
            setClassName7x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x1('flip-number');
        }

        if (noiseLevel > random7x2) {
            setClassName7x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x2('flip-number');
        }

        if (noiseLevel > random7x3) {
            setClassName7x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x3('flip-number');
        }

        if (noiseLevel > random7x4) {
            setClassName7x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x4('flip-number');
        }

        if (noiseLevel > random7x5) {
            setClassName7x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x5('flip-number');
        }

        if (noiseLevel > random7x6) {
            setClassName7x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x6('flip-number');
        }

        if (noiseLevel > random7x7) {
            setClassName7x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x7('flip-number flip-external');
        }

        if (noiseLevel > random7x8) {
            setClassName7x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x8('flip-number flip-external');
        }

        if (noiseLevel > random7x9) {
            setClassName7x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x9('flip-number flip-external');
        }

        if (noiseLevel > random7x10) {
            setClassName7x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName7x10('flip-number flip-external');
        }

        //row 8 show fliped
        if (noiseLevel > random8x1) {
            setClassName8x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x1('flip-number');
        }

        if (noiseLevel > random8x2) {
            setClassName8x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x2('flip-number');
        }

        if (noiseLevel > random8x3) {
            setClassName8x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x3('flip-number');
        }

        if (noiseLevel > random8x4) {
            setClassName8x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x4('flip-number');
        }

        if (noiseLevel > random8x5) {
            setClassName8x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x5('flip-number');
        }

        if (noiseLevel > random8x6) {
            setClassName8x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x6('flip-number');
        }

        if (noiseLevel > random8x7) {
            setClassName8x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x7('flip-number flip-external');
        }

        if (noiseLevel > random8x8) {
            setClassName8x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x8('flip-number flip-external');
        }

        if (noiseLevel > random8x9) {
            setClassName8x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x9('flip-number flip-external');
        }

        if (noiseLevel > random8x10) {
            setClassName8x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName8x10('flip-number flip-external');
        }

        //row 9 show fliped
        if (noiseLevel > random9x1) {
            setClassName9x1('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x1('flip-number');
        }

        if (noiseLevel > random9x2) {
            setClassName9x2('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x2('flip-number');
        }

        if (noiseLevel > random9x3) {
            setClassName9x3('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x3('flip-number');
        }

        if (noiseLevel > random9x4) {
            setClassName9x4('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x4('flip-number');
        }

        if (noiseLevel > random9x5) {
            setClassName9x5('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x5('flip-number');
        }

        if (noiseLevel > random9x6) {
            setClassName9x6('flip-number fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x6('flip-number');
        }

        if (noiseLevel > random9x7) {
            setClassName9x7('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x7('flip-number flip-external');
        }

        if (noiseLevel > random9x8) {
            setClassName9x8('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x8('flip-number flip-external');
        }

        if (noiseLevel > random9x9) {
            setClassName9x9('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x9('flip-number flip-external');
        }

        if (noiseLevel > random9x10) {
            setClassName9x10('flip-number flip-external fliped');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName9x10('flip-number flip-external');
        }

        //row 10 show fliped
        if (noiseLevel > random10x1) {
            setClassName10x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x1('flip-number flip-v');
        }

        if (noiseLevel > random10x2) {
            setClassName10x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x2('flip-number flip-v');
        }

        if (noiseLevel > random10x3) {
            setClassName10x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x3('flip-number flip-v');
        }

        if (noiseLevel > random10x4) {
            setClassName10x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x4('flip-number flip-v');
        }

        if (noiseLevel > random10x5) {
            setClassName10x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x5('flip-number flip-v');
        }

        if (noiseLevel > random10x6) {
            setClassName10x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x6('flip-number flip-v');
        }

        if (noiseLevel > random10x7) {
            setClassName10x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x7('flip-number flip-v');
        }

        if (noiseLevel > random10x8) {
            setClassName10x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x8('flip-number flip-v');
        }

        if (noiseLevel > random10x9) {
            setClassName10x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x9('flip-number flip-v');
        }

        if (noiseLevel > random10x10) {
            setClassName10x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName10x10('flip-number flip-v');
        }

        //row 11 show fliped
        if (noiseLevel > random11x1) {
            setClassName11x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x1('flip-number flip-v');
        }

        if (noiseLevel > random11x2) {
            setClassName11x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x2('flip-number flip-v');
        }

        if (noiseLevel > random11x3) {
            setClassName11x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x3('flip-number flip-v');
        }

        if (noiseLevel > random11x4) {
            setClassName11x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x4('flip-number flip-v');
        }

        if (noiseLevel > random11x5) {
            setClassName11x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x5('flip-number flip-v');
        }

        if (noiseLevel > random11x6) {
            setClassName11x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x6('flip-number flip-v');
        }

        if (noiseLevel > random11x7) {
            setClassName11x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x7('flip-number flip-v');
        }

        if (noiseLevel > random11x8) {
            setClassName11x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x8('flip-number flip-v');
        }

        if (noiseLevel > random11x9) {
            setClassName11x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x9('flip-number flip-v');
        }

        if (noiseLevel > random11x10) {
            setClassName11x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName11x10('flip-number flip-v');
        }

        //row 12 show fliped flip-v
        if (noiseLevel > random12x1) {
            setClassName12x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x1('flip-number flip-v');
        }

        if (noiseLevel > random12x2) {
            setClassName12x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x2('flip-number flip-v');
        }

        if (noiseLevel > random12x3) {
            setClassName12x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x3('flip-number flip-v');
        }

        if (noiseLevel > random12x4) {
            setClassName12x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x4('flip-number flip-v');
        }

        if (noiseLevel > random12x5) {
            setClassName12x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x5('flip-number flip-v');
        }

        if (noiseLevel > random12x6) {
            setClassName12x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x6('flip-number flip-v');
        }

        if (noiseLevel > random12x7) {
            setClassName12x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x7('flip-number flip-v');
        }

        if (noiseLevel > random12x8) {
            setClassName12x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x8('flip-number flip-v');
        }

        if (noiseLevel > random12x9) {
            setClassName12x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x9('flip-number flip-v');
        }

        if (noiseLevel > random12x10) {
            setClassName12x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName12x10('flip-number flip-v');
        }

        //row 13 show fliped flip-v
        if (noiseLevel > random13x1) {
            setClassName13x1('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x1('flip-number flip-v');
        }

        if (noiseLevel > random13x2) {
            setClassName13x2('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x2('flip-number flip-v');
        }

        if (noiseLevel > random13x3) {
            setClassName13x3('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x3('flip-number flip-v');
        }

        if (noiseLevel > random13x4) {
            setClassName13x4('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x4('flip-number flip-v');
        }

        if (noiseLevel > random13x5) {
            setClassName13x5('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x5('flip-number flip-v');
        }

        if (noiseLevel > random13x6) {
            setClassName13x6('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x6('flip-number flip-v');
        }

        if (noiseLevel > random13x7) {
            setClassName13x7('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x7('flip-number flip-v');
        }

        if (noiseLevel > random13x8) {
            setClassName13x8('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x8('flip-number flip-v');
        }

        if (noiseLevel > random13x9) {
            setClassName13x9('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x9('flip-number flip-v');
        }

        if (noiseLevel > random13x10) {
            setClassName13x10('flip-number fliped flip-v');
            setNumberOfWrongBits((prevNumber) => prevNumber + 1);
        } else {
            setClassName13x10('flip-number flip-v');
        }
    };

    return (
        <div className="noise-wrapper">
            <p>Noise</p>
            <p>Current noise level: {noiseLevel}</p>
            <div className="random-wrapper">
                <div className="random-row column-numbers">
                    <div className="random-number column-number">Pos</div>
                    <div className="random-number column-number">1</div>
                    <div className="random-number column-number">2</div>
                    <div className="random-number column-number">3</div>
                    <div className="random-number column-number">4</div>
                    <div className="random-number column-number">5</div>
                    <div className="random-number column-number">6</div>
                    <div className="random-number column-number">7</div>
                    <div className="random-number column-number">8</div>
                    <div className="random-number column-number">9</div>
                    <div className="random-number column-number">10</div>
                </div>
                <div className="random-row row-1">
                    <div className="random-number row-number">1</div>
                    <div className="random-number">{random1x1}</div>
                    <div className="random-number">{random1x2}</div>
                    <div className="random-number">{random1x3}</div>
                    <div className="random-number">{random1x4}</div>
                    <div className="random-number">{random1x5}</div>
                    <div className="random-number">{random1x6}</div>
                    <div className="random-number">{random1x7}</div>
                    <div className="random-number">{random1x8}</div>
                    <div className="random-number">{random1x9}</div>
                    <div className="random-number">{random1x10}</div>
                </div>
                <div className="random-row row-2">
                    <div className="random-number row-number">2</div>
                    <div className="random-number">{random2x1}</div>
                    <div className="random-number">{random2x2}</div>
                    <div className="random-number">{random2x3}</div>
                    <div className="random-number">{random2x4}</div>
                    <div className="random-number">{random2x5}</div>
                    <div className="random-number">{random2x6}</div>
                    <div className="random-number">{random2x7}</div>
                    <div className="random-number">{random2x8}</div>
                    <div className="random-number">{random2x9}</div>
                    <div className="random-number">{random2x10}</div>
                </div>
                <div className="random-row row-3">
                    <div className="random-number row-number">3</div>
                    <div className="random-number">{random3x1}</div>
                    <div className="random-number">{random3x2}</div>
                    <div className="random-number">{random3x3}</div>
                    <div className="random-number">{random3x4}</div>
                    <div className="random-number">{random3x5}</div>
                    <div className="random-number">{random3x6}</div>
                    <div className="random-number">{random3x7}</div>
                    <div className="random-number">{random3x8}</div>
                    <div className="random-number">{random3x9}</div>
                    <div className="random-number">{random3x10}</div>
                </div>
                <div className="random-row row-4">
                    <div className="random-number row-number">4</div>
                    <div className="random-number">{random4x1}</div>
                    <div className="random-number">{random4x2}</div>
                    <div className="random-number">{random4x3}</div>
                    <div className="random-number">{random4x4}</div>
                    <div className="random-number">{random4x5}</div>
                    <div className="random-number">{random4x6}</div>
                    <div className="random-number">{random4x7}</div>
                    <div className="random-number">{random4x8}</div>
                    <div className="random-number">{random4x9}</div>
                    <div className="random-number">{random4x10}</div>
                </div>
                <div className="random-row row-5">
                    <div className="random-number row-number">5</div>
                    <div className="random-number">{random5x1}</div>
                    <div className="random-number">{random5x2}</div>
                    <div className="random-number">{random5x3}</div>
                    <div className="random-number">{random5x4}</div>
                    <div className="random-number">{random5x5}</div>
                    <div className="random-number">{random5x6}</div>
                    <div className="random-number">{random5x7}</div>
                    <div className="random-number">{random5x8}</div>
                    <div className="random-number">{random5x9}</div>
                    <div className="random-number">{random5x10}</div>
                </div>
                <div className="random-row row-6">
                    <div className="random-number row-number">6</div>
                    <div className="random-number">{random6x1}</div>
                    <div className="random-number">{random6x2}</div>
                    <div className="random-number">{random6x3}</div>
                    <div className="random-number">{random6x4}</div>
                    <div className="random-number">{random6x5}</div>
                    <div className="random-number">{random6x6}</div>
                    <div className="random-number">{random6x7}</div>
                    <div className="random-number">{random6x8}</div>
                    <div className="random-number">{random6x9}</div>
                    <div className="random-number">{random6x10}</div>
                </div>
                <div className="random-row row-7">
                    <div className="random-number row-number">7</div>
                    <div className="random-number">{random7x1}</div>
                    <div className="random-number">{random7x2}</div>
                    <div className="random-number">{random7x3}</div>
                    <div className="random-number">{random7x4}</div>
                    <div className="random-number">{random7x5}</div>
                    <div className="random-number">{random7x6}</div>
                    <div className="random-number">{random7x7}</div>
                    <div className="random-number">{random7x8}</div>
                    <div className="random-number">{random7x9}</div>
                    <div className="random-number">{random7x10}</div>
                </div>
                <div className="random-row row-8">
                    <div className="random-number row-number">8</div>
                    <div className="random-number">{random8x1}</div>
                    <div className="random-number">{random8x2}</div>
                    <div className="random-number">{random8x3}</div>
                    <div className="random-number">{random8x4}</div>
                    <div className="random-number">{random8x5}</div>
                    <div className="random-number">{random8x6}</div>
                    <div className="random-number">{random8x7}</div>
                    <div className="random-number">{random8x8}</div>
                    <div className="random-number">{random8x9}</div>
                    <div className="random-number">{random8x10}</div>
                </div>
                <div className="random-row row-9">
                    <div className="random-number row-number">9</div>
                    <div className="random-number">{random9x1}</div>
                    <div className="random-number">{random9x2}</div>
                    <div className="random-number">{random9x3}</div>
                    <div className="random-number">{random9x4}</div>
                    <div className="random-number">{random9x5}</div>
                    <div className="random-number">{random9x6}</div>
                    <div className="random-number">{random9x7}</div>
                    <div className="random-number">{random9x8}</div>
                    <div className="random-number">{random9x9}</div>
                    <div className="random-number">{random9x10}</div>
                </div>
                <div className="random-row row-10">
                    <div className="random-number row-number">10</div>
                    <div className="random-number">{random10x1}</div>
                    <div className="random-number">{random10x2}</div>
                    <div className="random-number">{random10x3}</div>
                    <div className="random-number">{random10x4}</div>
                    <div className="random-number">{random10x5}</div>
                    <div className="random-number">{random10x6}</div>
                    <div className="random-number">{random10x7}</div>
                    <div className="random-number">{random10x8}</div>
                    <div className="random-number">{random10x9}</div>
                    <div className="random-number">{random10x10}</div>
                </div>
                <div className="random-row row-11">
                    <div className="random-number row-number">11</div>
                    <div className="random-number">{random11x1}</div>
                    <div className="random-number">{random11x2}</div>
                    <div className="random-number">{random11x3}</div>
                    <div className="random-number">{random11x4}</div>
                    <div className="random-number">{random11x5}</div>
                    <div className="random-number">{random11x6}</div>
                    <div className="random-number">{random11x7}</div>
                    <div className="random-number">{random11x8}</div>
                    <div className="random-number">{random11x9}</div>
                    <div className="random-number">{random11x10}</div>
                </div>
                <div className="random-row row-12">
                    <div className="random-number row-number">12</div>
                    <div className="random-number">{random12x1}</div>
                    <div className="random-number">{random12x2}</div>
                    <div className="random-number">{random12x3}</div>
                    <div className="random-number">{random12x4}</div>
                    <div className="random-number">{random12x5}</div>
                    <div className="random-number">{random12x6}</div>
                    <div className="random-number">{random12x7}</div>
                    <div className="random-number">{random12x8}</div>
                    <div className="random-number">{random12x9}</div>
                    <div className="random-number">{random12x10}</div>
                </div>
                <div className="random-row row-13">
                    <div className="random-number row-number">13</div>
                    <div className="random-number">{random13x1}</div>
                    <div className="random-number">{random13x2}</div>
                    <div className="random-number">{random13x3}</div>
                    <div className="random-number">{random13x4}</div>
                    <div className="random-number">{random13x5}</div>
                    <div className="random-number">{random13x6}</div>
                    <div className="random-number">{random13x7}</div>
                    <div className="random-number">{random13x8}</div>
                    <div className="random-number">{random13x9}</div>
                    <div className="random-number">{random13x10}</div>
                </div>
                <button onClick={createRandoms}>Create random noise matrix</button>
            </div>
            <p>Flip matrix</p>
            <div className="flip-wrapper">
                <div className="flip-row column-numbers">
                    <div className="flip-number column-number">Pos</div>
                    <div className="flip-number column-number">1</div>
                    <div className="flip-number column-number">2</div>
                    <div className="flip-number column-number">3</div>
                    <div className="flip-number column-number">4</div>
                    <div className="flip-number column-number">5</div>
                    <div className="flip-number column-number">6</div>
                    <div className="flip-number column-number">7</div>
                    <div className="flip-number column-number">8</div>
                    <div className="flip-number column-number">9</div>
                    <div className="flip-number column-number">10</div>
                </div>
                <div className="flip-row row-1">
                    <div className="flip-number row-number">1</div>
                    <div className={className1x1}>{noise1x1}</div>
                    <div className={className1x2}>{noise1x2}</div>
                    <div className={className1x3}>{noise1x3}</div>
                    <div className={className1x4}>{noise1x4}</div>
                    <div className={className1x5}>{noise1x5}</div>
                    <div className={className1x6}>{noise1x6}</div>
                    <div className={className1x7}>{noise1x7}</div>
                    <div className={className1x8}>{noise1x8}</div>
                    <div className={className1x9}>{noise1x9}</div>
                    <div className={className1x10}>{noise1x10}</div>
                </div>
                <div className="flip-row row-2">
                    <div className="flip-number row-number">2</div>
                    <div className={className2x1}>{noise2x1}</div>
                    <div className={className2x2}>{noise2x2}</div>
                    <div className={className2x3}>{noise2x3}</div>
                    <div className={className2x4}>{noise2x4}</div>
                    <div className={className2x5}>{noise2x5}</div>
                    <div className={className2x6}>{noise2x6}</div>
                    <div className={className2x7}>{noise2x7}</div>
                    <div className={className2x8}>{noise2x8}</div>
                    <div className={className2x9}>{noise2x9}</div>
                    <div className={className2x10}>{noise2x10}</div>
                </div>
                <div className="flip-row row-3">
                    <div className="flip-number row-number">3</div>
                    <div className={className3x1}>{noise3x1}</div>
                    <div className={className3x2}>{noise3x2}</div>
                    <div className={className3x3}>{noise3x3}</div>
                    <div className={className3x4}>{noise3x4}</div>
                    <div className={className3x5}>{noise3x5}</div>
                    <div className={className3x6}>{noise3x6}</div>
                    <div className={className3x7}>{noise3x7}</div>
                    <div className={className3x8}>{noise3x8}</div>
                    <div className={className3x9}>{noise3x9}</div>
                    <div className={className3x10}>{noise3x10}</div>
                </div>
                <div className="flip-row row-4">
                    <div className="flip-number row-number">4</div>
                    <div className={className4x1}>{noise4x1}</div>
                    <div className={className4x2}>{noise4x2}</div>
                    <div className={className4x3}>{noise4x3}</div>
                    <div className={className4x4}>{noise4x4}</div>
                    <div className={className4x5}>{noise4x5}</div>
                    <div className={className4x6}>{noise4x6}</div>
                    <div className={className4x7}>{noise4x7}</div>
                    <div className={className4x8}>{noise4x8}</div>
                    <div className={className4x9}>{noise4x9}</div>
                    <div className={className4x10}>{noise4x10}</div>
                </div>
                <div className="flip-row row-5">
                    <div className="flip-number row-number">5</div>
                    <div className={className5x1}>{noise5x1}</div>
                    <div className={className5x2}>{noise5x2}</div>
                    <div className={className5x3}>{noise5x3}</div>
                    <div className={className5x4}>{noise5x4}</div>
                    <div className={className5x5}>{noise5x5}</div>
                    <div className={className5x6}>{noise5x6}</div>
                    <div className={className5x7}>{noise5x7}</div>
                    <div className={className5x8}>{noise5x8}</div>
                    <div className={className5x9}>{noise5x9}</div>
                    <div className={className5x10}>{noise5x10}</div>
                </div>
                <div className="flip-row row-6">
                    <div className="flip-number row-number">6</div>
                    <div className={className6x1}>{noise6x1}</div>
                    <div className={className6x2}>{noise6x2}</div>
                    <div className={className6x3}>{noise6x3}</div>
                    <div className={className6x4}>{noise6x4}</div>
                    <div className={className6x5}>{noise6x5}</div>
                    <div className={className6x6}>{noise6x6}</div>
                    <div className={className6x7}>{noise6x7}</div>
                    <div className={className6x8}>{noise6x8}</div>
                    <div className={className6x9}>{noise6x9}</div>
                    <div className={className6x10}>{noise6x10}</div>
                </div>
                <div className="flip-row row-7">
                    <div className="flip-number row-number">7</div>
                    <div className={className7x1}>{noise7x1}</div>
                    <div className={className7x2}>{noise7x2}</div>
                    <div className={className7x3}>{noise7x3}</div>
                    <div className={className7x4}>{noise7x4}</div>
                    <div className={className7x5}>{noise7x5}</div>
                    <div className={className7x6}>{noise7x6}</div>
                    <div className={className7x7}>{noise7x7}</div>
                    <div className={className7x8}>{noise7x8}</div>
                    <div className={className7x9}>{noise7x9}</div>
                    <div className={className7x10}>{noise7x10}</div>
                </div>
                <div className="flip-row row-8">
                    <div className="flip-number row-number">8</div>
                    <div className={className8x1}>{noise8x1}</div>
                    <div className={className8x2}>{noise8x2}</div>
                    <div className={className8x3}>{noise8x3}</div>
                    <div className={className8x4}>{noise8x4}</div>
                    <div className={className8x5}>{noise8x5}</div>
                    <div className={className8x6}>{noise8x6}</div>
                    <div className={className8x7}>{noise8x7}</div>
                    <div className={className8x8}>{noise8x8}</div>
                    <div className={className8x9}>{noise8x9}</div>
                    <div className={className8x10}>{noise8x10}</div>
                </div>
                <div className="flip-row row-9">
                    <div className="flip-number row-number">9</div>
                    <div className={className9x1}>{noise9x1}</div>
                    <div className={className9x2}>{noise9x2}</div>
                    <div className={className9x3}>{noise9x3}</div>
                    <div className={className9x4}>{noise9x4}</div>
                    <div className={className9x5}>{noise9x5}</div>
                    <div className={className9x6}>{noise9x6}</div>
                    <div className={className9x7}>{noise9x7}</div>
                    <div className={className9x8}>{noise9x8}</div>
                    <div className={className9x9}>{noise9x9}</div>
                    <div className={className9x10}>{noise9x10}</div>
                </div>
                <div className="flip-row row-10">
                    <div className="flip-number row-number">10</div>
                    <div className={className10x1}>{noise10x1}</div>
                    <div className={className10x2}>{noise10x2}</div>
                    <div className={className10x3}>{noise10x3}</div>
                    <div className={className10x4}>{noise10x4}</div>
                    <div className={className10x5}>{noise10x5}</div>
                    <div className={className10x6}>{noise10x6}</div>
                    <div className={className10x7}>{noise10x7}</div>
                    <div className={className10x8}>{noise10x8}</div>
                    <div className={className10x9}>{noise10x9}</div>
                    <div className={className10x10}>{noise10x10}</div>
                </div>
                <div className="flip-row row-11">
                    <div className="flip-number row-number">11</div>
                    <div className={className11x1}>{noise11x1}</div>
                    <div className={className11x2}>{noise11x2}</div>
                    <div className={className11x3}>{noise11x3}</div>
                    <div className={className11x4}>{noise11x4}</div>
                    <div className={className11x5}>{noise11x5}</div>
                    <div className={className11x6}>{noise11x6}</div>
                    <div className={className11x7}>{noise11x7}</div>
                    <div className={className11x8}>{noise11x8}</div>
                    <div className={className11x9}>{noise11x9}</div>
                    <div className={className11x10}>{noise11x10}</div>
                </div>
                <div className="flip-row row-12">
                    <div className="flip-number row-number">12</div>
                    <div className={className12x1}>{noise12x1}</div>
                    <div className={className12x2}>{noise12x2}</div>
                    <div className={className12x3}>{noise12x3}</div>
                    <div className={className12x4}>{noise12x4}</div>
                    <div className={className12x5}>{noise12x5}</div>
                    <div className={className12x6}>{noise12x6}</div>
                    <div className={className12x7}>{noise12x7}</div>
                    <div className={className12x8}>{noise12x8}</div>
                    <div className={className12x9}>{noise12x9}</div>
                    <div className={className12x10}>{noise12x10}</div>
                </div>
                <div className="flip-row row-13">
                    <div className="flip-number row-number">13</div>
                    <div className={className13x1}>{noise13x1}</div>
                    <div className={className13x2}>{noise13x2}</div>
                    <div className={className13x3}>{noise13x3}</div>
                    <div className={className13x4}>{noise13x4}</div>
                    <div className={className13x5}>{noise13x5}</div>
                    <div className={className13x6}>{noise13x6}</div>
                    <div className={className13x7}>{noise13x7}</div>
                    <div className={className13x8}>{noise13x8}</div>
                    <div className={className13x9}>{noise13x9}</div>
                    <div className={className13x10}>{noise13x10}</div>
                </div>
                <button onClick={simulateNoise}>Simulate Noise</button>
                <button onClick={showFliped}>Show Fliped</button>
                <button onClick={passNoiseToLocal}>Pass results to storage</button>
                <p>Number of wrong bits: {numberOfWrongBits}</p>
            </div>
        </div>
    );
};

export default Noise;
