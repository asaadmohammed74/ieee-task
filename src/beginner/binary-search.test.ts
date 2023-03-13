import { binarySearch } from "./binary-search"

describe('binary search odd list', () => {
    const list = [1, 2, 3, 4, 5]

    test('should find element', () => {
        const element = 3

        const result = binarySearch(list, element)

        expect(result).toBe(2)
    })

    test('should find element in beginning', () => {
        const element = 1

        const result = binarySearch(list, element)

        expect(result).toBe(0)
    })

    test('should find element in end', () => {
        const element = 5

        const result = binarySearch(list, element)

        expect(result).toBe(4)
    })

    test('should not find element smaller then min', () => {
        const element = 0

        const result = binarySearch(list, element)

        expect(result).toBe(-1)
    })

    test('should not find element bigger then max', () => {
        const element = 99

        const result = binarySearch(list, element)

        expect(result).toBe(-1)
    })
})

describe('binary search even list', () => {
    const list = [1, 2, 3, 4, 5, 6]

    test('should find element', () => {
        const element = 3

        const result = binarySearch(list, element)

        expect(result).toBe(2)
    })

    test('should find element in beginning', () => {
        const element = 1

        const result = binarySearch(list, element)

        expect(result).toBe(0)
    })

    test('should find element in end', () => {
        const element = 6

        const result = binarySearch(list, element)

        expect(result).toBe(5)
    })

    test('should not find element smaller then min', () => {
        const element = 0

        const result = binarySearch(list, element)

        expect(result).toBe(-1)
    })

    test('should not find element bigger then max', () => {
        const element = 99

        const result = binarySearch(list, element)

        expect(result).toBe(-1)
    })
})