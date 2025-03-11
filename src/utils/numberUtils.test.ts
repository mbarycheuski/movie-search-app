import { checkNumberFractionalPart, getNumberWholePart } from './numberUtils';

const numberFractionalPartDataSet = [
    { input: 1.5, expected: true },
    { input: 0.1, expected: true },
    { input: 1, expected: false },
    { input: 0, expected: false },
    { input: -1.5, expected: true },
    { input: -0.1, expected: true },
    { input: -1, expected: false }
];

const numberWholePartDataSet = [
    { input: 1.5, expected: 1 },
    { input: 0.1, expected: 0 },
    { input: 1, expected: 1 },
    { input: 0, expected: 0 },
    { input: -1.5, expected: -2 },
    { input: -0.1, expected: -1 },
    { input: -1, expected: -1 }
];

describe('numberUtils', () => {
    describe('checkNumberFractionalPart', () => {
        it.each(numberFractionalPartDataSet)(
            'should return $expected for number $input',
            ({ input, expected }) => {
                expect(checkNumberFractionalPart(input)).toBe(expected);
            }
        );
    });

    describe('getNumberWholePart', () => {
        it.each(numberWholePartDataSet)(
            'should return $expected for number $input',
            ({ input, expected }) => {
                expect(getNumberWholePart(input)).toBe(expected);
            }
        );
    });
});
