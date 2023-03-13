export function findLargestString(list: string[]) {
    if (list.length === 0) {
        return null
    }

    let largest = list[0]

    for (let i = 0; i < list.length; i++) {
        if (largest.length < list[i].length) {
            largest = list[i]
        }
    }

    return largest
}