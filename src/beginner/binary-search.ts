function print_binary_search_progress<T>(list: T[], element: T, startIndex: number, endIndex: number, mid: number) {
    const listString = list.map((element, _) => {
        return `${element}`.padStart(8)
    }).join('')

    const indices = list.map((_, index) => {
        return `${index}`.padStart(8)
    }).join('')

    const arrows = list.map((_, index) => {
        var ss = ''

        if (index === startIndex) {
            ss += 'S'
        }

        if (index === mid) {
            ss += 'M'
        }

        if (index === endIndex) {
            ss += 'E'
        }

        if (ss.length === 0) {
            ss = '    '
        }

        return ss.padStart(8)
    }).join('')

    console.log('index:\t', indices)
    console.log('items:\t', listString);
    console.log('\t', arrows)
    console.log('-'.padEnd(list.length * 8 + 12, '-'))
}

function binarySearch_impl<T>(list: T[], element: T, startIndex: number, endIndex: number): number {
    if (startIndex > endIndex) {
        return -1
    }

    const mid = Math.floor((startIndex + endIndex) / 2)

    print_binary_search_progress(list, element, startIndex, endIndex, mid)

    if (list[mid] === element) {
        return mid
    }

    if (list[mid] > element) {
        return binarySearch_impl(list, element, startIndex, mid - 1)
    } else {
        return binarySearch_impl(list, element, mid + 1, endIndex)
    }
}

export function binarySearch<T>(list: T[], element: T) {
    if (list.length === 0) {
        return -1
    }

    return binarySearch_impl(list, element, 0, list.length - 1)
}
