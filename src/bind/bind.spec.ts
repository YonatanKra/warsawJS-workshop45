import bind from './bind';

describe('bind', () => {
    it('should call the original function with arguments', () => {
        const originalFunction = jest.fn();
        const boundArguments = [1,2,3];
        const boundFunc = bind(originalFunction, {}, ...boundArguments);
        const arg1 = 1;
        const arg2 = 2;
        boundFunc(arg1, arg2);
        expect(originalFunction).toHaveBeenCalledWith(arg1, arg2, ...boundArguments);
    });

   it('should return a function that handles the correct "this"', () => {
       const ctx = {};
       const boundFunc = bind(function(){return this;}, ctx);
       expect(boundFunc()).toBe(ctx);
   });
});