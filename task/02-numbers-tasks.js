'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates          *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math    *
 *                                                                                          *
 ********************************************************************************************/



function getRectangleArea(width, height) {
    return width*height;
}

function getCicleCircumference(radius) {
    return 2*Math.PI*radius;
}

function getAverage(value1, value2) {
   return value1/2 + value2/2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
   return Math.sqrt((x1-x2)**2 + (y1-y2)**2);
}


function getLinearEquationRoot(a, b) {
    return -b/a;
}


/**
 * Returns an angle (in radians) between two vectors given by xi and yi, coordinates in Cartesian plane
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
    throw new Error('Not implemented');
}

function getLastDigit(value) {
    return value%10;
}

function parseNumberFromString(value) {
    return Number(value);
}

function getParallelipidedDiagonal(a,b,c) {
    return Math.sqrt(a**2 + b**2 + c**2);
}

function roundToPowerOfTen(num, pow) {
    return Math.round(num /10**pow)*10**pow;
}

function isPrime(n) {
    for(let i = 2; i < n; i++){
        if (n%i===0){
            return false;
        }
    }
    return true;
}

function toNumber(value, def) {
    return isNaN(Number(value)) ?def :Number(value);
}

module.exports = {
    getRectangleArea: getRectangleArea,
    getCicleCircumference: getCicleCircumference,
    getAverage: getAverage,
    getDistanceBetweenPoints: getDistanceBetweenPoints,
    getLinearEquationRoot: getLinearEquationRoot,
    getAngleBetweenVectors: getAngleBetweenVectors,
    getLastDigit: getLastDigit,
    parseNumberFromString: parseNumberFromString,
    getParallelipidedDiagonal: getParallelipidedDiagonal,
    roundToPowerOfTen: roundToPowerOfTen,
    isPrime: isPrime,
    toNumber: toNumber
};
