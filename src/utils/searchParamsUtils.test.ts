import { setOrDeleteSearchParam } from './searchParamsUtils';

describe('setOrDeleteSearchParam', () => {
    let params: URLSearchParams;

    beforeEach(() => {
        params = new URLSearchParams();
    });

    it('should set a search param when value is provided', () => {
        const key = 'key1';
        const value = 'myValue';

        setOrDeleteSearchParam(params, key, value);

        expect(params.get(key)).toBe(value);
    });

    it('should delete a search param when value is undefined', () => {
        const key = 'key2';
        const value = 'myValue';
        params.set(key, value);

        setOrDeleteSearchParam(params, key);

        expect(params.has(key)).toBe(false);
    });

    it('should set a search param when value is a number', () => {
        const key = 'key3';
        const value = 123;

        setOrDeleteSearchParam(params, key, value);

        expect(params.get(key)).toBe(value.toString());
    });
});