import { sequentialSearch } from './sequential-search'

describe('sequential search', () => {
    const list = [1, 2, 3, 4, 5]

    test('should find element', () => {
        const element = 3

        const result = sequentialSearch(list, element)

        expect(result).toBe(2)
    })

    test('should find element in beginning', () => {
        const element = 1

        const result = sequentialSearch(list, element)

        expect(result).toBe(0)
    })

    test('should find element in end', () => {
        const element = 5

        const result = sequentialSearch(list, element)

        expect(result).toBe(4)
    })

    test('should not find element', () => {
        const element = 6

        const result = sequentialSearch(list, element)

        expect(result).toBe(-1)
    })
})