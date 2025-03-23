import { trimText } from './textUtils';

const trimTextDataSet = [
    {
        description: 'should return text as is when text is shorter than default length',
        input: 'Short text',
        length: undefined,
        expected: 'Short text'
    },
    {
        description: 'should trim text when longer than default length (200)',
        input: 'A'.repeat(250),
        length: undefined,
        expected: 'A'.repeat(200) + '...'
    },
    {
        description: 'should trim text with custom length',
        input: 'This is a test',
        length: 7,
        expected: 'This is...'
    },
    {
        description: 'should return empty string when input is empty',
        input: '',
        length: 10,
        expected: ''
    },
    {
        description: 'should handle text equal to max length',
        input: 'Exactly 10',
        length: 10,
        expected: 'Exactly 10'
    },
    {
        description: 'should handle text one character over max length',
        input: 'Exactly 10!',
        length: 10,
        expected: 'Exactly 10...'
    },
    {
        description: 'should handle falsy text',
        input: undefined as unknown as string,
        length: 10,
        expected: undefined as unknown as string
    }
];

describe('textUtils', () => {
    describe('trimText', () => {
        it.each(trimTextDataSet)(
            '$description',
            ({ input, length, expected }) => {
                expect(trimText(input, length)).toBe(expected);
            }
        );
    });
});