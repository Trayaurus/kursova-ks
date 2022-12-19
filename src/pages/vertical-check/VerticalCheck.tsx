import { FC, useState } from 'react';
import './VerticalCheck.css';

const VerticalCheck: FC = () => {
    //get matrix data from horisontal checks
    const getMatrixFromHorizontal = () => {
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
            horizontalResultRow9Str !== null
        ) {
            //convert matrix rows to array of digits
            const matrix1StrNoComma = matrix1Str.replaceAll(',', '');
            const matrix2StrNoComma = matrix2Str.replaceAll(',', '');
            const matrix3StrNoComma = matrix3Str.replaceAll(',', '');
            const matrix4StrNoComma = matrix4Str.replaceAll(',', '');
            const matrix5StrNoComma = matrix5Str.replaceAll(',', '');
            const matrix6StrNoComma = matrix6Str.replaceAll(',', '');
            const matrix7StrNoComma = matrix7Str.replaceAll(',', '');
            const matrix8StrNoComma = matrix8Str.replaceAll(',', '');
            const matrix9StrNoComma = matrix9Str.replaceAll(',', '');

            const matrixRow1 = Array.from(matrix1StrNoComma, Number);
            const matrixRow2 = Array.from(matrix2StrNoComma, Number);
            const matrixRow3 = Array.from(matrix3StrNoComma, Number);
            const matrixRow4 = Array.from(matrix4StrNoComma, Number);
            const matrixRow5 = Array.from(matrix5StrNoComma, Number);
            const matrixRow6 = Array.from(matrix6StrNoComma, Number);
            const matrixRow7 = Array.from(matrix7StrNoComma, Number);
            const matrixRow8 = Array.from(matrix8StrNoComma, Number);
            const matrixRow9 = Array.from(matrix9StrNoComma, Number);

            const horizontalResultRow1StrNoComma = horizontalResultRow1Str.replaceAll(',', '');
            const horizontalResultRow2StrNoComma = horizontalResultRow2Str.replaceAll(',', '');
            const horizontalResultRow3StrNoComma = horizontalResultRow3Str.replaceAll(',', '');
            const horizontalResultRow4StrNoComma = horizontalResultRow4Str.replaceAll(',', '');
            const horizontalResultRow5StrNoComma = horizontalResultRow5Str.replaceAll(',', '');
            const horizontalResultRow6StrNoComma = horizontalResultRow6Str.replaceAll(',', '');
            const horizontalResultRow7StrNoComma = horizontalResultRow7Str.replaceAll(',', '');
            const horizontalResultRow8StrNoComma = horizontalResultRow8Str.replaceAll(',', '');
            const horizontalResultRow9StrNoComma = horizontalResultRow9Str.replaceAll(',', '');

            const horizontalResultRow1 = Array.from(horizontalResultRow1StrNoComma, Number);
            const horizontalResultRow2 = Array.from(horizontalResultRow2StrNoComma, Number);
            const horizontalResultRow3 = Array.from(horizontalResultRow3StrNoComma, Number);
            const horizontalResultRow4 = Array.from(horizontalResultRow4StrNoComma, Number);
            const horizontalResultRow5 = Array.from(horizontalResultRow5StrNoComma, Number);
            const horizontalResultRow6 = Array.from(horizontalResultRow6StrNoComma, Number);
            const horizontalResultRow7 = Array.from(horizontalResultRow7StrNoComma, Number);
            const horizontalResultRow8 = Array.from(horizontalResultRow8StrNoComma, Number);
            const horizontalResultRow9 = Array.from(horizontalResultRow9StrNoComma, Number);

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

            const matrixColumns = {
                column1Arr: [matrix1x1, matrix2x1, matrix3x1, matrix4x1, matrix5x1, matrix6x1, matrix7x1, matrix8x1, matrix9x1],
                column2Arr: [matrix1x2, matrix2x2, matrix3x2, matrix4x2, matrix5x2, matrix6x2, matrix7x2, matrix8x2, matrix9x2],
                column3Arr: [matrix1x3, matrix2x3, matrix3x3, matrix4x3, matrix5x3, matrix6x3, matrix7x3, matrix8x3, matrix9x3],
                column4Arr: [matrix1x4, matrix2x4, matrix3x4, matrix4x4, matrix5x4, matrix6x4, matrix7x4, matrix8x4, matrix9x4],
                column5Arr: [matrix1x5, matrix2x5, matrix3x5, matrix4x5, matrix5x5, matrix6x5, matrix7x5, matrix8x5, matrix9x5],
                column6Arr: [matrix1x6, matrix2x6, matrix3x6, matrix4x6, matrix5x6, matrix6x6, matrix7x6, matrix8x6, matrix9x6],
                column16Arr: [
                    horizontalResult1x16,
                    horizontalResult2x16,
                    horizontalResult3x16,
                    horizontalResult4x16,
                    horizontalResult5x16,
                    horizontalResult6x16,
                    horizontalResult7x16,
                    horizontalResult8x16,
                    horizontalResult9x16
                ],
                column17Arr: [
                    horizontalResult1x17,
                    horizontalResult2x17,
                    horizontalResult3x17,
                    horizontalResult4x17,
                    horizontalResult5x17,
                    horizontalResult6x17,
                    horizontalResult7x17,
                    horizontalResult8x17,
                    horizontalResult9x17
                ],
                column18Arr: [
                    horizontalResult1x18,
                    horizontalResult2x18,
                    horizontalResult3x18,
                    horizontalResult4x18,
                    horizontalResult5x18,
                    horizontalResult6x18,
                    horizontalResult7x18,
                    horizontalResult8x18,
                    horizontalResult9x18
                ],
                column19Arr: [
                    horizontalResult1x19,
                    horizontalResult2x19,
                    horizontalResult3x19,
                    horizontalResult4x19,
                    horizontalResult5x19,
                    horizontalResult6x19,
                    horizontalResult7x19,
                    horizontalResult8x19,
                    horizontalResult9x19
                ]
            };
            return matrixColumns;
        }
    };

    // ******* GENERIC *******

    const generic11 = 1;
    const generic21 = 1;
    const generic31 = 1;
    const generic41 = 0;
    const generic51 = 0;
    const generic61 = 0;
    const generic71 = 1;
    const generic81 = 1;
    const generic91 = 1;

    const generic12 = 1;
    const generic22 = 0;
    const generic32 = 0;
    const generic42 = 1;
    const generic52 = 1;
    const generic62 = 0;
    const generic72 = 1;
    const generic82 = 1;
    const generic92 = 0;

    const generic13 = 0;
    const generic23 = 1;
    const generic33 = 0;
    const generic43 = 1;
    const generic53 = 0;
    const generic63 = 1;
    const generic73 = 1;
    const generic83 = 0;
    const generic93 = 1;

    const generic14 = 0;
    const generic24 = 0;
    const generic34 = 1;
    const generic44 = 0;
    const generic54 = 1;
    const generic64 = 1;
    const generic74 = 0;
    const generic84 = 1;
    const generic94 = 1;

    const columnGeneric1 = [generic11, generic21, generic31, generic41, generic51, generic61, generic71, generic81, generic91];
    const columnGeneric2 = [generic12, generic22, generic32, generic42, generic52, generic62, generic72, generic82, generic92];
    const columnGeneric3 = [generic13, generic23, generic33, generic43, generic53, generic63, generic73, generic83, generic93];
    const columnGeneric4 = [generic14, generic24, generic34, generic44, generic54, generic64, generic74, generic84, generic94];

    const genericColumnsArr = [columnGeneric1, columnGeneric2, columnGeneric3, columnGeneric4];

    // // column 1 states
    // const [generic11, setGeneric11] = useState<number | null>();
    // const [generic21, setGeneric21] = useState<number | null>();
    // const [generic31, setGeneric31] = useState<number | null>();
    // const [generic41, setGeneric41] = useState<number | null>();
    // const [generic51, setGeneric51] = useState<number | null>();
    // const [generic61, setGeneric61] = useState<number | null>();
    // const [generic71, setGeneric71] = useState<number | null>();
    // const [generic81, setGeneric81] = useState<number | null>();
    // const [generic91, setGeneric91] = useState<number | null>();

    // // column 2 states
    // const [generic12, setGeneric12] = useState<number | null>();
    // const [generic22, setGeneric22] = useState<number | null>();
    // const [generic32, setGeneric32] = useState<number | null>();
    // const [generic42, setGeneric42] = useState<number | null>();
    // const [generic52, setGeneric52] = useState<number | null>();
    // const [generic62, setGeneric62] = useState<number | null>();
    // const [generic72, setGeneric72] = useState<number | null>();
    // const [generic82, setGeneric82] = useState<number | null>();
    // const [generic92, setGeneric92] = useState<number | null>();

    // // column 3 states
    // const [generic13, setGeneric13] = useState<number | null>();
    // const [generic23, setGeneric23] = useState<number | null>();
    // const [generic33, setGeneric33] = useState<number | null>();
    // const [generic43, setGeneric43] = useState<number | null>();
    // const [generic53, setGeneric53] = useState<number | null>();
    // const [generic63, setGeneric63] = useState<number | null>();
    // const [generic73, setGeneric73] = useState<number | null>();
    // const [generic83, setGeneric83] = useState<number | null>();
    // const [generic93, setGeneric93] = useState<number | null>();

    // // column 4 states
    // const [generic14, setGeneric14] = useState<number | null>();
    // const [generic24, setGeneric24] = useState<number | null>();
    // const [generic34, setGeneric34] = useState<number | null>();
    // const [generic44, setGeneric44] = useState<number | null>();
    // const [generic54, setGeneric54] = useState<number | null>();
    // const [generic64, setGeneric64] = useState<number | null>();
    // const [generic74, setGeneric74] = useState<number | null>();
    // const [generic84, setGeneric84] = useState<number | null>();
    // const [generic94, setGeneric94] = useState<number | null>();

    //column 1 change handlers
    // const changeGeneric11 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric11 = parseInt(event.target.value);
    //     setGeneric11(numGeneric11);
    // };

    // const changeGeneric21 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric21 = parseInt(event.target.value);
    //     setGeneric21(numGeneric21);
    // };

    // const changeGeneric31 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric31 = parseInt(event.target.value);
    //     setGeneric31(numGeneric31);
    // };

    // const changeGeneric41 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric41 = parseInt(event.target.value);
    //     setGeneric41(numGeneric41);
    // };

    // const changeGeneric51 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric51 = parseInt(event.target.value);
    //     setGeneric51(numGeneric51);
    // };

    // const changeGeneric61 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric61 = parseInt(event.target.value);
    //     setGeneric61(numGeneric61);
    // };

    // const changeGeneric71 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric71 = parseInt(event.target.value);
    //     setGeneric71(numGeneric71);
    // };

    // const changeGeneric81 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric81 = parseInt(event.target.value);
    //     setGeneric81(numGeneric81);
    // };

    // const changeGeneric91 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric91 = parseInt(event.target.value);
    //     setGeneric91(numGeneric91);
    // };

    // //column 2 change handlers
    // const changeGeneric12 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric12 = parseInt(event.target.value);
    //     setGeneric12(numGeneric12);
    // };

    // const changeGeneric22 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric22 = parseInt(event.target.value);
    //     setGeneric22(numGeneric22);
    // };

    // const changeGeneric32 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric32 = parseInt(event.target.value);
    //     setGeneric32(numGeneric32);
    // };

    // const changeGeneric42 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric42 = parseInt(event.target.value);
    //     setGeneric42(numGeneric42);
    // };

    // const changeGeneric52 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric52 = parseInt(event.target.value);
    //     setGeneric52(numGeneric52);
    // };

    // const changeGeneric62 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric62 = parseInt(event.target.value);
    //     setGeneric62(numGeneric62);
    // };

    // const changeGeneric72 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric72 = parseInt(event.target.value);
    //     setGeneric72(numGeneric72);
    // };

    // const changeGeneric82 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric82 = parseInt(event.target.value);
    //     setGeneric82(numGeneric82);
    // };

    // const changeGeneric92 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric92 = parseInt(event.target.value);
    //     setGeneric92(numGeneric92);
    // };

    // //column 3 change handlers
    // const changeGeneric13 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric13 = parseInt(event.target.value);
    //     setGeneric13(numGeneric13);
    // };

    // const changeGeneric23 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric23 = parseInt(event.target.value);
    //     setGeneric23(numGeneric23);
    // };

    // const changeGeneric33 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric33 = parseInt(event.target.value);
    //     setGeneric33(numGeneric33);
    // };

    // const changeGeneric43 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric43 = parseInt(event.target.value);
    //     setGeneric43(numGeneric43);
    // };

    // const changeGeneric53 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric53 = parseInt(event.target.value);
    //     setGeneric53(numGeneric53);
    // };

    // const changeGeneric63 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric63 = parseInt(event.target.value);
    //     setGeneric63(numGeneric63);
    // };

    // const changeGeneric73 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric73 = parseInt(event.target.value);
    //     setGeneric73(numGeneric73);
    // };

    // const changeGeneric83 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric83 = parseInt(event.target.value);
    //     setGeneric83(numGeneric83);
    // };

    // const changeGeneric93 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric93 = parseInt(event.target.value);
    //     setGeneric93(numGeneric93);
    // };

    // //column 4 change handlers
    // const changeGeneric14 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric14 = parseInt(event.target.value);
    //     setGeneric14(numGeneric14);
    // };

    // const changeGeneric24 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric24 = parseInt(event.target.value);
    //     setGeneric24(numGeneric24);
    // };

    // const changeGeneric34 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric34 = parseInt(event.target.value);
    //     setGeneric34(numGeneric34);
    // };

    // const changeGeneric44 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric44 = parseInt(event.target.value);
    //     setGeneric44(numGeneric44);
    // };

    // const changeGeneric54 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric54 = parseInt(event.target.value);
    //     setGeneric54(numGeneric54);
    // };

    // const changeGeneric64 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric64 = parseInt(event.target.value);
    //     setGeneric64(numGeneric64);
    // };

    // const changeGeneric74 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric74 = parseInt(event.target.value);
    //     setGeneric74(numGeneric74);
    // };

    // const changeGeneric84 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric84 = parseInt(event.target.value);
    //     setGeneric84(numGeneric84);
    // };

    // const changeGeneric94 = (event: ChangeEvent<HTMLInputElement>) => {
    //     const numGeneric94 = parseInt(event.target.value);
    //     setGeneric94(numGeneric94);
    // };

    // const readGeneric = () => {
    //     const columnGeneric1 = [generic11, generic21, generic31, generic41, generic51, generic61, generic71, generic81, generic91];
    //     const columnGeneric2 = [generic12, generic22, generic32, generic42, generic52, generic62, generic72, generic82, generic92];
    //     const columnGeneric3 = [generic13, generic23, generic33, generic43, generic53, generic63, generic73, generic83, generic93];
    //     const columnGeneric4 = [generic14, generic24, generic34, generic44, generic54, generic64, generic74, generic84, generic94];

    //     // console.log('generic column 1: ', columnGeneric1);
    //     // console.log('generic column 2: ', columnGeneric2);
    //     // console.log('generic column 3: ', columnGeneric3);
    //     // console.log('generic column 4: ', columnGeneric4);

    //     return [columnGeneric1, columnGeneric2, columnGeneric3, columnGeneric4];
    // };

    //*********** VERTICAL CHECK ***********

    // matrix column 1 x generic columns states
    const [numberOfCoincidences1x1, setNumberOfCoincidences1x1] = useState(0);
    const [numberOfCoincidences1x2, setNumberOfCoincidences1x2] = useState(0);
    const [numberOfCoincidences1x3, setNumberOfCoincidences1x3] = useState(0);
    const [numberOfCoincidences1x4, setNumberOfCoincidences1x4] = useState(0);

    // matrix column 2 x generic columns states
    const [numberOfCoincidences2x1, setNumberOfCoincidences2x1] = useState(0);
    const [numberOfCoincidences2x2, setNumberOfCoincidences2x2] = useState(0);
    const [numberOfCoincidences2x3, setNumberOfCoincidences2x3] = useState(0);
    const [numberOfCoincidences2x4, setNumberOfCoincidences2x4] = useState(0);

    // matrix column 3 x generic columns states
    const [numberOfCoincidences3x1, setNumberOfCoincidences3x1] = useState(0);
    const [numberOfCoincidences3x2, setNumberOfCoincidences3x2] = useState(0);
    const [numberOfCoincidences3x3, setNumberOfCoincidences3x3] = useState(0);
    const [numberOfCoincidences3x4, setNumberOfCoincidences3x4] = useState(0);

    // matrix column 4 x generic columns states
    const [numberOfCoincidences4x1, setNumberOfCoincidences4x1] = useState(0);
    const [numberOfCoincidences4x2, setNumberOfCoincidences4x2] = useState(0);
    const [numberOfCoincidences4x3, setNumberOfCoincidences4x3] = useState(0);
    const [numberOfCoincidences4x4, setNumberOfCoincidences4x4] = useState(0);

    // matrix column 5 x generic columns states
    const [numberOfCoincidences5x1, setNumberOfCoincidences5x1] = useState(0);
    const [numberOfCoincidences5x2, setNumberOfCoincidences5x2] = useState(0);
    const [numberOfCoincidences5x3, setNumberOfCoincidences5x3] = useState(0);
    const [numberOfCoincidences5x4, setNumberOfCoincidences5x4] = useState(0);

    // matrix column 6 x generic columns states
    const [numberOfCoincidences6x1, setNumberOfCoincidences6x1] = useState(0);
    const [numberOfCoincidences6x2, setNumberOfCoincidences6x2] = useState(0);
    const [numberOfCoincidences6x3, setNumberOfCoincidences6x3] = useState(0);
    const [numberOfCoincidences6x4, setNumberOfCoincidences6x4] = useState(0);

    // matrix column 16 x generic columns states
    const [numberOfCoincidences16x1, setNumberOfCoincidences16x1] = useState(0);
    const [numberOfCoincidences16x2, setNumberOfCoincidences16x2] = useState(0);
    const [numberOfCoincidences16x3, setNumberOfCoincidences16x3] = useState(0);
    const [numberOfCoincidences16x4, setNumberOfCoincidences16x4] = useState(0);

    // matrix column 17 x generic columns states
    const [numberOfCoincidences17x1, setNumberOfCoincidences17x1] = useState(0);
    const [numberOfCoincidences17x2, setNumberOfCoincidences17x2] = useState(0);
    const [numberOfCoincidences17x3, setNumberOfCoincidences17x3] = useState(0);
    const [numberOfCoincidences17x4, setNumberOfCoincidences17x4] = useState(0);

    // matrix column 18 x generic columns states
    const [numberOfCoincidences18x1, setNumberOfCoincidences18x1] = useState(0);
    const [numberOfCoincidences18x2, setNumberOfCoincidences18x2] = useState(0);
    const [numberOfCoincidences18x3, setNumberOfCoincidences18x3] = useState(0);
    const [numberOfCoincidences18x4, setNumberOfCoincidences18x4] = useState(0);

    // matrix column 19 x generic columns states
    const [numberOfCoincidences19x1, setNumberOfCoincidences19x1] = useState(0);
    const [numberOfCoincidences19x2, setNumberOfCoincidences19x2] = useState(0);
    const [numberOfCoincidences19x3, setNumberOfCoincidences19x3] = useState(0);
    const [numberOfCoincidences19x4, setNumberOfCoincidences19x4] = useState(0);

    const setCoincidencesToZero = () => {
        setNumberOfCoincidences1x1(0);
        setNumberOfCoincidences1x2(0);
        setNumberOfCoincidences1x3(0);
        setNumberOfCoincidences1x4(0);

        setNumberOfCoincidences2x1(0);
        setNumberOfCoincidences2x2(0);
        setNumberOfCoincidences2x3(0);
        setNumberOfCoincidences2x4(0);

        setNumberOfCoincidences3x1(0);
        setNumberOfCoincidences3x2(0);
        setNumberOfCoincidences3x3(0);
        setNumberOfCoincidences3x4(0);

        setNumberOfCoincidences4x1(0);
        setNumberOfCoincidences4x2(0);
        setNumberOfCoincidences4x3(0);
        setNumberOfCoincidences4x4(0);

        setNumberOfCoincidences5x1(0);
        setNumberOfCoincidences5x2(0);
        setNumberOfCoincidences5x3(0);
        setNumberOfCoincidences5x4(0);

        setNumberOfCoincidences6x1(0);
        setNumberOfCoincidences6x2(0);
        setNumberOfCoincidences6x3(0);
        setNumberOfCoincidences6x4(0);

        setNumberOfCoincidences16x1(0);
        setNumberOfCoincidences16x2(0);
        setNumberOfCoincidences16x3(0);
        setNumberOfCoincidences16x4(0);

        setNumberOfCoincidences17x1(0);
        setNumberOfCoincidences17x2(0);
        setNumberOfCoincidences17x3(0);
        setNumberOfCoincidences17x4(0);

        setNumberOfCoincidences18x1(0);
        setNumberOfCoincidences18x2(0);
        setNumberOfCoincidences18x3(0);
        setNumberOfCoincidences18x4(0);

        setNumberOfCoincidences19x1(0);
        setNumberOfCoincidences19x2(0);
        setNumberOfCoincidences19x3(0);
        setNumberOfCoincidences19x4(0);
    };

    const column1Function = (
        column1Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 1 x 1
        if (column1Arr[0] === generic1Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic1Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic1Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic1Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic1Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic1Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic1Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic1Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic1Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x1((prevNumber) => prevNumber + 1);
        }

        // 1 x 2
        if (column1Arr[0] === generic2Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic2Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic2Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic2Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic2Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic2Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic2Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic2Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic2Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x2((prevNumber) => prevNumber + 1);
        }

        // 1 x 3
        if (column1Arr[0] === generic3Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic3Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic3Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic3Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic3Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic3Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic3Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic3Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic3Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x3((prevNumber) => prevNumber + 1);
        }

        // 1 x 4
        if (column1Arr[0] === generic4Arr[0] && column1Arr[0] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[1] === generic4Arr[1] && column1Arr[1] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[2] === generic4Arr[2] && column1Arr[2] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[3] === generic4Arr[3] && column1Arr[3] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[4] === generic4Arr[4] && column1Arr[4] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[5] === generic4Arr[5] && column1Arr[5] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[6] === generic4Arr[6] && column1Arr[6] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[7] === generic4Arr[7] && column1Arr[7] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
        if (column1Arr[8] === generic4Arr[8] && column1Arr[8] === 1) {
            setNumberOfCoincidences1x4((prevNumber) => prevNumber + 1);
        }
    };

    const column2Function = (
        column2Arr: (number | null | undefined)[],
        generic1Arr: (number | null | undefined)[],
        generic2Arr: (number | null | undefined)[],
        generic3Arr: (number | null | undefined)[],
        generic4Arr: (number | null | undefined)[]
    ) => {
        // 2 x 1
        if (column2Arr[0] === generic1Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic1Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic1Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic1Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic1Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic1Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic1Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic1Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic1Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x1((prevNumber) => prevNumber + 1);
        }

        // 2 x 2
        if (column2Arr[0] === generic2Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic2Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic2Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic2Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic2Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic2Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic2Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic2Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic2Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x2((prevNumber) => prevNumber + 1);
        }

        // 2 x 3
        if (column2Arr[0] === generic3Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic3Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic3Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic3Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic3Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic3Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic3Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic3Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic3Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x3((prevNumber) => prevNumber + 1);
        }

        // 2 x 4
        if (column2Arr[0] === generic4Arr[0] && column2Arr[0] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[1] === generic4Arr[1] && column2Arr[1] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[2] === generic4Arr[2] && column2Arr[2] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[3] === generic4Arr[3] && column2Arr[3] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[4] === generic4Arr[4] && column2Arr[4] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[5] === generic4Arr[5] && column2Arr[5] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[6] === generic4Arr[6] && column2Arr[6] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[7] === generic4Arr[7] && column2Arr[7] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
        if (column2Arr[8] === generic4Arr[8] && column2Arr[8] === 1) {
            setNumberOfCoincidences2x4((prevNumber) => prevNumber + 1);
        }
    };

    const doVerticalCheck = () => {
        setCoincidencesToZero();

        // let genericColumnsArr = readGeneric();
        let generic1Arr = genericColumnsArr[0];
        let generic2Arr = genericColumnsArr[1];
        let generic3Arr = genericColumnsArr[2];
        let generic4Arr = genericColumnsArr[3];

        const importedMatrixData = getMatrixFromHorizontal();

        if (importedMatrixData) {
            const column1Arr = importedMatrixData?.column1Arr;
            const column2Arr = importedMatrixData?.column2Arr;
            const column3Arr = importedMatrixData?.column3Arr;
            const column4Arr = importedMatrixData?.column4Arr;
            const column5Arr = importedMatrixData?.column5Arr;
            const column6Arr = importedMatrixData?.column6Arr;
            const column16Arr = importedMatrixData?.column16Arr;
            const column17Arr = importedMatrixData?.column17Arr;
            const column18Arr = importedMatrixData?.column18Arr;
            const column19Arr = importedMatrixData?.column19Arr;

            console.log('Generic columns: ', genericColumnsArr);
            console.log('Matrix columns: ', importedMatrixData);

            column1Function(column1Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);
            column2Function(column2Arr, generic1Arr, generic2Arr, generic3Arr, generic4Arr);

            // 3 x 1
            if (column3Arr[0] === generic1Arr[0] && column3Arr[0] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[1] === generic1Arr[1] && column3Arr[1] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[2] === generic1Arr[2] && column3Arr[2] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[3] === generic1Arr[3] && column3Arr[3] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[4] === generic1Arr[4] && column3Arr[4] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[5] === generic1Arr[5] && column3Arr[5] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[6] === generic1Arr[6] && column3Arr[6] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[7] === generic1Arr[7] && column3Arr[7] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[8] === generic1Arr[8] && column3Arr[8] === 1) {
                setNumberOfCoincidences3x1((prevNumber) => prevNumber + 1);
            }

            // 3 x 2
            if (column3Arr[0] === generic2Arr[0] && column3Arr[0] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[1] === generic2Arr[1] && column3Arr[1] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[2] === generic2Arr[2] && column3Arr[2] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[3] === generic2Arr[3] && column3Arr[3] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[4] === generic2Arr[4] && column3Arr[4] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[5] === generic2Arr[5] && column3Arr[5] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[6] === generic2Arr[6] && column3Arr[6] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[7] === generic2Arr[7] && column3Arr[7] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[8] === generic2Arr[8] && column3Arr[8] === 1) {
                setNumberOfCoincidences3x2((prevNumber) => prevNumber + 1);
            }

            // 3 x 3
            if (column3Arr[0] === generic3Arr[0] && column3Arr[0] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[1] === generic3Arr[1] && column3Arr[1] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[2] === generic3Arr[2] && column3Arr[2] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[3] === generic3Arr[3] && column3Arr[3] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[4] === generic3Arr[4] && column3Arr[4] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[5] === generic3Arr[5] && column3Arr[5] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[6] === generic3Arr[6] && column3Arr[6] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[7] === generic3Arr[7] && column3Arr[7] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[8] === generic3Arr[8] && column3Arr[8] === 1) {
                setNumberOfCoincidences3x3((prevNumber) => prevNumber + 1);
            }

            // 3 x 4
            if (column3Arr[0] === generic4Arr[0] && column3Arr[0] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[1] === generic4Arr[1] && column3Arr[1] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[2] === generic4Arr[2] && column3Arr[2] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[3] === generic4Arr[3] && column3Arr[3] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[4] === generic4Arr[4] && column3Arr[4] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[5] === generic4Arr[5] && column3Arr[5] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[6] === generic4Arr[6] && column3Arr[6] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[7] === generic4Arr[7] && column3Arr[7] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }
            if (column3Arr[8] === generic4Arr[8] && column3Arr[8] === 1) {
                setNumberOfCoincidences3x4((prevNumber) => prevNumber + 1);
            }

            // 4 x 1
            if (column4Arr[0] === generic1Arr[0] && column4Arr[0] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[1] === generic1Arr[1] && column4Arr[1] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[2] === generic1Arr[2] && column4Arr[2] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[3] === generic1Arr[3] && column4Arr[3] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[4] === generic1Arr[4] && column4Arr[4] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[5] === generic1Arr[5] && column4Arr[5] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[6] === generic1Arr[6] && column4Arr[6] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[7] === generic1Arr[7] && column4Arr[7] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[8] === generic1Arr[8] && column4Arr[8] === 1) {
                setNumberOfCoincidences4x1((prevNumber) => prevNumber + 1);
            }

            // 4 x 2
            if (column4Arr[0] === generic2Arr[0] && column4Arr[0] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[1] === generic2Arr[1] && column4Arr[1] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[2] === generic2Arr[2] && column4Arr[2] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[3] === generic2Arr[3] && column4Arr[3] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[4] === generic2Arr[4] && column4Arr[4] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[5] === generic2Arr[5] && column4Arr[5] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[6] === generic2Arr[6] && column4Arr[6] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[7] === generic2Arr[7] && column4Arr[7] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[8] === generic2Arr[8] && column4Arr[8] === 1) {
                setNumberOfCoincidences4x2((prevNumber) => prevNumber + 1);
            }

            // 4 x 3
            if (column4Arr[0] === generic3Arr[0] && column4Arr[0] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[1] === generic3Arr[1] && column4Arr[1] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[2] === generic3Arr[2] && column4Arr[2] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[3] === generic3Arr[3] && column4Arr[3] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[4] === generic3Arr[4] && column4Arr[4] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[5] === generic3Arr[5] && column4Arr[5] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[6] === generic3Arr[6] && column4Arr[6] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[7] === generic3Arr[7] && column4Arr[7] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[8] === generic3Arr[8] && column4Arr[8] === 1) {
                setNumberOfCoincidences4x3((prevNumber) => prevNumber + 1);
            }

            // 4 x 4
            if (column4Arr[0] === generic4Arr[0] && column4Arr[0] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[1] === generic4Arr[1] && column4Arr[1] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[2] === generic4Arr[2] && column4Arr[2] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[3] === generic4Arr[3] && column4Arr[3] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[4] === generic4Arr[4] && column4Arr[4] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[5] === generic4Arr[5] && column4Arr[5] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[6] === generic4Arr[6] && column4Arr[6] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[7] === generic4Arr[7] && column4Arr[7] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }
            if (column4Arr[8] === generic4Arr[8] && column4Arr[8] === 1) {
                setNumberOfCoincidences4x4((prevNumber) => prevNumber + 1);
            }

            // 5 x 1
            if (column5Arr[0] === generic1Arr[0] && column5Arr[0] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[1] === generic1Arr[1] && column5Arr[1] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[2] === generic1Arr[2] && column5Arr[2] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[3] === generic1Arr[3] && column5Arr[3] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[4] === generic1Arr[4] && column5Arr[4] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[5] === generic1Arr[5] && column5Arr[5] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[6] === generic1Arr[6] && column5Arr[6] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[7] === generic1Arr[7] && column5Arr[7] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[8] === generic1Arr[8] && column5Arr[8] === 1) {
                setNumberOfCoincidences5x1((prevNumber) => prevNumber + 1);
            }

            // 5 x 2
            if (column5Arr[0] === generic2Arr[0] && column5Arr[0] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[1] === generic2Arr[1] && column5Arr[1] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[2] === generic2Arr[2] && column5Arr[2] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[3] === generic2Arr[3] && column5Arr[3] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[4] === generic2Arr[4] && column5Arr[4] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[5] === generic2Arr[5] && column5Arr[5] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[6] === generic2Arr[6] && column5Arr[6] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[7] === generic2Arr[7] && column5Arr[7] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[8] === generic2Arr[8] && column5Arr[8] === 1) {
                setNumberOfCoincidences5x2((prevNumber) => prevNumber + 1);
            }

            // 5 x 3
            if (column5Arr[0] === generic3Arr[0] && column5Arr[0] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[1] === generic3Arr[1] && column5Arr[1] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[2] === generic3Arr[2] && column5Arr[2] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[3] === generic3Arr[3] && column5Arr[3] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[4] === generic3Arr[4] && column5Arr[4] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[5] === generic3Arr[5] && column5Arr[5] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[6] === generic3Arr[6] && column5Arr[6] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[7] === generic3Arr[7] && column5Arr[7] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[8] === generic3Arr[8] && column5Arr[8] === 1) {
                setNumberOfCoincidences5x3((prevNumber) => prevNumber + 1);
            }

            // 5 x 4
            if (column5Arr[0] === generic4Arr[0] && column5Arr[0] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[1] === generic4Arr[1] && column5Arr[1] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[2] === generic4Arr[2] && column5Arr[2] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[3] === generic4Arr[3] && column5Arr[3] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[4] === generic4Arr[4] && column5Arr[4] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[5] === generic4Arr[5] && column5Arr[5] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[6] === generic4Arr[6] && column5Arr[6] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[7] === generic4Arr[7] && column5Arr[7] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }
            if (column5Arr[8] === generic4Arr[8] && column5Arr[8] === 1) {
                setNumberOfCoincidences5x4((prevNumber) => prevNumber + 1);
            }

            // 6 x 1
            if (column6Arr[0] === generic1Arr[0] && column6Arr[0] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[1] === generic1Arr[1] && column6Arr[1] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[2] === generic1Arr[2] && column6Arr[2] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[3] === generic1Arr[3] && column6Arr[3] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[4] === generic1Arr[4] && column6Arr[4] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[5] === generic1Arr[5] && column6Arr[5] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[6] === generic1Arr[6] && column6Arr[6] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[7] === generic1Arr[7] && column6Arr[7] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[8] === generic1Arr[8] && column6Arr[8] === 1) {
                setNumberOfCoincidences6x1((prevNumber) => prevNumber + 1);
            }

            // 6 x 2
            if (column6Arr[0] === generic2Arr[0] && column6Arr[0] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[1] === generic2Arr[1] && column6Arr[1] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[2] === generic2Arr[2] && column6Arr[2] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[3] === generic2Arr[3] && column6Arr[3] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[4] === generic2Arr[4] && column6Arr[4] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[5] === generic2Arr[5] && column6Arr[5] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[6] === generic2Arr[6] && column6Arr[6] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[7] === generic2Arr[7] && column6Arr[7] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[8] === generic2Arr[8] && column6Arr[8] === 1) {
                setNumberOfCoincidences6x2((prevNumber) => prevNumber + 1);
            }

            // 6 x 3
            if (column6Arr[0] === generic3Arr[0] && column6Arr[0] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[1] === generic3Arr[1] && column6Arr[1] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[2] === generic3Arr[2] && column6Arr[2] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[3] === generic3Arr[3] && column6Arr[3] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[4] === generic3Arr[4] && column6Arr[4] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[5] === generic3Arr[5] && column6Arr[5] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[6] === generic3Arr[6] && column6Arr[6] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[7] === generic3Arr[7] && column6Arr[7] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[8] === generic3Arr[8] && column6Arr[8] === 1) {
                setNumberOfCoincidences6x3((prevNumber) => prevNumber + 1);
            }

            // 6 x 4
            if (column6Arr[0] === generic4Arr[0] && column6Arr[0] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[1] === generic4Arr[1] && column6Arr[1] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[2] === generic4Arr[2] && column6Arr[2] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[3] === generic4Arr[3] && column6Arr[3] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[4] === generic4Arr[4] && column6Arr[4] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[5] === generic4Arr[5] && column6Arr[5] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[6] === generic4Arr[6] && column6Arr[6] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[7] === generic4Arr[7] && column6Arr[7] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }
            if (column6Arr[8] === generic4Arr[8] && column6Arr[8] === 1) {
                setNumberOfCoincidences6x4((prevNumber) => prevNumber + 1);
            }

            // 16 x 1
            if (column16Arr[0] === generic1Arr[0] && column16Arr[0] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[1] === generic1Arr[1] && column16Arr[1] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[2] === generic1Arr[2] && column16Arr[2] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[3] === generic1Arr[3] && column16Arr[3] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[4] === generic1Arr[4] && column16Arr[4] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[5] === generic1Arr[5] && column16Arr[5] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[6] === generic1Arr[6] && column16Arr[6] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[7] === generic1Arr[7] && column16Arr[7] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[8] === generic1Arr[8] && column16Arr[8] === 1) {
                setNumberOfCoincidences16x1((prevNumber) => prevNumber + 1);
            }

            // 16 x 2
            if (column16Arr[0] === generic2Arr[0] && column16Arr[0] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[1] === generic2Arr[1] && column16Arr[1] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[2] === generic2Arr[2] && column16Arr[2] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[3] === generic2Arr[3] && column16Arr[3] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[4] === generic2Arr[4] && column16Arr[4] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[5] === generic2Arr[5] && column16Arr[5] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[6] === generic2Arr[6] && column16Arr[6] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[7] === generic2Arr[7] && column16Arr[7] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[8] === generic2Arr[8] && column16Arr[8] === 1) {
                setNumberOfCoincidences16x2((prevNumber) => prevNumber + 1);
            }

            // 16 x 3
            if (column16Arr[0] === generic3Arr[0] && column16Arr[0] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[1] === generic3Arr[1] && column16Arr[1] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[2] === generic3Arr[2] && column16Arr[2] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[3] === generic3Arr[3] && column16Arr[3] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[4] === generic3Arr[4] && column16Arr[4] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[5] === generic3Arr[5] && column16Arr[5] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[6] === generic3Arr[6] && column16Arr[6] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[7] === generic3Arr[7] && column16Arr[7] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[8] === generic3Arr[8] && column16Arr[8] === 1) {
                setNumberOfCoincidences16x3((prevNumber) => prevNumber + 1);
            }

            // 16 x 4
            if (column16Arr[0] === generic4Arr[0] && column16Arr[0] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[1] === generic4Arr[1] && column16Arr[1] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[2] === generic4Arr[2] && column16Arr[2] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[3] === generic4Arr[3] && column16Arr[3] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[4] === generic4Arr[4] && column16Arr[4] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[5] === generic4Arr[5] && column16Arr[5] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[6] === generic4Arr[6] && column16Arr[6] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[7] === generic4Arr[7] && column16Arr[7] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }
            if (column16Arr[8] === generic4Arr[8] && column16Arr[8] === 1) {
                setNumberOfCoincidences16x4((prevNumber) => prevNumber + 1);
            }

            // 17 x 1
            if (column17Arr[0] === generic1Arr[0] && column17Arr[0] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[1] === generic1Arr[1] && column17Arr[1] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[2] === generic1Arr[2] && column17Arr[2] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[3] === generic1Arr[3] && column17Arr[3] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[4] === generic1Arr[4] && column17Arr[4] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[5] === generic1Arr[5] && column17Arr[5] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[6] === generic1Arr[6] && column17Arr[6] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[7] === generic1Arr[7] && column17Arr[7] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[8] === generic1Arr[8] && column17Arr[8] === 1) {
                setNumberOfCoincidences17x1((prevNumber) => prevNumber + 1);
            }

            // 17 x 2
            if (column17Arr[0] === generic2Arr[0] && column17Arr[0] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[1] === generic2Arr[1] && column17Arr[1] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[2] === generic2Arr[2] && column17Arr[2] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[3] === generic2Arr[3] && column17Arr[3] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[4] === generic2Arr[4] && column17Arr[4] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[5] === generic2Arr[5] && column17Arr[5] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[6] === generic2Arr[6] && column17Arr[6] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[7] === generic2Arr[7] && column17Arr[7] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[8] === generic2Arr[8] && column17Arr[8] === 1) {
                setNumberOfCoincidences17x2((prevNumber) => prevNumber + 1);
            }

            // 17 x 3
            if (column17Arr[0] === generic3Arr[0] && column17Arr[0] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[1] === generic3Arr[1] && column17Arr[1] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[2] === generic3Arr[2] && column17Arr[2] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[3] === generic3Arr[3] && column17Arr[3] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[4] === generic3Arr[4] && column17Arr[4] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[5] === generic3Arr[5] && column17Arr[5] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[6] === generic3Arr[6] && column17Arr[6] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[7] === generic3Arr[7] && column17Arr[7] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[8] === generic3Arr[8] && column17Arr[8] === 1) {
                setNumberOfCoincidences17x3((prevNumber) => prevNumber + 1);
            }

            // 17 x 4
            if (column17Arr[0] === generic4Arr[0] && column17Arr[0] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[1] === generic4Arr[1] && column17Arr[1] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[2] === generic4Arr[2] && column17Arr[2] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[3] === generic4Arr[3] && column17Arr[3] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[4] === generic4Arr[4] && column17Arr[4] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[5] === generic4Arr[5] && column17Arr[5] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[6] === generic4Arr[6] && column17Arr[6] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[7] === generic4Arr[7] && column17Arr[7] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }
            if (column17Arr[8] === generic4Arr[8] && column17Arr[8] === 1) {
                setNumberOfCoincidences17x4((prevNumber) => prevNumber + 1);
            }

            // 18 x 1
            if (column18Arr[0] === generic1Arr[0] && column18Arr[0] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[1] === generic1Arr[1] && column18Arr[1] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[2] === generic1Arr[2] && column18Arr[2] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[3] === generic1Arr[3] && column18Arr[3] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[4] === generic1Arr[4] && column18Arr[4] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[5] === generic1Arr[5] && column18Arr[5] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[6] === generic1Arr[6] && column18Arr[6] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[7] === generic1Arr[7] && column18Arr[7] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[8] === generic1Arr[8] && column18Arr[8] === 1) {
                setNumberOfCoincidences18x1((prevNumber) => prevNumber + 1);
            }

            // 18 x 2
            if (column18Arr[0] === generic2Arr[0] && column18Arr[0] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[1] === generic2Arr[1] && column18Arr[1] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[2] === generic2Arr[2] && column18Arr[2] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[3] === generic2Arr[3] && column18Arr[3] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[4] === generic2Arr[4] && column18Arr[4] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[5] === generic2Arr[5] && column18Arr[5] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[6] === generic2Arr[6] && column18Arr[6] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[7] === generic2Arr[7] && column18Arr[7] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[8] === generic2Arr[8] && column18Arr[8] === 1) {
                setNumberOfCoincidences18x2((prevNumber) => prevNumber + 1);
            }

            // 18 x 3
            if (column18Arr[0] === generic3Arr[0] && column18Arr[0] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[1] === generic3Arr[1] && column18Arr[1] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[2] === generic3Arr[2] && column18Arr[2] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[3] === generic3Arr[3] && column18Arr[3] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[4] === generic3Arr[4] && column18Arr[4] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[5] === generic3Arr[5] && column18Arr[5] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[6] === generic3Arr[6] && column18Arr[6] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[7] === generic3Arr[7] && column18Arr[7] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[8] === generic3Arr[8] && column18Arr[8] === 1) {
                setNumberOfCoincidences18x3((prevNumber) => prevNumber + 1);
            }

            // 18 x 4
            if (column18Arr[0] === generic4Arr[0] && column18Arr[0] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[1] === generic4Arr[1] && column18Arr[1] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[2] === generic4Arr[2] && column18Arr[2] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[3] === generic4Arr[3] && column18Arr[3] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[4] === generic4Arr[4] && column18Arr[4] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[5] === generic4Arr[5] && column18Arr[5] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[6] === generic4Arr[6] && column18Arr[6] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[7] === generic4Arr[7] && column18Arr[7] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }
            if (column18Arr[8] === generic4Arr[8] && column18Arr[8] === 1) {
                setNumberOfCoincidences18x4((prevNumber) => prevNumber + 1);
            }

            // 19 x 1
            if (column19Arr[0] === generic1Arr[0] && column19Arr[0] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[1] === generic1Arr[1] && column19Arr[1] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[2] === generic1Arr[2] && column19Arr[2] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[3] === generic1Arr[3] && column19Arr[3] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[4] === generic1Arr[4] && column19Arr[4] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[5] === generic1Arr[5] && column19Arr[5] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[6] === generic1Arr[6] && column19Arr[6] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[7] === generic1Arr[7] && column19Arr[7] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[8] === generic1Arr[8] && column19Arr[8] === 1) {
                setNumberOfCoincidences19x1((prevNumber) => prevNumber + 1);
            }

            // 19 x 2
            if (column19Arr[0] === generic2Arr[0] && column19Arr[0] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[1] === generic2Arr[1] && column19Arr[1] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[2] === generic2Arr[2] && column19Arr[2] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[3] === generic2Arr[3] && column19Arr[3] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[4] === generic2Arr[4] && column19Arr[4] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[5] === generic2Arr[5] && column19Arr[5] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[6] === generic2Arr[6] && column19Arr[6] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[7] === generic2Arr[7] && column19Arr[7] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[8] === generic2Arr[8] && column19Arr[8] === 1) {
                setNumberOfCoincidences19x2((prevNumber) => prevNumber + 1);
            }

            // 19 x 3
            if (column19Arr[0] === generic3Arr[0] && column19Arr[0] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[1] === generic3Arr[1] && column19Arr[1] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[2] === generic3Arr[2] && column19Arr[2] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[3] === generic3Arr[3] && column19Arr[3] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[4] === generic3Arr[4] && column19Arr[4] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[5] === generic3Arr[5] && column19Arr[5] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[6] === generic3Arr[6] && column19Arr[6] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[7] === generic3Arr[7] && column19Arr[7] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[8] === generic3Arr[8] && column19Arr[8] === 1) {
                setNumberOfCoincidences19x3((prevNumber) => prevNumber + 1);
            }

            // 19 x 4
            if (column19Arr[0] === generic4Arr[0] && column19Arr[0] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[1] === generic4Arr[1] && column19Arr[1] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[2] === generic4Arr[2] && column19Arr[2] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[3] === generic4Arr[3] && column19Arr[3] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[4] === generic4Arr[4] && column19Arr[4] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[5] === generic4Arr[5] && column19Arr[5] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[6] === generic4Arr[6] && column19Arr[6] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[7] === generic4Arr[7] && column19Arr[7] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
            if (column19Arr[8] === generic4Arr[8] && column19Arr[8] === 1) {
                setNumberOfCoincidences19x4((prevNumber) => prevNumber + 1);
            }
        }
    };

    const importedData = getMatrixFromHorizontal();

    const isEven1x1 = numberOfCoincidences1x1 % 2 === 0;
    const resultText1x1 = isEven1x1 ? '0' : '1';

    const isEven1x2 = numberOfCoincidences1x2 % 2 === 0;
    const resultText1x2 = isEven1x2 ? '0' : '1';

    const isEven1x3 = numberOfCoincidences1x3 % 2 === 0;
    const resultText1x3 = isEven1x3 ? '0' : '1';

    const isEven1x4 = numberOfCoincidences1x4 % 2 === 0;
    const resultText1x4 = isEven1x4 ? '0' : '1';

    const isEven2x1 = numberOfCoincidences2x1 % 2 === 0;
    const resultText2x1 = isEven2x1 ? '0' : '1';

    const isEven2x2 = numberOfCoincidences2x2 % 2 === 0;
    const resultText2x2 = isEven2x2 ? '0' : '1';

    const isEven2x3 = numberOfCoincidences2x3 % 2 === 0;
    const resultText2x3 = isEven2x3 ? '0' : '1';

    const isEven2x4 = numberOfCoincidences2x4 % 2 === 0;
    const resultText2x4 = isEven2x4 ? '0' : '1';

    const isEven3x1 = numberOfCoincidences3x1 % 2 === 0;
    const resultText3x1 = isEven3x1 ? '0' : '1';

    const isEven3x2 = numberOfCoincidences3x2 % 2 === 0;
    const resultText3x2 = isEven3x2 ? '0' : '1';

    const isEven3x3 = numberOfCoincidences3x3 % 2 === 0;
    const resultText3x3 = isEven3x3 ? '0' : '1';

    const isEven3x4 = numberOfCoincidences3x4 % 2 === 0;
    const resultText3x4 = isEven3x4 ? '0' : '1';

    const isEven4x1 = numberOfCoincidences4x1 % 2 === 0;
    const resultText4x1 = isEven4x1 ? '0' : '1';

    const isEven4x2 = numberOfCoincidences4x2 % 2 === 0;
    const resultText4x2 = isEven4x2 ? '0' : '1';

    const isEven4x3 = numberOfCoincidences4x3 % 2 === 0;
    const resultText4x3 = isEven4x3 ? '0' : '1';

    const isEven4x4 = numberOfCoincidences4x4 % 2 === 0;
    const resultText4x4 = isEven4x4 ? '0' : '1';

    const isEven5x1 = numberOfCoincidences5x1 % 2 === 0;
    const resultText5x1 = isEven5x1 ? '0' : '1';

    const isEven5x2 = numberOfCoincidences5x2 % 2 === 0;
    const resultText5x2 = isEven5x2 ? '0' : '1';

    const isEven5x3 = numberOfCoincidences5x3 % 2 === 0;
    const resultText5x3 = isEven5x3 ? '0' : '1';

    const isEven5x4 = numberOfCoincidences5x4 % 2 === 0;
    const resultText5x4 = isEven5x4 ? '0' : '1';

    const isEven6x1 = numberOfCoincidences6x1 % 2 === 0;
    const resultText6x1 = isEven6x1 ? '0' : '1';

    const isEven6x2 = numberOfCoincidences6x2 % 2 === 0;
    const resultText6x2 = isEven6x2 ? '0' : '1';

    const isEven6x3 = numberOfCoincidences6x3 % 2 === 0;
    const resultText6x3 = isEven6x3 ? '0' : '1';

    const isEven6x4 = numberOfCoincidences6x4 % 2 === 0;
    const resultText6x4 = isEven6x4 ? '0' : '1';

    const isEven16x1 = numberOfCoincidences16x1 % 2 === 0;
    const resultText16x1 = isEven16x1 ? '0' : '1';

    const isEven16x2 = numberOfCoincidences16x2 % 2 === 0;
    const resultText16x2 = isEven16x2 ? '0' : '1';

    const isEven16x3 = numberOfCoincidences16x3 % 2 === 0;
    const resultText16x3 = isEven16x3 ? '0' : '1';

    const isEven16x4 = numberOfCoincidences16x4 % 2 === 0;
    const resultText16x4 = isEven16x4 ? '0' : '1';

    const isEven17x1 = numberOfCoincidences17x1 % 2 === 0;
    const resultText17x1 = isEven17x1 ? '0' : '1';

    const isEven17x2 = numberOfCoincidences17x2 % 2 === 0;
    const resultText17x2 = isEven17x2 ? '0' : '1';

    const isEven17x3 = numberOfCoincidences17x3 % 2 === 0;
    const resultText17x3 = isEven17x3 ? '0' : '1';

    const isEven17x4 = numberOfCoincidences17x4 % 2 === 0;
    const resultText17x4 = isEven17x4 ? '0' : '1';

    const isEven18x1 = numberOfCoincidences18x1 % 2 === 0;
    const resultText18x1 = isEven18x1 ? '0' : '1';

    const isEven18x2 = numberOfCoincidences18x2 % 2 === 0;
    const resultText18x2 = isEven18x2 ? '0' : '1';

    const isEven18x3 = numberOfCoincidences18x3 % 2 === 0;
    const resultText18x3 = isEven18x3 ? '0' : '1';

    const isEven18x4 = numberOfCoincidences18x4 % 2 === 0;
    const resultText18x4 = isEven18x4 ? '0' : '1';

    const isEven19x1 = numberOfCoincidences19x1 % 2 === 0;
    const resultText19x1 = isEven19x1 ? '0' : '1';

    const isEven19x2 = numberOfCoincidences19x2 % 2 === 0;
    const resultText19x2 = isEven19x2 ? '0' : '1';

    const isEven19x3 = numberOfCoincidences19x3 % 2 === 0;
    const resultText19x3 = isEven19x3 ? '0' : '1';

    const isEven19x4 = numberOfCoincidences19x4 % 2 === 0;
    const resultText19x4 = isEven19x4 ? '0' : '1';

    const verticalResultRow10 = [resultText1x1, resultText2x1, resultText3x1, resultText4x1, resultText5x1, resultText6x1, resultText16x1, resultText17x1, resultText18x1, resultText19x1];

    const verticalResultRow11 = [resultText1x2, resultText2x2, resultText3x2, resultText4x2, resultText5x2, resultText6x2, resultText16x2, resultText17x2, resultText18x2, resultText19x2];

    const verticalResultRow12 = [resultText1x3, resultText2x3, resultText3x3, resultText4x3, resultText5x3, resultText6x3, resultText16x3, resultText17x3, resultText18x3, resultText19x3];

    const verticalResultRow13 = [resultText1x4, resultText2x4, resultText3x4, resultText4x4, resultText5x4, resultText6x4, resultText16x4, resultText17x4, resultText18x4, resultText19x4];

    const passResultToLocal = () => {
        localStorage.setItem('verticalResultRow10', verticalResultRow10.join());
        localStorage.setItem('verticalResultRow11', verticalResultRow11.join());
        localStorage.setItem('verticalResultRow12', verticalResultRow12.join());
        localStorage.setItem('verticalResultRow13', verticalResultRow13.join());
    };

    const doVerticalChecksHandler = () => {
        doVerticalCheck();
        passResultToLocal();
    };

    return (
        <div className="vertical-check-wrapper">
            <p className="component-title">Vertical Checks</p>
            <div className="generic-matrix-wrapper">
                <div className="column-position">
                    <div className="column-position-item">P</div>
                    <div className="column-position-item">1</div>
                    <div className="column-position-item">2</div>
                    <div className="column-position-item">3</div>
                    <div className="column-position-item">4</div>
                </div>
                <div className="map-wrapper">
                    <div className="row-position">
                        {genericColumnsArr[0].map((element, index) => {
                            return (
                                <div key={index} className="row-position-item">
                                    {index + 1}
                                </div>
                            );
                        })}
                    </div>
                    {genericColumnsArr.map((column, index) => {
                        return (
                            <div key={index} className="generic-column">
                                {column.map((element, item) => {
                                    return (
                                        <div key={item} className="generic-item">
                                            {element}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                {/* <div className="generic-first-row generic-row">
                    <div className="row-position">1</div>
                    <div className="row-1">
                        <input className="generic-1-1" id="generic-1-1" name="generic-1-1" placeholder={'1-1'} onChange={changeGeneric11} />
                        <input className="generic-1-2" id="generic-1-2" name="generic-1-2" placeholder={'1-2'} onChange={changeGeneric12} />
                        <input className="generic-1-3" id="generic-1-3" name="generic-1-3" placeholder={'1-3'} onChange={changeGeneric13} />
                        <input className="generic-1-4" id="generic-1-4" name="generic-1-4" placeholder={'1-4'} onChange={changeGeneric14} />
                    </div>
                </div>
                <div className="generic-second-row generic-row">
                    <div className="row-position">2</div>
                    <div className="row-2">
                        <input className="generic-2-1" id="generic-2-1" name="generic-2-1" placeholder={'2-1'} onChange={changeGeneric21} />
                        <input className="generic-2-2" id="generic-2-2" name="generic-2-2" placeholder={'2-2'} onChange={changeGeneric22} />
                        <input className="generic-2-3" id="generic-2-3" name="generic-2-3" placeholder={'2-3'} onChange={changeGeneric23} />
                        <input className="generic-2-4" id="generic-2-4" name="generic-2-4" placeholder={'2-4'} onChange={changeGeneric24} />
                    </div>
                </div>
                <div className="generic-third-row generic-row">
                    <div className="row-position">3</div>
                    <div className="row-3">
                        <input className="generic-3-1" id="generic-3-1" name="generic-3-1" placeholder={'3-1'} onChange={changeGeneric31} />
                        <input className="generic-3-2" id="generic-3-2" name="generic-3-2" placeholder={'3-2'} onChange={changeGeneric32} />
                        <input className="generic-3-3" id="generic-3-3" name="generic-3-3" placeholder={'3-3'} onChange={changeGeneric33} />
                        <input className="generic-3-4" id="generic-3-4" name="generic-3-4" placeholder={'3-4'} onChange={changeGeneric34} />
                    </div>
                </div>
                <div className="generic-fourth-row generic-row">
                    <div className="row-position">4</div>
                    <div className="row-4">
                        <input className="generic-4-1" id="generic-4-1" name="generic-4-1" placeholder={'4-1'} onChange={changeGeneric41} />
                        <input className="generic-4-2" id="generic-4-2" name="generic-4-2" placeholder={'4-2'} onChange={changeGeneric42} />
                        <input className="generic-4-3" id="generic-4-3" name="generic-4-3" placeholder={'4-3'} onChange={changeGeneric43} />
                        <input className="generic-4-4" id="generic-4-4" name="generic-4-4" placeholder={'4-4'} onChange={changeGeneric44} />
                    </div>
                </div>
                <div className="generic-fifth-row generic-row">
                    <div className="row-position">5</div>
                    <div className="row-5">
                        <input className="generic-5-1" id="generic-5-1" name="generic-5-1" placeholder={'5-1'} onChange={changeGeneric51} />
                        <input className="generic-5-2" id="generic-5-2" name="generic-5-2" placeholder={'5-2'} onChange={changeGeneric52} />
                        <input className="generic-5-3" id="generic-5-3" name="generic-5-3" placeholder={'5-3'} onChange={changeGeneric53} />
                        <input className="generic-5-4" id="generic-5-4" name="generic-5-4" placeholder={'5-4'} onChange={changeGeneric54} />
                    </div>
                </div>
                <div className="generic-sixth-row generic-row">
                    <div className="row-position">6</div>
                    <div className="row-6">
                        <input className="generic-6-1" id="generic-6-1" name="generic-6-1" placeholder={'6-1'} onChange={changeGeneric61} />
                        <input className="generic-6-2" id="generic-6-2" name="generic-6-2" placeholder={'6-2'} onChange={changeGeneric62} />
                        <input className="generic-6-3" id="generic-6-3" name="generic-6-3" placeholder={'6-3'} onChange={changeGeneric63} />
                        <input className="generic-6-4" id="generic-6-4" name="generic-6-4" placeholder={'6-4'} onChange={changeGeneric64} />
                    </div>
                </div>
                <div className="generic-seventh-row generic-row">
                    <div className="row-position">7</div>
                    <div className="row-7">
                        <input className="generic-7-1" id="generic-7-1" name="generic-7-1" placeholder={'7-1'} onChange={changeGeneric71} />
                        <input className="generic-7-2" id="generic-7-2" name="generic-7-2" placeholder={'7-2'} onChange={changeGeneric72} />
                        <input className="generic-7-3" id="generic-7-3" name="generic-7-3" placeholder={'7-3'} onChange={changeGeneric73} />
                        <input className="generic-7-4" id="generic-7-4" name="generic-7-4" placeholder={'7-4'} onChange={changeGeneric74} />
                    </div>
                </div>
                <div className="generic-eighth-row generic-row">
                    <div className="row-position">8</div>
                    <div className="row-8">
                        <input className="generic-8-1" id="generic-8-1" name="generic-8-1" placeholder={'8-1'} onChange={changeGeneric81} />
                        <input className="generic-8-2" id="generic-8-2" name="generic-8-2" placeholder={'8-2'} onChange={changeGeneric82} />
                        <input className="generic-8-3" id="generic-8-3" name="generic-8-3" placeholder={'8-3'} onChange={changeGeneric83} />
                        <input className="generic-8-4" id="generic-8-4" name="generic-8-4" placeholder={'8-4'} onChange={changeGeneric84} />
                    </div>
                </div>
                <div className="generic-ninth-row generic-row">
                    <div className="row-position">9</div>
                    <div className="row-9">
                        <input className="generic-9-1" id="generic-9-1" name="generic-9-1" placeholder={'9-1'} onChange={changeGeneric91} />
                        <input className="generic-9-2" id="generic-9-2" name="generic-9-2" placeholder={'9-2'} onChange={changeGeneric92} />
                        <input className="generic-9-3" id="generic-9-3" name="generic-9-3" placeholder={'9-3'} onChange={changeGeneric93} />
                        <input className="generic-9-4" id="generic-9-4" name="generic-9-4" placeholder={'9-4'} onChange={changeGeneric94} />
                    </div>
                </div> */}
            </div>
            <div className="matrix-wrapper">
                <div className="column-position">
                    <div>Pos</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>
                <div className="matrix-first-row matrix-row">
                    <div className="row-position">1</div>
                    <div className="matrix-rows row-1">
                        <input className="textfield-1-1" id="text-1-1" name="text-1-1" placeholder={'1-1'} value={importedData?.column1Arr[0]} />
                        <input className="textfield-1-2" id="text-1-2" name="text-1-2" placeholder={'1-2'} value={importedData?.column2Arr[0]} />
                        <input className="textfield-1-3" id="text-1-3" name="text-1-3" placeholder={'1-3'} value={importedData?.column3Arr[0]} />
                        <input className="textfield-1-4" id="text-1-4" name="text-1-4" placeholder={'1-4'} value={importedData?.column4Arr[0]} />
                        <input className="textfield-1-5" id="text-1-5" name="text-1-5" placeholder={'1-5'} value={importedData?.column5Arr[0]} />
                        <input className="textfield-1-6" id="text-1-6" name="text-1-6" placeholder={'1-6'} value={importedData?.column6Arr[0]} />
                        <input className="textfield-1-16 external" id="text-1-16" name="text-1-16" placeholder={'1-h'} value={importedData?.column16Arr[0]} />
                        <input className="textfield-1-17 external" id="text-1-17" name="text-1-17" placeholder={'1-h'} value={importedData?.column17Arr[0]} />
                        <input className="textfield-1-18 external" id="text-1-18" name="text-1-18" placeholder={'1-h'} value={importedData?.column18Arr[0]} />
                        <input className="textfield-1-19 external" id="text-1-19" name="text-1-19" placeholder={'1-h'} value={importedData?.column19Arr[0]} />
                    </div>
                </div>
                <div className="matrix-second-row matrix-row">
                    <div className="row-position">2</div>
                    <div className="matrix-rows row-2">
                        <input className="textfield-2-1" id="text-2-1" name="text-2-1" placeholder={'2-1'} value={importedData?.column1Arr[1]} />
                        <input className="textfield-2-2" id="text-2-2" name="text-2-2" placeholder={'2-2'} value={importedData?.column2Arr[1]} />
                        <input className="textfield-2-3" id="text-2-3" name="text-2-3" placeholder={'2-3'} value={importedData?.column3Arr[1]} />
                        <input className="textfield-2-4" id="text-2-4" name="text-2-4" placeholder={'2-4'} value={importedData?.column4Arr[1]} />
                        <input className="textfield-2-5" id="text-2-5" name="text-2-5" placeholder={'2-5'} value={importedData?.column5Arr[1]} />
                        <input className="textfield-2-6" id="text-2-6" name="text-2-6" placeholder={'2-6'} value={importedData?.column6Arr[1]} />
                        <input className="textfield-2-16 external" id="text-2-16" name="text-2-16" placeholder={'2-h'} value={importedData?.column16Arr[1]} />
                        <input className="textfield-2-17 external" id="text-2-17" name="text-2-17" placeholder={'2-h'} value={importedData?.column17Arr[1]} />
                        <input className="textfield-2-18 external" id="text-2-18" name="text-2-18" placeholder={'2-h'} value={importedData?.column18Arr[1]} />
                        <input className="textfield-2-19 external" id="text-2-19" name="text-2-19" placeholder={'2-h'} value={importedData?.column19Arr[1]} />
                    </div>
                </div>
                <div className="matrix-third-row matrix-row">
                    <div className="row-position">3</div>
                    <div className="matrix-rows row-3">
                        <input className="textfield-3-1" id="text-3-1" name="text-3-1" placeholder={'3-1'} value={importedData?.column1Arr[2]} />
                        <input className="textfield-3-2" id="text-3-2" name="text-3-2" placeholder={'3-2'} value={importedData?.column2Arr[2]} />
                        <input className="textfield-3-3" id="text-3-3" name="text-3-3" placeholder={'3-3'} value={importedData?.column3Arr[2]} />
                        <input className="textfield-3-4" id="text-3-4" name="text-3-4" placeholder={'3-4'} value={importedData?.column4Arr[2]} />
                        <input className="textfield-3-5" id="text-3-5" name="text-3-5" placeholder={'3-5'} value={importedData?.column5Arr[2]} />
                        <input className="textfield-3-6" id="text-3-6" name="text-3-6" placeholder={'3-6'} value={importedData?.column6Arr[2]} />
                        <input className="textfield-3-16 external" id="text-3-16" name="text-3-16" placeholder={'3-h'} value={importedData?.column16Arr[2]} />
                        <input className="textfield-3-17 external" id="text-3-17" name="text-3-17" placeholder={'3-h'} value={importedData?.column17Arr[2]} />
                        <input className="textfield-3-18 external" id="text-3-18" name="text-3-18" placeholder={'3-h'} value={importedData?.column18Arr[2]} />
                        <input className="textfield-3-19 external" id="text-3-19" name="text-3-19" placeholder={'3-h'} value={importedData?.column19Arr[2]} />
                    </div>
                </div>
                <div className="matrix-fourth-row matrix-row">
                    <div className="row-position">4</div>
                    <div className="matrix-rows row-4">
                        <input className="textfield-4-1" id="text-4-1" name="text-4-1" placeholder={'4-1'} value={importedData?.column1Arr[3]} />
                        <input className="textfield-4-2" id="text-4-2" name="text-4-2" placeholder={'4-2'} value={importedData?.column2Arr[3]} />
                        <input className="textfield-4-3" id="text-4-3" name="text-4-3" placeholder={'4-3'} value={importedData?.column3Arr[3]} />
                        <input className="textfield-4-4" id="text-4-4" name="text-4-4" placeholder={'4-4'} value={importedData?.column4Arr[3]} />
                        <input className="textfield-4-5" id="text-4-5" name="text-4-5" placeholder={'4-5'} value={importedData?.column5Arr[3]} />
                        <input className="textfield-4-6" id="text-4-6" name="text-4-6" placeholder={'4-6'} value={importedData?.column6Arr[3]} />
                        <input className="textfield-4-16 external" id="text-4-16" name="text-4-16" placeholder={'4-h'} value={importedData?.column16Arr[3]} />
                        <input className="textfield-4-17 external" id="text-4-17" name="text-4-17" placeholder={'4-h'} value={importedData?.column17Arr[3]} />
                        <input className="textfield-4-18 external" id="text-4-18" name="text-4-18" placeholder={'4-h'} value={importedData?.column18Arr[3]} />
                        <input className="textfield-4-19 external" id="text-4-19" name="text-4-19" placeholder={'4-h'} value={importedData?.column19Arr[3]} />
                    </div>
                </div>
                <div className="matrix-fifth-row matrix-row">
                    <div className="row-position">5</div>
                    <div className="matrix-rows row-5">
                        <input className="textfield-5-1" id="text-5-1" name="text-5-1" placeholder={'5-1'} value={importedData?.column1Arr[4]} />
                        <input className="textfield-5-2" id="text-5-2" name="text-5-2" placeholder={'5-2'} value={importedData?.column2Arr[4]} />
                        <input className="textfield-5-3" id="text-5-3" name="text-5-3" placeholder={'5-3'} value={importedData?.column3Arr[4]} />
                        <input className="textfield-5-4" id="text-5-4" name="text-5-4" placeholder={'5-4'} value={importedData?.column4Arr[4]} />
                        <input className="textfield-5-5" id="text-5-5" name="text-5-5" placeholder={'5-5'} value={importedData?.column5Arr[4]} />
                        <input className="textfield-5-6" id="text-5-6" name="text-5-6" placeholder={'5-6'} value={importedData?.column6Arr[4]} />
                        <input className="textfield-5-16 external" id="text-5-16" name="text-5-16" placeholder={'5-h'} value={importedData?.column16Arr[4]} />
                        <input className="textfield-5-17 external" id="text-5-17" name="text-5-17" placeholder={'5-h'} value={importedData?.column17Arr[4]} />
                        <input className="textfield-5-18 external" id="text-5-18" name="text-5-18" placeholder={'5-h'} value={importedData?.column18Arr[4]} />
                        <input className="textfield-5-19 external" id="text-5-19" name="text-5-19" placeholder={'5-h'} value={importedData?.column19Arr[4]} />
                    </div>
                </div>
                <div className="matrix-sixth-row matrix-row">
                    <div className="row-position">6</div>
                    <div className="matrix-rows row-6">
                        <input className="textfield-6-1" id="text-6-1" name="text-6-1" placeholder={'6-1'} value={importedData?.column1Arr[5]} />
                        <input className="textfield-6-2" id="text-6-2" name="text-6-2" placeholder={'6-2'} value={importedData?.column2Arr[5]} />
                        <input className="textfield-6-3" id="text-6-3" name="text-6-3" placeholder={'6-3'} value={importedData?.column3Arr[5]} />
                        <input className="textfield-6-4" id="text-6-4" name="text-6-4" placeholder={'6-4'} value={importedData?.column4Arr[5]} />
                        <input className="textfield-6-5" id="text-6-5" name="text-6-5" placeholder={'6-5'} value={importedData?.column5Arr[5]} />
                        <input className="textfield-6-6" id="text-6-6" name="text-6-6" placeholder={'6-6'} value={importedData?.column6Arr[5]} />
                        <input className="textfield-6-16 external" id="text-6-16" name="text-6-16" placeholder={'6-h'} value={importedData?.column16Arr[5]} />
                        <input className="textfield-6-17 external" id="text-6-17" name="text-6-17" placeholder={'6-h'} value={importedData?.column17Arr[5]} />
                        <input className="textfield-6-18 external" id="text-6-18" name="text-6-18" placeholder={'6-h'} value={importedData?.column18Arr[5]} />
                        <input className="textfield-6-19 external" id="text-6-19" name="text-6-19" placeholder={'6-h'} value={importedData?.column19Arr[5]} />
                    </div>
                </div>
                <div className="matrix-seventh-row matrix-row">
                    <div className="row-position">7</div>
                    <div className="matrix-rows row-7">
                        <input className="textfield-7-1" id="text-7-1" name="text-7-1" placeholder={'7-1'} value={importedData?.column1Arr[6]} />
                        <input className="textfield-7-2" id="text-7-2" name="text-7-2" placeholder={'7-2'} value={importedData?.column2Arr[6]} />
                        <input className="textfield-7-3" id="text-7-3" name="text-7-3" placeholder={'7-3'} value={importedData?.column3Arr[6]} />
                        <input className="textfield-7-4" id="text-7-4" name="text-7-4" placeholder={'7-4'} value={importedData?.column4Arr[6]} />
                        <input className="textfield-7-5" id="text-7-5" name="text-7-5" placeholder={'7-5'} value={importedData?.column5Arr[6]} />
                        <input className="textfield-7-6" id="text-7-6" name="text-7-6" placeholder={'7-6'} value={importedData?.column6Arr[6]} />
                        <input className="textfield-7-16 external" id="text-7-16" name="text-7-16" placeholder={'7-h'} value={importedData?.column16Arr[6]} />
                        <input className="textfield-7-17 external" id="text-7-17" name="text-7-17" placeholder={'7-h'} value={importedData?.column17Arr[6]} />
                        <input className="textfield-7-18 external" id="text-7-18" name="text-7-18" placeholder={'7-h'} value={importedData?.column18Arr[6]} />
                        <input className="textfield-7-19 external" id="text-7-19" name="text-7-19" placeholder={'7-h'} value={importedData?.column19Arr[6]} />
                    </div>
                </div>
                <div className="matrix-eighth-row matrix-row">
                    <div className="row-position">8</div>
                    <div className="matrix-rows row-8">
                        <input className="textfield-8-1" id="text-8-1" name="text-8-1" placeholder={'8-1'} value={importedData?.column1Arr[7]} />
                        <input className="textfield-8-2" id="text-8-2" name="text-8-2" placeholder={'8-2'} value={importedData?.column2Arr[7]} />
                        <input className="textfield-8-3" id="text-8-3" name="text-8-3" placeholder={'8-3'} value={importedData?.column3Arr[7]} />
                        <input className="textfield-8-4" id="text-8-4" name="text-8-4" placeholder={'8-4'} value={importedData?.column4Arr[7]} />
                        <input className="textfield-8-5" id="text-8-5" name="text-8-5" placeholder={'8-5'} value={importedData?.column5Arr[7]} />
                        <input className="textfield-8-6" id="text-8-6" name="text-8-6" placeholder={'8-6'} value={importedData?.column6Arr[7]} />
                        <input className="textfield-8-16 external" id="text-8-16" name="text-8-16" placeholder={'8-h'} value={importedData?.column16Arr[7]} />
                        <input className="textfield-8-17 external" id="text-8-17" name="text-8-17" placeholder={'8-h'} value={importedData?.column17Arr[7]} />
                        <input className="textfield-8-18 external" id="text-8-18" name="text-8-18" placeholder={'8-h'} value={importedData?.column18Arr[7]} />
                        <input className="textfield-8-19 external" id="text-8-19" name="text-8-19" placeholder={'8-h'} value={importedData?.column19Arr[7]} />
                    </div>
                </div>
                <div className="matrix-ninth-row matrix-row">
                    <div className="row-position">9</div>
                    <div className="matrix-rows row-9">
                        <input className="textfield-9-1" id="text-9-1" name="text-9-1" placeholder={'9-1'} value={importedData?.column1Arr[8]} />
                        <input className="textfield-9-2" id="text-9-2" name="text-9-2" placeholder={'9-2'} value={importedData?.column2Arr[8]} />
                        <input className="textfield-9-3" id="text-9-3" name="text-9-3" placeholder={'9-3'} value={importedData?.column3Arr[8]} />
                        <input className="textfield-9-4" id="text-9-4" name="text-9-4" placeholder={'9-4'} value={importedData?.column4Arr[8]} />
                        <input className="textfield-9-5" id="text-9-5" name="text-9-5" placeholder={'9-5'} value={importedData?.column5Arr[8]} />
                        <input className="textfield-9-6" id="text-9-6" name="text-9-6" placeholder={'9-6'} value={importedData?.column6Arr[8]} />
                        <input className="textfield-9-16 external" id="text-9-16" name="text-9-16" placeholder={'9-h'} value={importedData?.column16Arr[8]} />
                        <input className="textfield-9-17 external" id="text-9-17" name="text-9-17" placeholder={'9-h'} value={importedData?.column17Arr[8]} />
                        <input className="textfield-9-18 external" id="text-9-18" name="text-9-18" placeholder={'9-h'} value={importedData?.column18Arr[8]} />
                        <input className="textfield-9-19 external" id="text-9-19" name="text-9-19" placeholder={'9-h'} value={importedData?.column19Arr[8]} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v1">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x1} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x1} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x1} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x1} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x1} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x1} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x1} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x1} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x1} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x1} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v2">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x2} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x2} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x2} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x2} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x2} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x2} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x2} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x2} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x2} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x2} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v3">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x3} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x3} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x3} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x3} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x3} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x3} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x3} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x3} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x3} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x3} />
                    </div>
                </div>
                <div className="matrix-v-row matrix-row">
                    <div className="row-position">v</div>
                    <div className="matrix-rows row-v4">
                        <input className="textfield-v-1 external-v" id="text-v-1" name="text-v-1" placeholder={'v-1'} value={resultText1x4} />
                        <input className="textfield-v-2 external-v" id="text-v-2" name="text-v-2" placeholder={'v-2'} value={resultText2x4} />
                        <input className="textfield-v-3 external-v" id="text-v-3" name="text-v-3" placeholder={'v-3'} value={resultText3x4} />
                        <input className="textfield-v-4 external-v" id="text-v-4" name="text-v-4" placeholder={'v-4'} value={resultText4x4} />
                        <input className="textfield-v-5 external-v" id="text-v-5" name="text-v-5" placeholder={'v-5'} value={resultText5x4} />
                        <input className="textfield-v-6 external-v" id="text-v-6" name="text-v-6" placeholder={'v-6'} value={resultText6x4} />
                        <input className="textfield-v-16 external-v" id="text-v-16" name="text-v-16" placeholder={'v-16'} value={resultText16x4} />
                        <input className="textfield-v-17 external-v" id="text-v-17" name="text-v-17" placeholder={'v-17'} value={resultText17x4} />
                        <input className="textfield-v-18 external-v" id="text-v-18" name="text-v-18" placeholder={'v-18'} value={resultText18x4} />
                        <input className="textfield-v-19 external-v" id="text-v-19" name="text-v-19" placeholder={'v-19'} value={resultText19x4} />
                    </div>
                </div>
                <button onClick={doVerticalChecksHandler}>Do vertical check</button>
            </div>
        </div>
    );
};

export default VerticalCheck;
