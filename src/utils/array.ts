/**
 * @description Returns a clone of arr and adds item to its end
 * @param arr
 * @param item
 */
export function push(arr, item) {
    return [...arr, item];
}

/**
 * @description Returns a clone of arr and adds item to its beginning
 * @param arr
 * @param item
 */
export function unshift(arr, item) {
    return [item, ...arr];
}

/**
 * @description Returns a clone of arr and replaces elementsToRemove from startIndex with the replacements
 * @param arr
 * @param startingIndex
 * @param elementsToRemove
 * @param replacements
 */
export function splice(arr: Array<any>, startingIndex?: number, elementsToRemove?: number, ...replacements) {
    const removalRange = [startingIndex, startingIndex + elementsToRemove - 1];
    return arr.map((val, i) => (i >= removalRange[0] && i <= removalRange[1]) ? replacements[i - removalRange[0]]??undefined : val)
        .filter(val => val??false);
}

/**
 * @description Returns a clone of arr and removes the first element of the array
 * @param first
 * @param arr
 */
export function shift([first, ...arr]: Array<any>): Array<any> {
    return arr;
}

/**
 * @description Returns a clone of arr and removes the last element of the array
 * @param first
 * @param arr
 */
export function pop(arr: Array<any>) {
    return arr.filter((val, i) => i < arr.length - 1);
}

