import React, { useEffect, useState } from 'react';
import { horizontalMatrix, horizontalMatrixTransposed, verticalMatrix, verticalMatrixTransposed } from '../../data/HorizontalMatrix';
import _ from 'lodash';
import './Cycle.css';

const Cycle = () => {
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

            const messageRow1 = [...matrixRow1, ...horizontalResultRow1];
            const messageRow2 = [...matrixRow2, ...horizontalResultRow2];
            const messageRow3 = [...matrixRow3, ...horizontalResultRow3];
            const messageRow4 = [...matrixRow4, ...horizontalResultRow4];
            const messageRow5 = [...matrixRow5, ...horizontalResultRow5];
            const messageRow6 = [...matrixRow6, ...horizontalResultRow6];
            const messageRow7 = [...matrixRow7, ...horizontalResultRow7];
            const messageRow8 = [...matrixRow8, ...horizontalResultRow8];
            const messageRow9 = [...matrixRow9, ...horizontalResultRow9];

            //convert vertical checks rows to array of digits
            const verticalResultRow10 = Array.from(verticalResultRow10Str.replaceAll(',', ''), Number);
            const verticalResultRow11 = Array.from(verticalResultRow11Str.replaceAll(',', ''), Number);
            const verticalResultRow12 = Array.from(verticalResultRow12Str.replaceAll(',', ''), Number);
            const verticalResultRow13 = Array.from(verticalResultRow13Str.replaceAll(',', ''), Number);

            const matrixColumns = [
                messageRow1,
                messageRow2,
                messageRow3,
                messageRow4,
                messageRow5,
                messageRow6,
                messageRow7,
                messageRow8,
                messageRow9,
                verticalResultRow10,
                verticalResultRow11,
                verticalResultRow12,
                verticalResultRow13
            ];

            return matrixColumns;
        }
    };

    const [horizontalDecodeResult, setHorizontalDecodeResult] = useState<number[][]>([]);

    const [targetMatrix, setTargetMatrix] = useState<number[][]>([]);

    const [verticalTargetMatrix, setVerticalTargetMatrix] = useState<number[][]>([]);
    const [verticalDecodeResult, setVerticalDecodeResult] = useState<number[][]>([]);

    const [isMatrixReachable, setMatrixReachable] = useState(false);
    const [isVerticalMatrixReachable, setVerticalMatrixReachable] = useState(false);

    const readNoiseMatrix = () => {
        const noiseGetRow1Str = localStorage.getItem('noiseRow1');
        const noiseGetRow2Str = localStorage.getItem('noiseRow2');
        const noiseGetRow3Str = localStorage.getItem('noiseRow3');
        const noiseGetRow4Str = localStorage.getItem('noiseRow4');
        const noiseGetRow5Str = localStorage.getItem('noiseRow5');
        const noiseGetRow6Str = localStorage.getItem('noiseRow6');
        const noiseGetRow7Str = localStorage.getItem('noiseRow7');
        const noiseGetRow8Str = localStorage.getItem('noiseRow8');
        const noiseGetRow9Str = localStorage.getItem('noiseRow9');
        const noiseGetRow10Str = localStorage.getItem('noiseRow10');
        const noiseGetRow11Str = localStorage.getItem('noiseRow11');
        const noiseGetRow12Str = localStorage.getItem('noiseRow12');
        const noiseGetRow13Str = localStorage.getItem('noiseRow13');

        console.log('CALLED READ NOISE MATRIX');

        if (
            noiseGetRow1Str &&
            noiseGetRow2Str &&
            noiseGetRow3Str &&
            noiseGetRow4Str &&
            noiseGetRow5Str &&
            noiseGetRow6Str &&
            noiseGetRow7Str &&
            noiseGetRow8Str &&
            noiseGetRow9Str &&
            noiseGetRow10Str &&
            noiseGetRow11Str &&
            noiseGetRow12Str &&
            noiseGetRow13Str
        ) {
            const matrixResultRow1 = Array.from(noiseGetRow1Str.replaceAll(',', ''), Number);
            const matrixResultRow2 = Array.from(noiseGetRow2Str.replaceAll(',', ''), Number);
            const matrixResultRow3 = Array.from(noiseGetRow3Str.replaceAll(',', ''), Number);
            const matrixResultRow4 = Array.from(noiseGetRow4Str.replaceAll(',', ''), Number);
            const matrixResultRow5 = Array.from(noiseGetRow5Str.replaceAll(',', ''), Number);
            const matrixResultRow6 = Array.from(noiseGetRow6Str.replaceAll(',', ''), Number);
            const matrixResultRow7 = Array.from(noiseGetRow7Str.replaceAll(',', ''), Number);
            const matrixResultRow8 = Array.from(noiseGetRow8Str.replaceAll(',', ''), Number);
            const matrixResultRow9 = Array.from(noiseGetRow9Str.replaceAll(',', ''), Number);
            const matrixResultRow10 = Array.from(noiseGetRow10Str.replaceAll(',', ''), Number);
            const matrixResultRow11 = Array.from(noiseGetRow11Str.replaceAll(',', ''), Number);
            const matrixResultRow12 = Array.from(noiseGetRow12Str.replaceAll(',', ''), Number);
            const matrixResultRow13 = Array.from(noiseGetRow13Str.replaceAll(',', ''), Number);

            setTargetMatrix([
                matrixResultRow1,
                matrixResultRow2,
                matrixResultRow3,
                matrixResultRow4,
                matrixResultRow5,
                matrixResultRow6,
                matrixResultRow7,
                matrixResultRow8,
                matrixResultRow9,
                matrixResultRow10,
                matrixResultRow11,
                matrixResultRow12,
                matrixResultRow13
            ]);
        }
    };

    useEffect(() => {
        readNoiseMatrix();
    }, []);

    const findNumberOfCoincidences = (matrix1: number[], matrix2: number[]) => {
        let counter = 0;

        for (let i = 0; i < matrix1.length; i++) {
            if (matrix1[i] === matrix2[i] && matrix1[i] === 1) {
                counter++;
            }
        }

        return counter;
    };

    const doHorizontalDecode = () => {
        let parityCheckResults = [];

        for (let i = 0; i < targetMatrix.length; i++) {
            const targetMatrixRow = targetMatrix[i];

            let resultArr = [];

            for (let j = 0; j < horizontalMatrix.length; j++) {
                const horizontalMatrixRow = horizontalMatrix[j];

                const targetAndHorizontal = findNumberOfCoincidences(targetMatrixRow, horizontalMatrixRow);

                const isEven = targetAndHorizontal % 2 === 0;
                const parityCheckResult = isEven ? 0 : 1;

                resultArr.push(parityCheckResult);
            }

            parityCheckResults.push(resultArr);
        }

        console.log('parity results array: ', parityCheckResults);
        setHorizontalDecodeResult(parityCheckResults);
        setMatrixReachable(true);
    };

    const findSyndromFunc = (horizontalChecksResult: number[][], horizontalMatrixTransposed: number[][]) => {
        for (let i = 0; i < horizontalChecksResult.length; i++) {
            const horizontalChecksResultElement = horizontalChecksResult[i];
            const isEqualToZeroArray = _.isEqual(horizontalChecksResultElement, [0, 0, 0, 0]);

            if (!isEqualToZeroArray) {
                for (let j = 0; j < horizontalMatrixTransposed.length; j++) {
                    const horizontalMatrixTransposedElement = horizontalMatrixTransposed[j];

                    const isEqualHorizotalElementToTransposed = _.isEqual(horizontalChecksResultElement, horizontalMatrixTransposedElement);

                    if (isEqualHorizotalElementToTransposed) {
                        if (targetMatrix[i][j] === 1) {
                            let targetMatrixToEdit = _.clone(targetMatrix);
                            targetMatrixToEdit[i][j] = 0;

                            setTargetMatrix(targetMatrixToEdit);
                        } else {
                            let targetMatrixToEdit = _.clone(targetMatrix);
                            targetMatrixToEdit[i][j] = 1;

                            setTargetMatrix(targetMatrixToEdit);
                        }
                    }
                }
            } else {
                console.log('row ', i + 1, ' is correct');
            }
        }
    };

    const fixErrorsHorizontal = () => {
        findSyndromFunc(horizontalDecodeResult, horizontalMatrixTransposed);
    };

    const getVerticalTargetMatrix = (targetMatrix: number[][]) => {
        const targetCloneForVertical = _.clone(targetMatrix);
        const result: any = _.zip.apply(_, targetCloneForVertical);
        setVerticalTargetMatrix(result);
        console.log('vertical target matrix: ', result);
    };

    const callVerticalTargetMatrix = () => {
        getVerticalTargetMatrix(targetMatrix);
    };

    const findNumberOfCoincidencesVertical = (matrix1: number[], matrix2: number[]) => {
        let counter = 0;

        for (let i = 0; i < matrix1.length; i++) {
            if (matrix1[i] === matrix2[i] && matrix1[i] === 1) {
                counter++;
            }
        }

        return counter;
    };

    const doVerticalDecode = () => {
        let parityCheckResults = [];

        for (let i = 0; i < verticalTargetMatrix.length; i++) {
            const targetMatrixColumn = verticalTargetMatrix[i];

            let resultArr = [];

            for (let j = 0; j < verticalMatrix.length; j++) {
                const verticalMatrixColumn = verticalMatrix[j];

                const targetAndVertical = findNumberOfCoincidencesVertical(targetMatrixColumn, verticalMatrixColumn);

                const isEven = targetAndVertical % 2 === 0;
                const parityCheckResult = isEven ? 0 : 1;

                resultArr.push(parityCheckResult);
            }
            parityCheckResults.push(resultArr);
        }

        console.log('parity vertical check results array: ', parityCheckResults);
        setVerticalDecodeResult(parityCheckResults);
        setVerticalMatrixReachable(true);
    };

    const findSyndromFuncVertical = (verticalDecodeResult: number[][], verticalMatrixTransposed: number[][]) => {
        for (let i = 0; i < verticalDecodeResult.length; i++) {
            const verticalChecksResultElement = verticalDecodeResult[i];
            const isEqualToZeroArray = _.isEqual(verticalChecksResultElement, [0, 0, 0, 0]);

            if (!isEqualToZeroArray) {
                for (let j = 0; j < verticalMatrixTransposed.length; j++) {
                    const verticalMatrixTransposedElement = verticalMatrixTransposed[j];

                    const isEqualVerticalElementToTransposed = _.isEqual(verticalChecksResultElement, verticalMatrixTransposedElement);

                    if (isEqualVerticalElementToTransposed) {
                        if (verticalTargetMatrix[i][j] === 1) {
                            let verticalTargetMatrixToEdit = _.clone(verticalTargetMatrix);
                            verticalTargetMatrixToEdit[i][j] = 0;

                            setVerticalTargetMatrix(verticalTargetMatrixToEdit);
                        } else {
                            let verticalTargetMatrixToEdit = _.clone(verticalTargetMatrix);
                            verticalTargetMatrixToEdit[i][j] = 1;

                            setVerticalTargetMatrix(verticalTargetMatrixToEdit);
                        }
                    }
                }
            } else {
                console.log('column ', i + 1, ' is correct');
            }
        }
    };

    const fixErrorsVertical = () => {
        findSyndromFuncVertical(verticalDecodeResult, verticalMatrixTransposed);
    };

    const transposeFromVerticalToTarget = (verticalTargetMatrix: number[][]) => {
        const targetCloneForVerticalTranspose = _.clone(verticalTargetMatrix);
        const result: any = _.zip.apply(_, targetCloneForVerticalTranspose);
        setTargetMatrix(result);
    };

    const callTransposeBack = () => {
        transposeFromVerticalToTarget(verticalTargetMatrix);
    };

    const emptyHorizontal = [0, 0, 0, 0];
    const emptyVertical = [0, 0, 0, 0];

    const checkWasMessageIsRenewed = () => {
        const horizontalRes = _.clone(horizontalDecodeResult);
        const verticalRes = _.clone(verticalDecodeResult);

        if (
            _.isEqual(horizontalRes[0], emptyHorizontal) &&
            _.isEqual(horizontalRes[1], emptyHorizontal) &&
            _.isEqual(horizontalRes[2], emptyHorizontal) &&
            _.isEqual(horizontalRes[3], emptyHorizontal) &&
            _.isEqual(horizontalRes[4], emptyHorizontal) &&
            _.isEqual(horizontalRes[5], emptyHorizontal) &&
            _.isEqual(horizontalRes[6], emptyHorizontal) &&
            _.isEqual(horizontalRes[7], emptyHorizontal) &&
            _.isEqual(horizontalRes[8], emptyHorizontal) &&
            _.isEqual(horizontalRes[9], emptyHorizontal) &&
            _.isEqual(horizontalRes[10], emptyHorizontal) &&
            _.isEqual(horizontalRes[11], emptyHorizontal) &&
            _.isEqual(horizontalRes[12], emptyHorizontal) &&
            _.isEqual(verticalRes[1], emptyVertical) &&
            _.isEqual(verticalRes[2], emptyVertical) &&
            _.isEqual(verticalRes[3], emptyVertical) &&
            _.isEqual(verticalRes[4], emptyVertical) &&
            _.isEqual(verticalRes[5], emptyVertical) &&
            _.isEqual(verticalRes[6], emptyVertical) &&
            _.isEqual(verticalRes[7], emptyVertical) &&
            _.isEqual(verticalRes[8], emptyVertical) &&
            _.isEqual(verticalRes[9], emptyVertical)
        ) {
            window.alert('Everything is clear');
        }
    };

    const compareMessageAndResult = () => {
        const matrixBeforeNoise = getMatrixData();
        const isMessageEqualToDecode = _.isEqual(matrixBeforeNoise, targetMatrix);
        console.log('matrix before noise: ', matrixBeforeNoise);
        console.log('target matrix: ', targetMatrix);
        console.log(isMessageEqualToDecode);
        const alertMessage = isMessageEqualToDecode ? 'Message is equal to decoding result' : 'Messge is NOT equal to decode result';
        window.alert(alertMessage);
    };

    return (
        <div className="some-cycle">
            <div className="buttons-container">
                <div className="buttons-step-by-step">
                    <p>Do step-by-step</p>
                    <button onClick={doHorizontalDecode}>Do horizontal checks</button>
                    <button onClick={fixErrorsHorizontal}>Fix errors by Horizontal</button>
                    <button onClick={doHorizontalDecode}>Do horizontal checks again</button>
                    <button onClick={callVerticalTargetMatrix}>Get values for vertical decoding</button>
                    <button onClick={doVerticalDecode}>Do verical checks</button>
                    <button onClick={fixErrorsVertical}>Fix errors by Vertical</button>
                    <button onClick={doVerticalDecode}>Do verical checks again</button>
                    <button onClick={callTransposeBack}>Update target matrix state</button>
                    <button onClick={checkWasMessageIsRenewed}>Check if message was renewed</button>
                </div>
                <div className="do-in-one">
                    <button id="do-in-one" onClick={readNoiseMatrix}>
                        Get new data
                    </button>
                    <button onClick={compareMessageAndResult}>Compare message and decoding result</button>
                </div>
            </div>
            {isMatrixReachable && (
                <div className="cycle-wrapper">
                    <div className="final-matrix-wrapper">
                        <div className="column-numbers-wrapper matrix-row">
                            <div className="column-number">Pos</div>
                            {targetMatrix[0].map((element, index) => {
                                return (
                                    <div key={index} className="column-number">
                                        {index + 1}
                                    </div>
                                );
                            })}
                        </div>
                        {targetMatrix.map((row, index) => {
                            return (
                                <div key={index} className="matrix-row">
                                    <div className="matrix-element column-number">{index + 1}</div>
                                    {row.map((element, zalupa) => {
                                        return (
                                            <div key={zalupa} className="matrix-element">
                                                {element}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <div className="horizontal-matrix-wrapper">
                        <div className="column-numbers-wrapper matrix-row">
                            {horizontalDecodeResult[0].map((element, index) => {
                                return (
                                    <div key={index} className="column-number">
                                        h-d
                                    </div>
                                );
                            })}
                        </div>
                        {horizontalDecodeResult.map((row, index) => {
                            return (
                                <div key={index} className="matrix-row">
                                    {row.map((element, item) => {
                                        return (
                                            <div key={item} className="matrix-element">
                                                {element}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {isVerticalMatrixReachable && (
                <div className="vertical-decode-wrapper">
                    <div className="row-numbers-wrapper">
                        {verticalDecodeResult[0].map((element, index) => {
                            return (
                                <div key={index} className="row-number">
                                    v-d
                                </div>
                            );
                        })}
                    </div>
                    {verticalDecodeResult.map((column, index) => {
                        return (
                            <div key={index} className="vertical-column">
                                {column.map((element, item) => {
                                    return (
                                        <div key={item} className="vertical-element">
                                            {element}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cycle;
