export function sequentialSearch<T>(list: T[], element: T) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === element) {
            return i;
        }
    }

    return -1;
}
