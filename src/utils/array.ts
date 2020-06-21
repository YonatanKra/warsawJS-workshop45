export function push(arr, item) {
    return [...arr, item];
}

export function unshift(arr, item) {
    return [item, ...arr];
}

export function splice(arr: Array<any>, startingIndex?: number, elementsToRemove?: number, ...replacements) {
    const removalRange = [startingIndex, startingIndex + elementsToRemove - 1];
    return arr.map((val, i) => (i >= removalRange[0] && i <= removalRange[1]) ? replacements[i - removalRange[0]]??undefined : val)
        .filter(val => val??false);
}

export function shift(arr) {
    return arr.filter((val, i) => i != 0);
}