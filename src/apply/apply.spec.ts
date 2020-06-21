import {apply} from './apply';

describe('apply', () => {
    it('should call the original function with arguments and return its result', () => {
        const returnedValue = {};
        const originalFunction = jest.fn().mockReturnValue(returnedValue);
        const appliedArguments = [1,2,3];
        const result = apply(originalFunction, {}, ...appliedArguments);

        expect(originalFunction).toHaveBeenCalledWith(...appliedArguments);
        expect(result).toEqual(returnedValue);
    });
});