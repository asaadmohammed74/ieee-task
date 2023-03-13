export function findTwoLargest(list: number[]) {
    if (list.length < 2) {
        return null
    }

    let largest = 0
    let secondLargest = 0

    for (let i = 0; i < list.length; i++) {
        if (largest < list[i]) {
            secondLargest = largest
            largest = list[i]
        } else if (secondLargest < list[i]) {
            secondLargest = list[i]
        }
    }

    return [largest, secondLargest]
}