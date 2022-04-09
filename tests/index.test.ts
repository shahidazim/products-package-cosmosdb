import { add } from '../src/index';

describe('testing index file', () => {
    test('test with zero', () => {
        expect(add(0, 0)).toBe(0);
    });
});
