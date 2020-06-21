import {push, splice, unshift, shift} from './array';

describe('array', () => {
    describe('push', () => {
        it('should return a new array with the element added to the end', () => {
            const originalArray = [1, 2, 3, 4];
            const newArray = push(originalArray, 5);
            expect(newArray[originalArray.length]).toEqual(5);
            expect(newArray === originalArray).toEqual(false);
            expect(originalArray.length).toEqual(4);
        });
    });

    describe('unshift', () => {
        it('should return a new array with the element added at the beginning', () => {
            const originalArray = [1, 2, 3, 4];
            const newArray = unshift(originalArray, 0);
            expect(newArray[0]).toEqual(0);
            expect(newArray === originalArray).toEqual(false);
            expect(originalArray.length).toEqual(4);
            expect(newArray.length).toEqual(originalArray.length + 1);
        });
    });

    describe('splice', () => {
        it('should return a cloned array without arguments', () => {
            const originalArray = [1, 2, 3, 4];
            const newArray = splice(originalArray);
            expect(newArray === originalArray).toEqual(false);
            [1, 2, 3, 4].forEach(val => expect((val, i) => expect(val === originalArray[i] === newArray[i]).toEqual(true)));
            expect(newArray.length).toEqual(originalArray.length);
        });

        it('should return a cloned array when one argument is sent', () => {
            const originalArray = [1, 2, 3, 4];
            const newArray = splice(originalArray, 1);
            expect(newArray === originalArray).toEqual(false);
            [1, 2, 3, 4].forEach(val => expect((val, i) => expect(val === originalArray[i] === newArray[i]).toEqual(true)));
            expect(newArray.length).toEqual(originalArray.length);
        });

        it('should remove n elements from an array from index', () => {
            const originalArray = [1, 2, 3, 4];
            const expectedArray = [1, 4];
            const startingIndex = 1;
            const elementsToRemove = 2;
            const newArray = splice(originalArray, startingIndex, elementsToRemove);
            newArray.forEach((val, i) => expect(val).toEqual(expectedArray[i]));
        });

        it('should replace n elements from an array from index', () => {
            const originalArray = [1, 2, 3, 4];
            const expectedArray = [1, 5, 6, 4];
            const startingIndex = 1;
            const elementsToRemove = 2;
            const elementsToAdd = [5, 6];
            const newArray = splice(originalArray, startingIndex, elementsToRemove, ...elementsToAdd);
            newArray.forEach((val, i) => expect(val).toEqual(expectedArray[i]));
        });
    });

    describe('shift', () => {
        it('should return an array with the 0th element removed', () => {
            const originalArray = [1, 2, 3, 4, 5];
            const expectedArray = [2, 3, 4, 5];
            const newArray = shift(originalArray);
            expect(originalArray === newArray).toEqual(false);
            expect(newArray.length).toEqual(expectedArray.length);
            newArray.forEach((val, i) => expect(val).toEqual(expectedArray[i]));
        });
    });
});